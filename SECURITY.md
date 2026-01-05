# Security Policy

## About This Repository

This is **Srapsware's private business website**. The code is public for **educational purposes only**.

**Important:** This security policy applies to **our live production website** (https://www.srapsware.com), not to any copies, forks, or clones you might create.

---

## Supported Versions

We actively support the following versions of the Srapsware website:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

**Only report vulnerabilities in our live production website** at https://www.srapsware.com

⚠️ **We do NOT provide security support for:**
- Cloned or copied versions of this code
- Forked repositories
- Modified versions you create
- Your own implementations

If you find a vulnerability **in our live website**, we take it seriously.

### 🔒 Responsible Disclosure

**DO NOT** open a public issue for security vulnerabilities.

Instead, please report security issues to:

📧 **Email:** contact@srapsware.com

### What to Include

Please provide the following information:

1. **Type of vulnerability** - XSS, CSRF, SQL injection, etc.
2. **Location** - URL, file path, or component affected
3. **Steps to reproduce** - Detailed steps to reproduce the issue
4. **Proof of concept** - Code or screenshots demonstrating the vulnerability
5. **Impact** - What could an attacker accomplish?
6. **Suggested fix** - If you have ideas for remediation

### Response Timeline

- **Acknowledgment:** Within 48 hours
- **Initial assessment:** Within 1 week
- **Status update:** Weekly until resolved
- **Fix deployment:** Depends on severity
  - Critical: Within 24-48 hours
  - High: Within 1 week
  - Medium: Within 2 weeks
  - Low: Next release cycle

### What to Expect

1. **Acknowledgment** - We'll confirm receipt of your report
2. **Investigation** - We'll verify and assess the vulnerability
3. **Communication** - We'll keep you updated on progress
4. **Resolution** - We'll deploy a fix and notify you
5. **Credit** - With your permission, we'll credit you in our security advisory

## Security Best Practices

### For Contributors

- **Never commit secrets** - Use environment variables
- **Validate input** - Always sanitize user input
- **Use HTTPS** - All production traffic should be encrypted
- **Update dependencies** - Keep packages up to date
- **Follow OWASP** - Adhere to OWASP Top 10 guidelines

### For Users

- **Environment Variables** - Never commit `.env` files
- **API Keys** - Keep your API keys secure
- **Updates** - Keep your deployment updated
- **Access Control** - Limit admin access appropriately

## Known Security Considerations

### Environment Variables Required

The following sensitive data should be set via environment variables:

```bash
# Email Configuration
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=

# Mailchimp
MAILCHIMP_API_KEY=
MAILCHIMP_AUDIENCE_ID=
MAILCHIMP_API_SERVER=

# GitHub OAuth (for CMS)
GITHUB_OAUTH_CLIENT_ID=
GITHUB_OAUTH_CLIENT_SECRET=
```

### Content Security

- Blog content and portfolio items are stored in Git
- User-uploaded files go through validation
- All form submissions are rate-limited

### Third-Party Services

We use the following third-party services:
- **Vercel** - Hosting and deployment
- **Mailchimp** - Newsletter management
- **GitHub** - CMS authentication
- **Google Analytics** - (if enabled) Analytics

## Security Headers

Our deployment includes standard security headers:
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## Dependency Security

We regularly audit dependencies using:
```bash
pnpm audit
```

Run this command regularly to check for known vulnerabilities.

## Contact

- **Email:** contact@srapsware.com
- **Website:** https://www.srapsware.com

---

Thank you for helping keep Srapsware and our users safe! 🔒
