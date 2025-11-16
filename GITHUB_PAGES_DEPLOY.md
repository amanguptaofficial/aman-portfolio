# GitHub Pages Deployment Guide

## 🚀 GitHub Pages par Deploy kaise karein

### Step 1: Environment Variables Setup

**Important:** EmailJS credentials setup karein before deployment:

1. `.env` file create karein (agar nahi hai):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. **GitHub Pages ke liye Environment Variables:**
   - GitHub Pages static hosting hai, directly `.env` file support nahi karti
   - **Option 1:** Code mein directly hardcode karein (public repo ke liye okay hai)
   - **Option 2:** GitHub Actions use karein build time par env variables inject karne ke liye

### Step 2: Build karein
```bash
npm install
npm run build
```

### Step 3: GitHub Repository Setup
1. GitHub par repository create karein
2. Code push karein:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Step 4: GitHub Pages Enable karein
1. Repository Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / `gh-pages`
4. Folder: `/ (root)` ya `/docs` (agar `dist` folder ko `docs` rename kiya ho)

### Step 5: Vite Config Update (agar needed)
`vite.config.js` mein base path add karein:
```javascript
export default {
  base: '/your-repo-name/', // GitHub repo name
  // ... rest of config
}
```

## 📧 Contact Form - EmailJS Integration

### ✅ Current Setup:
- **EmailJS** successfully integrated
- Form submissions **directly aapke email** par aayenge
- No backend required - GitHub Pages compatible
- Free plan: 200 emails/month

### 📝 EmailJS Configuration:

1. **EmailJS Account:**
   - https://www.emailjs.com/ par account create karein
   - Free plan sufficient hai (200 emails/month)

2. **Setup Complete:**
   - Service ID, Template ID, Public Key already configured
   - Form submissions automatically email mein jayenge

3. **Email Format:**
   - Name, Email, Message, Date/Time sab details email mein aayenge
   - Direct reply kar sakte ho user ko

### 🔧 Environment Variables for Production:

**Option 1: Direct in Code (Quick)**
`src/components/Contact.jsx` mein directly update karein:
```javascript
const EMAILJS_SERVICE_ID = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY = 'your_public_key'
```

**Option 2: GitHub Actions (Advanced)**
GitHub Actions workflow bana kar build time par env variables inject karein.

## 📦 Current Setup Benefits:

✅ **GitHub Pages Compatible** - Free hosting
✅ **No Backend Required** - Static site
✅ **Easy Deployment** - Just push to GitHub
✅ **Email Integration** - Direct email notifications via EmailJS
✅ **Free Service** - 200 emails/month free
✅ **Real-time** - Instant email delivery

## 🎯 Best Practices:

1. **EmailJS Dashboard** regularly check karein for email logs
2. **Spam Folder** check karein agar emails nahi aa rahe
3. **Rate Limit** - Free plan: 200 emails/month
4. **Email Template** customize karein as needed

## 📚 Related Documentation:

- **EmailJS Setup Guide:** `EMAILJS_SETUP.md` - Complete setup instructions
- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **EmailJS Docs:** https://www.emailjs.com/docs/

---

**Note:** GitHub Pages static hosting hai, isliye backend/server setup nahi kar sakte. EmailJS perfect solution hai jo static sites ke liye email functionality provide karta hai.

