# Deployment Guide

This guide covers deploying the Oxford University Racing website to production.

## 🚀 Quick Deployment (Vercel)

### Prerequisites

- GitHub repository with the website code
- Vercel account (free tier available)
- Custom domain (optional)

### Step 1: Connect to Vercel

1. **Sign up for Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Step 2: Environment Variables

Add these environment variables in Vercel dashboard:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Step 3: Deploy

1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at `your-project.vercel.app`

## 🌐 Custom Domain Setup

### Adding Your Domain

1. **In Vercel Dashboard**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `oxforduniracing.com`)

2. **Configure DNS**
   - Point your domain's CNAME to `cname.vercel-dns.com`
   - Or use Vercel nameservers for full DNS management

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - HTTPS will be available within minutes

## 🔧 Decap CMS Setup

### GitHub OAuth Setup

1. **Create GitHub OAuth App**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Fill in details:
     - Application name: "Oxford Racing CMS"
     - Homepage URL: `https://your-domain.com`
     - Authorization callback URL: `https://your-domain.com/admin/`

2. **Configure Decap CMS**
   - Note your Client ID and Client Secret
   - Add to Vercel environment variables:
     ```bash
     GITHUB_CLIENT_ID=your_client_id
     GITHUB_CLIENT_SECRET=your_client_secret
     ```

3. **Enable Git Gateway**
   - In your repository settings
   - Go to Settings → Features
   - Enable "Git Gateway"

### Testing CMS Access

1. Visit `your-domain.com/admin`
2. Click "Login with GitHub"
3. Authorize the application
4. You should see the CMS dashboard

## ⚙️ GitHub Actions Setup

### Required Secrets

Add these secrets to your GitHub repository:

1. **Go to Repository Settings**
   - Settings → Secrets and variables → Actions
   - Add repository secrets:

```bash
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Getting Vercel Credentials

1. **Vercel Token**
   - Vercel Dashboard → Settings → Tokens
   - Create new token with appropriate scope

2. **Organization ID**
   - Vercel Dashboard → Settings → General
   - Copy Organization ID

3. **Project ID**
   - Project Settings → General
   - Copy Project ID

## 🔒 Security Configuration

### Content Security Policy

Add to `next.config.js`:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

### Repository Access

- Limit repository access to team members only
- Use branch protection rules for main branch
- Require pull request reviews for changes

## 📊 Analytics Setup

### Google Analytics

1. **Create GA4 Property**
   - Visit [analytics.google.com](https://analytics.google.com)
   - Create new property for your domain

2. **Add Tracking ID**
   - Copy your Measurement ID (G-XXXXXXXXXX)
   - Add to environment variables as `NEXT_PUBLIC_GA_ID`

3. **Verify Installation**
   - Use Google Analytics debugger
   - Check real-time reports

### Performance Monitoring

Consider adding:
- Vercel Analytics (built-in)
- Web Vitals monitoring
- Error tracking (Sentry)

## 🚀 Deployment Checklist

### Pre-Deployment

- [ ] Test build locally (`npm run build`)
- [ ] Check all environment variables
- [ ] Verify all pages load correctly
- [ ] Test CMS functionality
- [ ] Review content for accuracy
- [ ] Optimize images for web

### Post-Deployment

- [ ] Verify site loads at custom domain
- [ ] Test CMS login and content editing
- [ ] Check mobile responsiveness
- [ ] Validate HTML and accessibility
- [ ] Submit sitemap to search engines
- [ ] Set up monitoring and alerts

## 🔄 Continuous Deployment

### Automatic Deployments

The site automatically deploys when:
- Code is pushed to main branch
- Content is updated via CMS
- Pull requests are merged

### Manual Deployment

To trigger manual deployment:
1. Push any commit to main branch
2. Or redeploy from Vercel dashboard

## 📱 Testing & QA

### Browser Testing

Test on:
- Chrome (desktop/mobile)
- Firefox (desktop/mobile)
- Safari (desktop/mobile)
- Edge (desktop)

### Performance Testing

- Run Lighthouse audits
- Check Core Web Vitals
- Test loading speeds
- Verify image optimization

### Content Testing

- Test all CMS workflows
- Verify content displays correctly
- Check all internal links
- Validate forms and contact info

## 🚨 Troubleshooting

### Build Failures

Common issues:
- TypeScript errors: Run `npm run type-check`
- Missing dependencies: Check package.json
- Environment variables: Verify all required vars set

### CMS Issues

- **Can't login**: Check GitHub OAuth configuration
- **Content not updating**: Verify webhook setup
- **Images not uploading**: Check file size and format

### Performance Issues

- Enable Next.js image optimization
- Implement proper caching headers
- Optimize bundle size
- Use CDN for static assets

## 📞 Support

### Emergency Contacts

- **Technical Lead**: technical@oxforduniracing.com
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Domain Provider**: Contact your DNS provider

### Documentation

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Decap CMS Docs](https://decapcms.org/docs/)

---

*For additional support, create an issue in the GitHub repository or contact the development team.*