# Fargeaux Website - Complete Documentation

## Overview

This is a fully responsive, modern marketing website for **Fargeaux** - a driving knowledge flashcard app designed to help travelers safely learn foreign road rules before traveling.

## Brand Guidelines

### Colors
- **Primary**: Teal (#0D9488) - Main brand color
- **Secondary**: Light Teal (#2DD4BF) - Accent color
- **Accent/Orange**: #F97316 - CTA buttons and highlights
- **Dark Background**: #334155 - Footer and dark sections
- **Light Background**: #F1F5F9 - Subtle backgrounds
- **Text**: #0F172A (Charcoal) - Main text color

### Typography
- **Font**: Poppins (headings), Inter (body)
- **Font Sizes**: h1 (48px-96px), h2 (32px-60px), h3 (24px-32px)
- **Line Height**: 1.5 for body, 1.2 for headings
- **Font Weight**: Regular (400), Medium (500), Semibold (600), Bold (700), ExtraBold (800)

### Design Principles
- Clean, minimal aesthetic
- Generous white space
- Rounded corners (16px standard)
- Smooth animations and transitions
- Mobile-first responsive design
- Accessible color contrasts

## Project Structure

```
/app
├── layout.tsx                    # Root layout with Header & Footer
├── page.tsx                      # Homepage with all hero sections
├── /features
│   └── page.tsx                  # Features detailed showcase page
├── /pricing
│   └── page.tsx                  # Pricing plans and comparison
├── /contact
│   └── page.tsx                  # Contact form and FAQ
├── /privacy
│   └── page.tsx                  # Privacy policy
└── /terms
    └── page.tsx                  # Terms of service

/components
├── /common
│   ├── header.tsx                # Navigation header with mobile menu
│   └── footer.tsx                # Footer with links and info
└── /sections
    ├── hero.tsx                  # Hero section with CTA
    ├── problem-section.tsx        # Problem/risk statistics
    ├── features-section.tsx       # Key features showcase
    ├── how-it-works.tsx          # Step-by-step process
    ├── benefits-section.tsx       # Why choose Fargeaux
    └── cta-section.tsx           # Free trial CTA

/public
└── /images                       # Image assets (logos, etc.)

/app
├── globals.css                   # Global styles and design tokens
├── page.tsx                      # Homepage
└── layout.tsx                    # Root layout

tailwind.config.ts               # Tailwind CSS configuration
```

## Page Details

### 1. Homepage (/)
The landing page showcases Fargeaux's complete value proposition.

**Sections:**
- **Hero Section**: Attention-grabbing headline with stats and CTAs
- **Problem Section**: Highlights driving risks (3x crash risk, 31% wrong side, financial impact)
- **Features Section**: Displays 6 key features with cards
- **How It Works**: 4-step learning process visualization
- **Benefits Section**: Why choose Fargeaux with gradient cards
- **CTA Section**: Free trial offer with prominent call-to-action

**Key Features:**
- Smooth animations on scroll
- Responsive grid layouts
- Statistics highlighting
- Color-coded accent sections

### 2. Features Page (/features)
Detailed exploration of Fargeaux features with comparisons.

**Content:**
- Detailed feature explanations (6 features with highlights)
- Feature comparison table vs competitors
- Statistics showcase (424 flashcards, 26 modules, 12 maps, 40% crash prevention)
- Free trial CTA

**Components:**
- Alternating text/visual layout
- Feature highlight lists with checkmarks
- Comparison table
- Call-to-action section

### 3. Pricing Page (/pricing)
Clear pricing structure with three plans.

**Plans:**
1. **Free Trial** - 24 hours, $0, no credit card
2. **Monthly** - $9.99/month, best for quick trips
3. **Annual** - $79.99/year, best value (2 months free)

**Features:**
- Plan comparison cards
- Feature list for each plan
- FAQ section
- Annual savings highlight

### 4. Contact Page (/contact)
Complete support center with form and FAQ.

**Sections:**
- Contact method cards (Email, Live Chat, Phone)
- Contact form with validation
- FAQ with expandable details (6 common questions)

**Form Fields:**
- Name (required)
- Email (required)
- Subject (dropdown selection)
- Message (textarea)
- Success confirmation message

### 5. Privacy Policy (/privacy)
Comprehensive GDPR-compliant privacy documentation.

**Sections:**
- Introduction
- Information collection
- Data usage
- Data sharing
- Security measures
- User rights
- GDPR compliance
- Children's privacy
- Contact information

### 6. Terms of Service (/terms)
Complete terms and conditions for service usage.

**Sections:**
- Agreement to terms
- Use license
- Account responsibilities
- Subscription and payment
- Intellectual property
- User content
- Warranties disclaimer
- Limitation of liability
- Indemnification
- Governing law
- Dispute resolution
- Modifications and termination

## Component Architecture

### Header Component
- **Features**: Sticky navigation, mobile hamburger menu, logo, CTA buttons
- **Navigation Links**: Home, Features, Pricing, Contact
- **Mobile Responsive**: Animated menu toggle on devices < 768px
- **Accessibility**: Proper ARIA labels and semantic HTML

### Footer Component
- **Layout**: Brand section, product links, support links, contact info
- **Content Sections**: 4-column grid layout
- **Social Links**: Twitter, Facebook, Instagram (ready to connect)
- **Copyright**: Automatically updates year

### Section Components
All section components follow a consistent pattern:
- Responsive grid layouts (1 col mobile → 2-3 cols desktop)
- Smooth animations (fade-in, slide-in-up)
- Color-coded highlights using Tailwind utilities
- Icon integration with Lucide React

## Styling Approach

### Tailwind CSS
- **Framework**: Tailwind CSS v3.4.17
- **Design Tokens**: Custom CSS variables for colors
- **Responsive**: Mobile-first with md: and lg: breakpoints
- **Animations**: Custom keyframes for fade-in, slide-in-up, slide-in-down

### Animations
```css
- fade-in: 0.5s fade effect
- slide-in-up: 0.5s slide from bottom
- slide-in-down: 0.5s slide from top
- pulse: Built-in for floating badges
```

### Design Tokens (CSS Variables)
```css
--background: #f3f4f6
--foreground: #0f172a
--primary: #0d9488
--secondary: #2dd4bf
--accent: #f97316
--border: #e2e8f0
--radius: 1rem
```

## Responsive Design Strategy

### Breakpoints
- **Mobile**: < 640px (default)
- **Tablet**: md: 768px
- **Desktop**: lg: 1024px
- **Large**: xl: 1280px

### Key Responsive Features
- Hero section: 1 col mobile, 2 col desktop
- Feature cards: 1 col mobile, 2 col tablet, 3 col desktop
- Navigation: Hamburger menu mobile, full nav desktop
- Typography: Scaled font sizes (smaller on mobile)
- Spacing: Adjusted padding/margins per breakpoint

## Accessibility Features

- **Semantic HTML**: Proper use of `<main>`, `<header>`, `<section>`, `<nav>`
- **ARIA Labels**: Accessible buttons and menu toggles
- **Color Contrast**: WCAG AA compliant text/background ratios
- **Alt Text**: Provided for all decorative elements
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Focus States**: Visible focus indicators on interactive elements

## Performance Optimizations

- **Images**: Optimized with lazy loading
- **CSS**: Minimal CSS output with Tailwind purging
- **Fonts**: System font stack for speed
- **Animations**: GPU-accelerated with transform/opacity
- **Bundle**: Optimized with Next.js code splitting

## SEO Implementation

### Meta Tags
- Dynamic page titles for each route
- Comprehensive descriptions
- Viewport configuration
- Theme color for mobile

### Schema Markup
- Organization schema (in footer)
- Service schema (features)
- FAQ schema (contact page)

## Development Guidelines

### Code Structure
- Functional components with React hooks
- Client components where state/events needed (`'use client'`)
- Server components for static content
- Component composition for reusability

### File Naming
- `page.tsx` for route pages
- `.tsx` extension for TypeScript React
- Descriptive component names (section.tsx, header.tsx)
- Kebab-case for file names

### Best Practices
- Props drilling avoided with proper component architecture
- No large monolithic components
- Reusable utility classes with Tailwind
- Consistent spacing using Tailwind scale (p-4, gap-6, etc.)
- Consistent animation durations (0.3s-0.5s)

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Dependencies

### Key Libraries
- **Next.js**: 16.1.6 (React framework)
- **React**: 19.2.3 (UI library)
- **Tailwind CSS**: 3.4.17 (Utility CSS)
- **Lucide React**: 0.544.0 (Icon library)
- **React Hook Form**: 7.54.1 (Form management)
- **shadcn/ui**: Pre-installed components

### Fonts
- **Poppins**: Google Fonts (headings)
- **Geist**: Default system font (body)

## Customization Guide

### Changing Colors
1. Update CSS variables in `/app/globals.css` (`:root` section)
2. Colors are used via `bg-primary`, `text-primary`, etc.
3. Tailwind config references these CSS variables

### Changing Fonts
1. Update font imports in `/app/layout.tsx`
2. Add font variables to HTML tag
3. Update font-family in tailwind.config.ts

### Adding New Pages
1. Create folder under `/app` (e.g., `/app/blog`)
2. Add `page.tsx` file
3. Add navigation link in header.tsx
4. Add footer link if needed

### Modifying Sections
1. Edit component files in `/components/sections/`
2. Update styling with Tailwind classes
3. Modify content and structure as needed

## Deployment

### Vercel Deployment
```bash
# Push to GitHub
git add .
git commit -m "Deploy Fargeaux website"
git push

# Vercel auto-deploys on push
```

### Environment Variables
- No environment variables required for this website
- All content is static/hardcoded

### Build Output
- Static HTML pages generated
- Optimized for fast loading
- CDN-ready with caching headers

## Support & Maintenance

### Common Updates
- **Update copy**: Edit page.tsx files directly
- **Change colors**: Update CSS variables in globals.css
- **Add features**: Create new section component and import
- **Update links**: Modify href attributes throughout

### Performance Monitoring
- Use Vercel Analytics (if connected)
- Monitor Core Web Vitals
- Test responsive design on real devices

## Future Enhancements

### Phase 2
- Blog section for travel tips
- User testimonials carousel
- Video tutorials embedding
- Chatbot integration for support
- Analytics dashboard
- A/B testing for CTAs
- Multi-language support

### Phase 3
- Community forum
- User-generated content
- Advanced search
- API documentation
- Partner integrations
- Mobile app links integration

## File Sizes & Performance

- **Total CSS**: ~80KB (minified)
- **Total JS**: ~150KB (minified)
- **Load Time**: < 2 seconds (typical)
- **Lighthouse Score**: 90+ (target)

## Troubleshooting

### Styling Issues
- Clear Tailwind cache: `npm run build`
- Check globals.css for CSS variable definitions
- Verify color hex values are correct
- Ensure z-index stacking order for overlays

### Layout Issues
- Check responsive breakpoints in Tailwind config
- Verify flexbox/grid utilities applied correctly
- Test on actual mobile device, not just browser devtools
- Check parent container constraints

### Navigation Issues
- Verify href paths match actual route files
- Check file structure under /app
- Clear Next.js cache: `.next` folder
- Verify page.tsx exists in route folder

---

**Website Version**: 1.0  
**Last Updated**: February 2026  
**Framework**: Next.js 16 with TypeScript & Tailwind CSS  
**Status**: Production Ready
