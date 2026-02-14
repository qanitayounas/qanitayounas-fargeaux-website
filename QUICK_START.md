# Fargeaux Website - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Start Development Server
```bash
npm run dev
```
Website runs on: **http://localhost:3000**

### 3. View Your Site
Open browser and navigate to localhost:3000

## 📍 Available Routes

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/` | Main landing page with all sections |
| Features | `/features` | Detailed feature showcase |
| Pricing | `/pricing` | Pricing plans and comparison |
| Contact | `/contact` | Contact form and FAQ |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## 🎨 Customization Quick Links

### Change Brand Colors
**File**: `app/globals.css` (lines 17-37)
```css
:root {
  --primary: 172 100% 30%; /* Change primary teal */
  --accent: 30 100% 50%;   /* Change accent orange */
  /* ... other colors */
}
```

### Update Copy/Text
- Homepage sections: `components/sections/*.tsx`
- Individual pages: `app/*/page.tsx`
- Header/Footer: `components/common/*.tsx`

### Add New Page
1. Create folder: `app/newpage/`
2. Create file: `app/newpage/page.tsx`
3. Add to header navigation: `components/common/header.tsx`

### Update Contact Form
**File**: `app/contact/page.tsx` (line ~30-50)
- Add email handling API call
- Integrate with your backend service

## 🔧 Key Files to Know

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with Header/Footer |
| `app/page.tsx` | Homepage - imports all sections |
| `app/globals.css` | Global styles and design tokens |
| `tailwind.config.ts` | Tailwind configuration |
| `components/common/header.tsx` | Navigation menu |
| `components/sections/*.tsx` | Homepage sections |

## 📱 Responsive Breakpoints

```bash
Mobile:  < 640px    (default)
Tablet:  md: 768px  (add 'md:' prefix)
Desktop: lg: 1024px (add 'lg:' prefix)
```

**Example**:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🎯 Design System

### Colors (CSS Variables)
- `--primary`: Main teal color
- `--secondary`: Light teal accent
- `--accent`: Orange for CTAs
- `--background`: Light background
- `--foreground`: Text color

**Usage**: `bg-primary`, `text-accent`, `border-border`

### Spacing
Use Tailwind scale: `p-4`, `gap-6`, `mb-8`

### Fonts
- Headings: `font-poppins` (Poppins)
- Body: `font-sans` (System font)

## 🚢 Deploy to Production

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### GitHub + Vercel Auto-Deploy
```bash
git add .
git commit -m "Deploy website"
git push
# Vercel auto-deploys on push
```

## 📊 Performance Tips

- Images: Use Next.js Image component
- CSS: Let Tailwind handle styling
- Fonts: Already optimized with next/font
- Animations: Use Tailwind duration classes

## 🐛 Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styling Not Updating
- Clear cache: `rm -rf .next`
- Hard refresh browser: `Ctrl+Shift+R`

### Mobile Menu Not Working
- Ensure `'use client'` at top of header.tsx
- Check state management logic

### Colors Wrong
- Check globals.css CSS variables
- Verify hex values in brand guide
- Clear browser cache

## 📚 Resources

- **Full Documentation**: See `WEBSITE_DOCUMENTATION.md`
- **Build Summary**: See `BUILD_SUMMARY.md`
- **Tailwind Docs**: https://tailwindcss.com
- **Next.js Docs**: https://nextjs.org
- **Lucide Icons**: https://lucide.dev

## ✅ Pre-Launch Checklist

Before going live:
- [ ] Test all pages on mobile
- [ ] Test all links work
- [ ] Test contact form
- [ ] Check spelling and grammar
- [ ] Verify brand colors
- [ ] Test animations
- [ ] Check accessibility
- [ ] Set up analytics
- [ ] Configure email service
- [ ] Add favicon
- [ ] Update meta descriptions
- [ ] Test on multiple browsers

## 🎓 Learning Path

1. **Understand Structure**: Read WEBSITE_DOCUMENTATION.md
2. **Explore Components**: Check components/sections/
3. **Modify Styling**: Update globals.css and tailwind.config.ts
4. **Update Content**: Edit page.tsx files
5. **Deploy**: Push to GitHub/Vercel

## 💡 Pro Tips

- Use Tailwind's responsive prefixes instead of media queries
- Keep components focused and single-responsibility
- Use design tokens for consistency
- Test on real mobile device, not just browser devtools
- Use `npm run build` before deploying to catch issues

## 🚨 Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run linting
git push         # Deploy to Vercel (if connected)
```

## 📞 Support

- **Technical Issues**: Check WEBSITE_DOCUMENTATION.md
- **Build Questions**: See BUILD_SUMMARY.md
- **Customization**: Edit the component files
- **Styling**: Update tailwind.config.ts and globals.css

---

**Website Status**: ✅ Ready to Launch  
**Framework**: Next.js 16  
**Styling**: Tailwind CSS  
**Deployment**: Vercel-Ready
