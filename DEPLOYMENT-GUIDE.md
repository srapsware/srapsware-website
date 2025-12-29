# Deployment Guide - DecapCMS + Next.js on Vercel

## Overview
This guide explains how to deploy your Next.js website with DecapCMS to Vercel with GitHub OAuth authentication.

## Prerequisites
- GitHub account
- Vercel account
- Your code pushed to a GitHub repository

---

## Step 1: Create GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in the details:
   - **Application name**: `Srapsware CMS`
   - **Homepage URL**: `https://your-domain.vercel.app`
   - **Authorization callback URL**: `https://your-domain.vercel.app/api/auth`
4. Click **"Register application"**
5. Copy the **Client ID**
6. Click **"Generate a new client secret"** and copy the **Client Secret**
7. Keep these credentials safe - you'll need them for Vercel

---

## Step 2: Update DecapCMS Config

Open `public/admin/config.yml` and update:

```yaml
backend:
  name: github
  repo: your-github-username/srapsware-website  # Update this
  branch: main
  base_url: https://your-domain.vercel.app      # Update this
  auth_endpoint: /api/auth
```

**Important**: 
- Replace `your-github-username/srapsware-website` with your actual GitHub repo
- Replace `https://your-domain.vercel.app` with your Vercel domain (or custom domain)
- For local development, keep `local_backend: true` enabled

---

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..." → "Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build` (or leave default)
   - **Output Directory**: `.next` (or leave default)
5. Click **"Deploy"**

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

---

## Step 4: Add Environment Variables to Vercel

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add the following variables:

| Name | Value | Environment |
|------|-------|-------------|
| `GITHUB_OAUTH_CLIENT_ID` | Your GitHub OAuth Client ID | Production, Preview, Development |
| `GITHUB_OAUTH_CLIENT_SECRET` | Your GitHub OAuth Client Secret | Production, Preview, Development |

4. Click **"Save"**
5. Redeploy your project to apply the environment variables

---

## Step 5: Update OAuth Callback URL

After your Vercel deployment:

1. Note your Vercel domain (e.g., `https://srapsware-website.vercel.app`)
2. Go back to your [GitHub OAuth App settings](https://github.com/settings/developers)
3. Update the **Authorization callback URL** to: `https://your-vercel-domain.vercel.app/api/auth`
4. Click **"Update application"**

If using a custom domain:
- Add custom domain in Vercel project settings
- Update OAuth callback URL to your custom domain
- Update `base_url` in `config.yml` to your custom domain

---

## Step 6: Access the CMS

1. Go to `https://your-domain.vercel.app/admin/`
2. Click **"Login with GitHub"**
3. Authorize the OAuth app
4. You're in! Start editing content

---

## Local Development Setup

For local development with the proxy backend:

1. Keep `local_backend: true` in `config.yml`
2. Comment out the GitHub backend section
3. Run the local proxy:
   ```bash
   pnpm add -D decap-server
   pnpm decap-server
   ```
4. In another terminal, run Next.js:
   ```bash
   pnpm dev
   ```
5. Access CMS at `http://localhost:3000/admin/`

---

## Editorial Workflow (Optional)

The CMS is configured with `publish_mode: editorial_workflow` which enables:

- **Draft**: Save work without publishing
- **In Review**: Submit for review
- **Ready**: Approve and publish

To disable this and publish directly:
```yaml
# In config.yml, remove or comment out:
# publish_mode: editorial_workflow
```

---

## Media Storage

Currently configured for **local storage**:
```yaml
media_folder: 'public/assets/uploads'
public_folder: '/assets/uploads'
```

### Upgrade to Cloudinary (Recommended for Production)

1. Sign up for [Cloudinary](https://cloudinary.com/)
2. Get your Cloud Name and API credentials
3. Update `config.yml`:
   ```yaml
   media_library:
     name: cloudinary
     config:
       cloud_name: your_cloud_name
       api_key: your_api_key
   ```
4. Add Cloudinary widget script to `public/admin/index.html`:
   ```html
   <script src="https://media-library.cloudinary.com/global/all.js"></script>
   ```

---

## Troubleshooting

### Issue: "Failed to load config.yml"
- Check that `public/admin/config.yml` exists
- Verify YAML syntax (no tabs, proper indentation)

### Issue: "OAuth authentication failed"
- Verify GitHub OAuth App settings
- Check environment variables in Vercel
- Ensure callback URL matches exactly (including https://)

### Issue: "Not authorized to edit this repo"
- Your GitHub account must have write access to the repository
- Check repo name in config.yml is correct

### Issue: Changes not appearing on site
- Content is saved to GitHub, but Next.js needs to rebuild
- Vercel automatically rebuilds on git push
- For immediate updates, trigger a manual deployment in Vercel

---

## Production Checklist

- [ ] GitHub OAuth App created
- [ ] Environment variables added to Vercel
- [ ] `config.yml` updated with correct repo and domain
- [ ] OAuth callback URL matches Vercel domain
- [ ] Test login at `/admin/`
- [ ] Test creating/editing content
- [ ] Verify changes appear on site after deployment
- [ ] Set up custom domain (optional)
- [ ] Configure Cloudinary for media (optional)

---

## Security Best Practices

1. **Never commit** `.env.local` with real credentials
2. Use Vercel environment variables for secrets
3. Enable branch protection rules in GitHub
4. Limit OAuth app access to necessary scopes
5. Regularly rotate OAuth credentials
6. Use editorial workflow for team editing

---

## Resources

- [DecapCMS Documentation](https://decapcms.org/docs/)
- [Next.js + DecapCMS Guide](https://decapcms.org/docs/nextjs/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)
