# Deployment Instructions

## Deploy to Vercel

### Option 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - OnlyBees clone"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Environment Variables**
   - No environment variables needed (API proxy works in production)

4. **Build Settings (Auto-detected)**
   - Build Command: `vite build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Configure Redirects**
   Create `public/_redirects`:
   ```
   /api/*  https://concertsapi.onlybees.in/api/:splat  200
   /*  /index.html  200
   ```

## Testing Locally

Before deploying, test the production build:

```bash
npm run build
npm run preview
```

Then navigate to the URL shown (usually `http://localhost:4173`)

## Post-Deployment Checklist

- [ ] Verify all routes work (/, /tickets, /checkout)
- [ ] Test API integration is working
- [ ] Check console logs on checkout
- [ ] Test ticket add/remove functionality
- [ ] Verify responsive design on mobile
- [ ] Check all images load correctly
- [ ] Test navigation between pages

## Update README

After deployment, update `README-PROJECT.md`:

Replace:
```markdown
[Add your deployed Vercel link here]
```

With:
```markdown
https://your-app-name.vercel.app
```

## Common Issues

### API Not Working in Production
- Ensure Vite proxy is properly configured
- Check Vercel/Netlify redirects are set up
- Verify CORS headers from API

### Routes Not Working
- Add `_redirects` file for Netlify
- Vercel handles SPA routing automatically

### Build Fails
- Run `npm install` to ensure dependencies are installed
- Check for ESLint errors: `npm run lint`
- Verify Node.js version compatibility
