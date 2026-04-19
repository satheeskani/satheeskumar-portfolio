# Satheeskumar Marikani — Portfolio

A premium Next.js 14 portfolio with dark luxury aesthetic, cinematic typography, and smooth scroll-reveal animations.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (display) + DM Sans (body) + JetBrains Mono (code)
- **Animations**: CSS keyframes + IntersectionObserver scroll reveals

## Project Structure
```
portfolio/
├── app/
│   ├── layout.jsx        # Root layout + metadata
│   ├── page.jsx          # Page assembling all sections
│   └── globals.css       # Global styles, fonts, animations
├── components/
│   ├── Navbar.jsx        # Sticky nav with mobile menu
│   ├── Hero.jsx          # Full-screen hero with animated name
│   ├── About.jsx         # About + stats grid
│   ├── Skills.jsx        # Tech stack by category
│   ├── Experience.jsx    # Interactive tabbed work history
│   ├── Projects.jsx      # Featured + project cards
│   └── Contact.jsx       # Contact form + footer
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## Deployment Options

### Vercel (recommended — free)
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Click Deploy — done. Auto-deploys on every push.

### Netlify
1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Output dir: `.next`

### Custom Domain
In Vercel/Netlify, add your domain (e.g. satheeskumar.dev) in the project settings.

## Customisation

### Update contact form to actually send emails
Install and configure [EmailJS](https://emailjs.com) or [Resend](https://resend.com):
```bash
npm install @emailjs/browser
```

### Add a profile photo
Place your photo at `public/profile.jpg` and add it to the About section:
```jsx
import Image from 'next/image'
<Image src="/profile.jpg" alt="Satheeskumar" width={400} height={400} className="rounded-sm" />
```

### Add more projects
Edit the `projects` array in `components/Projects.jsx`.

---
Built with Next.js 14 · Designed for Satheeskumar Marikani
