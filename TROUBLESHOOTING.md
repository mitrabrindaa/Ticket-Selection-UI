# Troubleshooting Guide

## Issues & Solutions

### 1. Front Page Not Changing

**Problem**: The event landing page still looks like the old version.

**Solution**:
1. **Hard Refresh** your browser:
   - Windows/Linux: `Ctrl + Shift + R` or `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Clear Browser Cache**:
   - Chrome: Settings → Privacy and Security → Clear browsing data → Cached images and files
   - Or: Open DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"

3. **Verify Dev Server is Running**:
   - Make sure `npm run dev` is running
   - Check terminal for any errors
   - Try stopping and restarting: `Ctrl+C` then `npm run dev` again

### 2. Tickets Page Shows Black/Empty Content

**Possible Causes**:

#### A. API Proxy Not Working
The app needs the Vite dev server's proxy to work.

**Check**:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for errors like "Failed to fetch" or CORS errors
4. Go to Network tab, reload the page
5. Look for `/api/sections/availability` request
6. Check if it returns 200 or an error

**Solution**:
- Verify dev server is running on correct port (usually 5173)
- Check `vite.config.js` has the proxy configuration
- Restart dev server

#### B. CSS Not Loading
**Check**:
1. Open DevTools (F12) → Elements tab
2. Inspect the tickets page elements
3. Check if styles are applied

**Solution**:
- Hard refresh (Ctrl + Shift + R)
- Check if `index.css` is imported in `main.jsx`

#### C. Text Color Same as Background
If you see the header "ONLYBEES" but nothing else:

**Solution**:
- Open DevTools Console
- Type: `document.querySelectorAll('.event-info, .sections-container').forEach(el => el.style.border = '2px solid red')`
- This will show if elements exist but are invisible

### 3. Checking What's Actually Running

Open your browser to `http://localhost:5173` and check:

1. **Home Page (`/`)**:
   - Should show OnlyBees logo top-left
   - Event poster in center
   - "Mohombi Live in Shillong" title
   - Green "Book Tickets" button

2. **Tickets Page (`/tickets`)**:
   - OnlyBees header at top
   - Event info section
   - Venue layout image
   - "Select Tickets" heading
   - Ticket cards (if API works)

3. **Checkout Page (`/checkout`)** ✓:
   - You already confirmed this works!
   - Green checkmark
   - "Checkout Complete" message

## Quick Diagnostic Steps

### Step 1: Check Dev Server
```bash
# In terminal where dev server is running
# You should see: "Local: http://localhost:5173/"
```

### Step 2: Check Browser Console
1. Press F12
2. Go to Console tab
3. Look for errors (red text)
4. Copy any errors you see

### Step 3: Check Network Tab
1. Press F12
2. Go to Network tab
3. Reload page
4. Look for `/api/sections/availability`
5. Click on it to see response

### Step 4: Force Update
```bash
# Stop server (Ctrl+C)
# Clear cache
npm run dev
# Then hard refresh browser (Ctrl+Shift+R)
```

## Common Error Messages

### "Failed to fetch"
- Dev server not running or wrong port
- Check terminal for server status

### "CORS error"
- Proxy not configured correctly
- Restart dev server

### "Cannot read property of undefined"
- API returned unexpected data format
- Check Network tab for actual response

### Blank/Black Page
- CSS not loaded → Hard refresh
- Elements have no content → Check API response
- Text color = background color → CSS issue

## Test API Manually

Open browser DevTools console and run:
```javascript
fetch('/api/sections/availability')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error)
```

This should show the ticket sections data.

## Nuclear Option: Fresh Start

If nothing works:
```bash
# Stop dev server (Ctrl+C)
# Delete node_modules
rm -rf node_modules
# Delete package-lock.json
rm package-lock.json
# Reinstall
npm install
# Restart
npm run dev
```

Then hard refresh browser (Ctrl+Shift+R)

## What to Check Next

1. ✓ Checkout page works (you confirmed)
2. ? Event page styling
3. ? Tickets page visibility
4. ? API connection

Please:
1. **Hard refresh** your browser (Ctrl+Shift+R)
2. **Check browser console** for errors (F12 → Console tab)
3. **Check Network tab** for API call (F12 → Network tab)
4. **Take screenshot** of what you see and any console errors
