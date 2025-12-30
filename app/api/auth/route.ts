import { NextRequest, NextResponse } from 'next/server'

// GitHub OAuth configuration
const OAUTH_TOKEN_URL = 'https://github.com/login/oauth/access_token'
const OAUTH_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize'

// Get from environment variables
const CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID
const CLIENT_SECRET = process.env.GITHUB_OAUTH_CLIENT_SECRET

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const provider = searchParams.get('provider')

  // Step 1: Redirect to GitHub OAuth
  if (!code && provider === 'github') {
    const authUrl = new URL(OAUTH_AUTHORIZE_URL)
    authUrl.searchParams.set('client_id', CLIENT_ID || '')
    authUrl.searchParams.set('scope', 'repo,user')
    authUrl.searchParams.set('redirect_uri', `${request.nextUrl.origin}/api/auth`)
    
    return NextResponse.redirect(authUrl.toString())
  }

  // Step 2: Exchange code for token
  if (code) {
    try {
      const response = await fetch(OAUTH_TOKEN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
          redirect_uri: `${request.nextUrl.origin}/api/auth`,
        }),
      })

      const data = await response.json()

      if (data.error) {
        return NextResponse.json(
          { error: data.error_description || 'Authentication failed' },
          { status: 400 }
        )
      }

      // Return token to DecapCMS
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Authentication Success</title>
          </head>
          <body>
            <script>
              (function() {
                // Shape expected by Decap: { token: "..." }
                const payload = { token: '${data.access_token || ''}', provider: 'github' };

                function receiveMessage(e) {
                  console.log("receiveMessage %o", e);
                  window.opener.postMessage(
                    'authorization:github:success:' + JSON.stringify(payload),
                    '*'
                  );
                  window.close();
                }

                window.addEventListener("message", receiveMessage, false);
                window.opener.postMessage("authorizing:github", "*");
              })()
            </script>
            <p>Authorizing... You can close this window.</p>
          </body>
        </html>
      `

      return new NextResponse(html, {
        headers: { 'Content-Type': 'text/html' },
      })
    } catch (error) {
      console.error('OAuth error:', error)
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json(
    { error: 'Invalid request' },
    { status: 400 }
  )
}
