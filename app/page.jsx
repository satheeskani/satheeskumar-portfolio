'use client'
import { useState, useEffect, useRef } from 'react'

const NAV = ['About', 'Services', 'Skills', 'Experience', 'Projects', 'Contact']

const RESUME_URL      = '/resume.pdf'
const RESUME_FILENAME = 'Satheeskumar_Marikani_Resume.pdf'
const HIRE_EMAIL      = 'satheeskani1995@gmail.com'
const LINKEDIN        = 'https://linkedin.com/in/satheeskumar-marikani'

const SERVICES = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    title: 'Scalable CMS Solutions',
    desc: 'Custom WordPress, CraftCMS, and Joomla builds. Headless architectures, content modelling, and editorial workflow automation that cut publishing effort by up to 60%.',
    tags: ['WordPress', 'CraftCMS', 'Headless CMS', 'REST APIs'],
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    title: 'High-Performance API Development',
    desc: 'Design and build robust REST APIs that power web and mobile frontends. Experienced integrating 10+ third-party services including payment gateways, CRMs, and CDNs.',
    tags: ['REST APIs', 'Node.js', 'Laravel', 'Integrations'],
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Performance Optimisation',
    desc: 'Diagnose and fix slow sites. Server-side caching, lazy loading, query optimisation, and image delivery strategies that consistently improve Core Web Vitals scores.',
    tags: ['Core Web Vitals', 'Caching', 'Next.js SSR', 'Cloudinary'],
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Full Stack Development',
    desc: 'End-to-end product engineering from React/Next.js frontends to PHP/Laravel backends. Clean architecture, reusable components, and production-ready code.',
    tags: ['React.js', 'Next.js', 'PHP', 'Laravel'],
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    title: 'System Architecture',
    desc: 'Design scalable multi-site, multi-tenant, and multi-region systems. From database schema to deployment pipelines — built for maintainability and long-term growth.',
    tags: ['AWS', 'Docker', 'Multi-site', 'Architecture'],
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title: 'Technical Consulting',
    desc: 'Code reviews, architecture audits, and developer mentoring. Help teams establish standards, reduce tech debt, and ship faster with confidence.',
    tags: ['Code Review', 'Tech Strategy', 'Mentoring', 'Agile'],
  },
]

const SKILL_GROUPS = [
  {
    cat: 'Backend', accent: '#4338ca', bg: 'rgba(79,70,229,0.07)',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    items: ['PHP', 'Laravel', 'REST APIs', 'Node.js'],
  },
  {
    cat: 'Frontend', accent: '#0ea5e9', bg: 'rgba(14,165,233,0.07)',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    items: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Twig'],
  },
  {
    cat: 'CMS', accent: '#7c3aed', bg: 'rgba(124,58,237,0.07)',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    items: ['WordPress', 'CraftCMS', 'Joomla'],
  },
  {
    cat: 'Database', accent: '#10b981', bg: 'rgba(16,185,129,0.07)',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9"/><path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4"/></svg>,
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    cat: 'Cloud & DevOps', accent: '#f59e0b', bg: 'rgba(245,158,11,0.07)',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    items: ['AWS EC2', 'AWS S3', 'Docker', 'Git', 'Cloudinary', 'Vercel', 'Render'],
  },
]

const JOBS = [
  {
    role: 'Full Stack Developer', company: 'MarketStar', period: 'Apr 2024 – Present', badge: 'Current', color: '#4338ca',
    tools: ['React.js', 'Node.js', 'REST APIs', 'Docker', 'Git'],
    points: [
      { metric: '25%',    text: 'Reduced deployment time by implementing reusable component architecture across 5+ content-driven platforms.' },
      { metric: '30%',    text: 'Improved team delivery speed via sprint optimisation, code reviews, and engineering standards across a 3-person team.' },
      { metric: '40%',    text: 'Cut client workflow time through 10+ custom REST API integrations, cutting delivery cycles by 2–3 days per sprint.' },
    ],
  },
  {
    role: 'Full Stack Developer', company: 'GlobalizeMe', period: 'Aug 2021 – Apr 2024', badge: '', color: '#0ea5e9',
    tools: ['WordPress', 'CraftCMS', 'PHP', 'REST APIs', 'MySQL', 'AWS'],
    points: [
      { metric: '25%',    text: 'Delivered 10+ scalable web platforms for UK and European clients, via structured agile delivery across a 3-year engagement.' },
      { metric: '40%',    text: 'Improved page load speed across 6+ client sites through server-side caching, lazy loading, and query optimisation.' },
      { metric: '60%',    text: 'Reduced content update time via headless CMS integration with 10+ REST APIs for UK brands Ryvita and Beaulieu.' },
    ],
  },
  {
    role: 'WordPress Developer', company: 'Aiimtech Pvt Ltd', period: 'Nov 2017 – Jun 2021', badge: '', color: '#7c3aed',
    tools: ['PHP', 'WordPress', 'MySQL', 'jQuery', 'JavaScript'],
    points: [
      { metric: 'Sub-3s', text: 'Engineered 15+ PHP applications achieving sub-3s load times with optimised SSR, security hardening, and cross-browser compatibility.' },
      { metric: '30%',    text: 'Reduced per-project development time by building reusable PHP component libraries and establishing consistent coding standards.' },
      { metric: '70%',    text: 'Modernised 5+ legacy codebases, resolving critical vulnerabilities and reducing the open bug backlog by 70% within two sprints.' },
    ],
  },
]

const PROJECTS = [
  {
    idx: '01', name: 'SparkNest', url: 'sparknest.co.in', type: 'Real-Time eCommerce Platform',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Cloudinary'],
    problem:  'An eCommerce site with 1,000+ SKUs was suffering slow load times, hurting bounce rate and losing conversions.',
    solution: 'Rebuilt with Next.js SSR for server-rendered product pages, Cloudinary CDN for optimised image delivery, and component-level code splitting to reduce initial bundle size.',
    result:   '35% faster load times, significantly improved Lighthouse performance scores, and measurable uplift in conversion rate.',
    metric: '35%', metricLabel: 'faster loads', accent: '#4338ca',
  },
  {
    idx: '02', name: 'Foodnoise', url: 'foodnoise.co.uk', type: 'Food & Lifestyle Platform',
    stack: ['WordPress', 'PHP', 'MySQL'],
    desc: 'High-traffic food platform with 500+ restaurant listings and automated editorial workflows via custom PHP plugins.',
    metric: '50%', metricLabel: 'less publishing effort', accent: '#10b981',
  },
  {
    idx: '03', name: 'Jana Small Finance Bank', url: 'janabank.com', type: 'Secure Banking Platform',
    stack: ['Joomla', 'PHP', 'jQuery'],
    desc: 'Secure banking portal serving 50,000+ users with SSL, XSS and CSRF hardening.',
    metric: '50K+', metricLabel: 'users served', accent: '#0ea5e9',
  },
  {
    idx: '04', name: 'Beaulieu / Ryvita', url: 'beaulieu.uk.com', type: 'CraftCMS Platform',
    stack: ['CraftCMS', 'Twig', 'MySQL'],
    desc: 'Headless CMS for two major UK brands enabling 3× faster campaign launches with zero developer dependency.',
    metric: '3×', metricLabel: 'faster campaigns', accent: '#7c3aed',
  },
  {
    idx: '05', name: 'Millpledge', url: 'millpledge.com', type: 'CraftCMS Multi-Store',
    stack: ['CraftCMS', 'Craft Commerce', 'Twig', 'MySQL'],
    desc: 'Multi-site CraftCMS & Craft Commerce platform for a veterinary brand across UK, DE, US, FR, NL and CA storefronts.',
    metric: '6', metricLabel: 'storefronts', accent: '#f59e0b',
  },
]

const HERO_STATS = [
  { num: '8+',   label: 'Years experience', sub: 'since 2017' },
  { num: '40+',  label: 'Projects shipped',  sub: 'web apps & platforms' },
  { num: '50K+', label: 'Users served',      sub: 'across live platforms' },
  { num: '6+',   label: 'Core Web Vitals',   sub: 'sites optimised' },
]

/* ── email copy helper ── */
function useEmailCopy() {
  const [copied, setCopied] = useState(false)
  const copy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(HIRE_EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }).catch(() => {
      // clipboard failed — fallback to mailto
      window.location.href = `mailto:${HIRE_EMAIL}`
    })
  }
  return { copied, copy }
}

function useReveal(ref) {
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.rv')
    els.forEach(el => el.classList.add('opacity-0', 'translate-y-5'))
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0', 'translate-y-5')
          e.target.classList.add('opacity-100', 'translate-y-0')
          io.unobserve(e.target)
        }
      }), { threshold: 0.05 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function SectionBadge({ label }) {
  return (
    <div className="rv transition-all duration-700 inline-flex items-center gap-1.5 px-3 py-1 pl-1.5 bg-indigo-light border border-indigo/20 rounded-full mb-3.5">
      <div className="w-[18px] h-[18px] bg-indigo-mid rounded-full flex items-center justify-center">
        <span className="block w-[7px] h-[7px] bg-indigo rounded-full" />
      </div>
      <span className="font-mono text-[11px] text-indigo tracking-[0.08em]">{label}</span>
    </div>
  )
}

/* ── Toast notification ── */
function Toast({ show, message }) {
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <div className="flex items-center gap-2.5 px-5 py-3 bg-[#1e1b4b] text-white rounded-xl shadow-xl text-[13.5px] font-medium whitespace-nowrap">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        {message}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [scrolled,  setScrolled]  = useState(false)
  const [activeJob, setActiveJob] = useState(0)
  const [menuOpen,  setMenuOpen]  = useState(false)

  const { copied: copiedContact, copy: copyContact } = useEmailCopy()

  const aboutRef    = useRef(null), skillsRef   = useRef(null)
  const expRef      = useRef(null), projRef     = useRef(null)
  const contactRef  = useRef(null), servicesRef = useRef(null)

  useReveal(aboutRef); useReveal(skillsRef); useReveal(expRef)
  useReveal(projRef);  useReveal(contactRef); useReveal(servicesRef)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const goto = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }
  const job = JOBS[activeJob]

  return (
    <>
      {/* Toast */}
      <Toast show={copiedContact} message={`${HIRE_EMAIL} copied to clipboard!`} />

      {/* ══ NAV ══ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-[#e5e7eb] transition-all duration-300 backdrop-blur-xl px-4 sm:px-8
        ${scrolled ? 'py-2.5 bg-white/95 shadow-card' : 'py-4 bg-white/80'}`}>
        <div className="max-w-[1160px] mx-auto flex items-center justify-between">

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer">
            <img src="/photo.jpeg" alt="Satheeskumar Marikani"
              className="w-9 h-9 rounded-full object-cover border-2 border-indigo/20 shrink-0" />
            <div className="text-left">
              <div className="text-[13px] font-semibold text-ink leading-none tracking-tight">Satheeskumar</div>
              <div className="text-[10px] text-ink4 font-mono tracking-[.05em] mt-0.5">Full Stack Dev</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV.map(l => (
              <button key={l} onClick={() => goto(l)}
                className="px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium text-ink3 bg-transparent border-none cursor-pointer transition-all duration-200 hover:bg-indigo-light hover:text-indigo font-sans">
                {l}
              </button>
            ))}
            {/* HIRE ME — opens Gmail compose directly */}
            <a href={`https://mail.google.com/mail/?view=cm&to=${HIRE_EMAIL}&su=I'd%20like%20to%20hire%20you&body=Hi%20Satheeskumar%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.`}
              target="_blank" rel="noopener noreferrer"
              className="ml-3 px-5 py-2 rounded-[10px] bg-indigo text-white text-[13px] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-dark hover:shadow-cta font-sans">
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-[5px] items-center justify-center bg-white border border-[#e5e7eb] rounded-lg cursor-pointer p-1.5 w-9 h-9 shadow-card"
            aria-label="Toggle navigation menu">
            <span className={`block w-[22px] h-[2px] bg-[#1e1b4b] rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-[22px] h-[2px] bg-[#1e1b4b] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-[22px] h-[2px] bg-[#1e1b4b] rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="flex flex-col bg-white border-t border-[#e5e7eb] px-4 pt-2 pb-4 gap-0">
            {NAV.map(l => (
              <button key={l} onClick={() => goto(l)}
                className="w-full text-left px-2 py-3.5 bg-transparent border-none border-b border-[#f1f5f9] cursor-pointer text-[15px] font-medium text-ink2 font-sans transition-colors duration-200 hover:text-indigo last:border-b-0">
                {l}
              </button>
            ))}
            <div className="flex gap-2.5 mt-4 pt-4 border-t border-[#e5e7eb]">
              <a href={`mailto:${HIRE_EMAIL}`}
                className="flex-1 py-3 rounded-[10px] bg-indigo text-white text-[14px] font-semibold text-center no-underline font-sans">
                Hire Me
              </a>
              <a href={RESUME_URL} download={RESUME_FILENAME}
                className="flex-1 py-3 rounded-[10px] bg-white text-ink2 text-[14px] font-medium border border-[#d1d5db] text-center no-underline font-sans flex items-center justify-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden bg-white pt-[88px] sm:pt-[92px] pb-10 sm:pb-[60px] px-4 sm:px-8">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(67,56,202,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(124,58,237,0.04) 0%, transparent 50%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(15,23,42,0.028) 1px, transparent 1px), linear-gradient(90deg,rgba(15,23,42,0.028) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

        <div className="relative z-10 max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-10 md:gap-14 items-center">

            {/* Left */}
            <div className="max-w-full md:max-w-[660px]">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 pl-2 bg-white border border-[#e5e7eb] rounded-3xl shadow-card mb-5 sm:mb-7 opacity-0 animate-fade-in [animation-delay:0.1s]">
                <span className="relative inline-flex w-2 h-2 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping-slow" />
                  <span className="relative block w-2 h-2 rounded-full bg-green-500" />
                </span>
                <span className="text-[12px] sm:text-[12.5px] font-medium text-green-700">Available for full-time &amp; contract</span>
                <span className="hidden sm:inline text-[12px] text-ink3 border-l border-[#e5e7eb] pl-2">Satheeskumar Marikani</span>
              </div>

              {/* Headline */}
              <h1 className="font-display leading-[1.05] tracking-[-0.03em] mb-4">
                <span className="block text-[clamp(1.5rem,6vw,2.6rem)] font-bold text-ink tracking-[-0.03em] opacity-0 animate-fade-up [animation-delay:0.2s]">
                  I BUILD WEB SYSTEMS
                </span>
                <span className="block text-[clamp(1.5rem,6vw,2.6rem)] font-extrabold text-indigo tracking-[-0.03em] opacity-0 animate-fade-up [animation-delay:0.32s]">
                  THAT SCALE AND PERFORM.
                </span>
              </h1>

              <p className="text-[14px] sm:text-base text-ink2 leading-[1.6] mb-2 opacity-0 animate-fade-up [animation-delay:0.44s] max-w-[540px]">
                Senior Full Stack Developer with 8+ years delivering eCommerce platforms, headless CMS systems, and REST APIs across UK, European, and Indian markets.
              </p>
              <p className="text-[13px] sm:text-sm text-ink3 leading-[1.6] mb-3 opacity-0 animate-fade-up [animation-delay:0.5s]">
                I turn complex codebases into fast, scalable, production-ready platforms.
              </p>

              <div className="inline-flex items-center gap-1.5 mb-5 sm:mb-6 opacity-0 animate-fade-up [animation-delay:0.52s]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-[13px] text-ink3 font-medium">UK · Europe · India</span>
              </div>

              {/* Stack chips */}
              <div className="flex flex-wrap gap-[5px] mb-6 sm:mb-7 opacity-0 animate-fade-up [animation-delay:0.58s]">
                {['PHP','Laravel','React.js','Next.js','WordPress','CraftCMS','AWS','MongoDB'].map(s => (
                  <span key={s} className="px-2.5 sm:px-3 py-[5px] bg-white border border-[#e5e7eb] rounded-lg text-[11px] sm:text-[12px] font-mono text-ink3 font-medium">{s}</span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 opacity-0 animate-fade-up [animation-delay:0.64s]">
                {/* HIRE ME — opens Gmail compose directly */}
                <a href={`https://mail.google.com/mail/?view=cm&to=${HIRE_EMAIL}&su=I'd%20like%20to%20hire%20you&body=Hi%20Satheeskumar%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-[10px] bg-indigo text-white text-[14px] sm:text-[15px] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-indigo-dark hover:shadow-cta font-sans">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Hire Me
                </a>

                {/* View Projects */}

                {/* Download Resume */}
                <a href={RESUME_URL} download={RESUME_FILENAME}
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-[10px] bg-white text-ink3 text-[13px] sm:text-[14px] font-medium border border-[#e5e7eb] shadow-card transition-all duration-200 hover:border-indigo hover:text-indigo hover:-translate-y-0.5 font-sans">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Resume
                </a>
              </div>
            </div>

            {/* Stat cards — desktop */}
            <div className="hidden md:flex flex-col gap-2.5 opacity-0 animate-fade-in [animation-delay:0.7s]">
              {HERO_STATS.map((s, i) => (
                <div key={i} className={`bg-white border border-[#e5e7eb] border-l-[3px] border-l-indigo rounded-2xl shadow-card p-4 cursor-default animate-float-${i}`}>
                  <div className="font-display text-[24px] font-bold text-indigo tracking-[-0.02em] leading-none mb-1">{s.num}</div>
                  <div className="text-[12.5px] font-semibold text-ink mb-0.5">{s.label}</div>
                  <div className="text-[11.5px] text-ink4">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stat strip */}
          <div className="mt-7 grid grid-cols-2 gap-2.5 md:hidden opacity-0 animate-fade-up [animation-delay:0.75s]">
            {HERO_STATS.map((s, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] border-l-[3px] border-l-indigo rounded-xl shadow-card px-3 py-2.5">
                <div className="font-display text-[20px] font-bold text-indigo tracking-tight leading-none mb-0.5">{s.num}</div>
                <div className="text-[11.5px] font-semibold text-ink">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" ref={aboutRef} className="px-4 sm:px-8 py-10 sm:py-12 border-t border-[#e5e7eb] bg-white">
        <div className="max-w-[1160px] mx-auto">
          <SectionBadge label="ABOUT" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <h2 className="rv transition-all duration-700 font-display text-[clamp(1.4rem,3.5vw,2.1rem)] font-bold text-ink leading-[1.15] tracking-[-0.02em] mb-5">
                BUILDING SCALABLE<br/><span className="text-indigo">SYSTEMS THAT MATTER</span>
              </h2>
              <div className="rv transition-all duration-700 [transition-delay:0.07s] border-t border-[#e5e7eb] mb-6">
                {[
                  'Built scalable CMS and eCommerce platforms serving 50K+ users globally.',
                  'Worked with clients across UK, Europe, and India for 8+ years.',
                  'Specialised in performance optimisation, headless CMS, and REST API development.',
                ].map((b, i) => (
                  <div key={i} className="flex gap-3 sm:gap-3.5 py-3.5 sm:py-4 border-b border-[#e5e7eb] items-start">
                    <span className="w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-full bg-indigo-light border border-indigo/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#4338ca" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <p className="text-[14px] sm:text-[15px] text-ink2 leading-[1.6] m-0">{b}</p>
                  </div>
                ))}
              </div>
              <div className="rv transition-all duration-700 [transition-delay:0.14s] inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 bg-white border border-[#e5e7eb] rounded-3xl shadow-card">
                <span className="w-[7px] h-[7px] rounded-full bg-green-500 shrink-0" />
                <span className="text-[13px] sm:text-[13.5px] text-ink font-medium">Available for full-time and contract roles</span>
              </div>
            </div>
            <div className="rv transition-all duration-700 [transition-delay:0.07s]">
              <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden">
                {[
                  { label: 'Current Role',   value: 'Full Stack Developer at MarketStar' },
                  { label: 'Location',       value: 'Sivakasi, Tamil Nadu, India' },
                  { label: 'Experience',     value: '8+ Years' },
                  { label: 'Specialisation', value: 'PHP · Laravel · React.js · Next.js' },
                  { label: 'CMS Expertise',  value: 'WordPress · CraftCMS · Joomla' },
                  { label: 'Education',      value: 'MCA — Ayya Nadar Janaki Ammal College' },
                  { label: 'Certification',  value: 'React JS — Besant Technologies (2023)' },
                ].map((r, i, arr) => (
                  <div key={i} className={`flex flex-col sm:flex-row sm:gap-4 px-4 sm:px-[18px] py-3 cursor-default transition-colors duration-200 hover:bg-indigo-light ${i < arr.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}>
                    <span className="font-mono text-[10px] sm:text-[11px] text-ink4 sm:min-w-[116px] sm:shrink-0 tracking-[0.03em] mb-0.5 sm:mb-0 sm:pt-0.5">{r.label}</span>
                    <span className="text-[13px] sm:text-[14px] text-ink font-medium leading-[1.55]">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" ref={servicesRef} className="px-4 sm:px-8 py-10 sm:py-12 border-t border-[#e5e7eb] bg-white">
        <div className="max-w-[1160px] mx-auto">
          <SectionBadge label="SERVICES" />
          <div className="rv transition-all duration-700 flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-8 sm:mb-9">
            <div>
              <h2 className="font-display text-[clamp(1.4rem,4vw,2.5rem)] font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-2">WHAT I CAN HELP YOU WITH</h2>
              <p className="text-[13.5px] sm:text-[15px] text-ink3 max-w-[480px] leading-[1.6]">From greenfield builds to performance rescues — here's where I deliver the most value.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
            {SERVICES.map((s, i) => (
              <div key={i} className="rv transition-all duration-700 group relative flex flex-col bg-white border border-[#e5e7eb] rounded-2xl p-5 shadow-card overflow-hidden cursor-default hover:border-indigo/20 hover:-translate-y-[2px] transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4338ca] to-[#6d28d9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] rounded-xl bg-indigo-light border border-indigo/15 flex items-center justify-center text-indigo mb-4 shrink-0">{s.icon}</div>
                <h3 className="font-display text-[15px] sm:text-[16px] font-bold text-ink mb-2 tracking-tight">{s.title}</h3>
                <p className="text-[13px] sm:text-[13.5px] text-ink3 leading-[1.6] mb-4 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t, j) => (
                    <span key={j} className="px-2.5 py-[3px] bg-white border border-[#e5e7eb] rounded-md text-[11px] font-mono text-ink4">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" ref={skillsRef} className="px-4 sm:px-8 py-10 sm:py-12 border-t border-[#e5e7eb]">
        <div className="max-w-[1160px] mx-auto">
          <SectionBadge label="SKILLS" />
          <div className="rv transition-all duration-700 flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-7 sm:mb-8">
            <div>
              <h2 className="font-display text-[clamp(1.4rem,4vw,2.5rem)] font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-2">TECHNOLOGY STACK</h2>
              <p className="text-[13px] sm:text-[14px] text-ink3 max-w-[440px] leading-[1.6]">Full stack engineering from Laravel APIs and React frontends to headless CMS and cloud infrastructure.</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-[7px] bg-white border border-[#e5e7eb] rounded-full shadow-card self-start sm:self-auto shrink-0">
              <span className="text-[13px]">🏅</span>
              <span className="text-[12px] sm:text-[12.5px] text-ink2 font-medium">React JS — Besant Technologies <span className="text-ink4 font-normal">(2023)</span></span>
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            {SKILL_GROUPS.map((g, i) => (
              <div key={i} className="rv transition-all duration-700 flex flex-col sm:flex-row sm:items-center px-4 py-3 gap-2.5 sm:gap-0 bg-white border border-[#e5e7eb] rounded-xl shadow-card cursor-default transition-all duration-200 "
                onMouseEnter={e => { e.currentTarget.style.borderColor = g.accent + '55'; e.currentTarget.style.transform = 'translateX(3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.transform = 'translateX(0)' }}>
                <div className="flex items-center gap-3 sm:gap-0">
                  <div className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center shrink-0 sm:mr-3.5"
                    style={{ background: g.bg, border: `1px solid ${g.accent}25`, color: g.accent }}>
                    {g.svg}
                  </div>
                  <div className="text-[13px] font-semibold text-ink sm:w-[116px] shrink-0 tracking-tight">{g.cat}</div>
                  <span className="sm:hidden text-[11px] text-ink4 font-mono ml-auto">{g.items.length} skills</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-[#e5e7eb] mx-4 shrink-0" />
                <div className="flex flex-wrap gap-[5px] flex-1">
                  {g.items.map((s, j) => (
                    <span key={j} className="inline-flex items-center px-[9px] py-[3px] rounded-[5px] text-[11px] font-mono font-medium"
                      style={{ background: g.bg, border: `1px solid ${g.accent}20`, color: g.accent }}>
                      {s}
                    </span>
                  ))}
                </div>
                <span className="hidden sm:block text-[11px] text-ink4 ml-3 shrink-0 font-mono">{g.items.length}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE ══ */}
      <section id="experience" ref={expRef} className="px-4 sm:px-8 py-10 sm:py-12 border-t border-[#e5e7eb] bg-white">
        <div className="max-w-[1160px] mx-auto">
          <SectionBadge label="EXPERIENCE" />
          <h2 className="rv transition-all duration-700 font-display text-[clamp(1.4rem,3.5vw,2.2rem)] font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-6 sm:mb-7">PROFESSIONAL EXPERIENCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 sm:gap-4">
            <div className="rv transition-all duration-700">
              {/* Mobile: segmented pill selector */}
              <div className="flex md:hidden bg-[#f1f5f9] rounded-xl p-1 gap-1 mb-3">
                {JOBS.map((j, i) => (
                  <button key={i} onClick={() => setActiveJob(i)}
                    className={`flex-1 py-2 px-2 rounded-lg text-[12px] font-semibold font-sans border-none cursor-pointer transition-all duration-200 text-center
                      ${activeJob === i ? 'bg-white text-indigo shadow-card' : 'bg-transparent text-ink4'}`}>
                    {j.company.split(' ')[0]}
                  </button>
                ))}
              </div>
              {/* Desktop: vertical tab list */}
              <div className="hidden md:flex flex-col gap-1">
                {JOBS.map((j, i) => (
                  <button key={i} onClick={() => setActiveJob(i)}
                    className={`relative w-full text-left px-4 py-3.5 rounded-xl border font-sans cursor-pointer transition-all duration-200
                      ${activeJob === i ? 'bg-white border-indigo/25 shadow-panel' : 'bg-transparent border-transparent hover:bg-indigo-light'}`}>
                    {activeJob === i && <span className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-indigo rounded-r-sm" />}
                    <div className={`text-[14px] font-semibold transition-colors duration-200 ${activeJob === i ? 'text-indigo' : 'text-ink3'}`}>{j.company}</div>
                    <div className={`text-[11px] mt-0.5 font-mono ${activeJob === i ? 'text-indigo/50' : 'text-ink4'}`}>{j.period}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="rv transition-all duration-700 [transition-delay:0.07s] bg-white border border-[#e5e7eb] rounded-2xl shadow-card p-5 sm:p-7">
              <div className="flex items-start justify-between flex-wrap gap-2 sm:gap-3 mb-1.5">
                <h3 className="font-display text-[18px] sm:text-[22px] font-bold text-ink tracking-tight">{job.role}</h3>
                {job.badge && (
                  <span className="px-3 py-[3px] bg-indigo-light border border-indigo/20 rounded-full text-[12px] font-semibold text-indigo shrink-0">{job.badge}</span>
                )}
              </div>
              <p className="text-[13px] sm:text-[13.5px] text-indigo font-semibold mb-4">at {job.company} · {job.period}</p>
              <div className="flex flex-wrap gap-[5px] mb-4 sm:mb-5 pb-4 border-b border-[#e5e7eb]">
                <span className="text-[11px] text-ink4 font-mono mr-1.5 pt-1">Stack:</span>
                {job.tools.map((t, i) => (
                  <span key={i} className="px-[9px] py-[3px] bg-white border border-[#e5e7eb] rounded-md text-[11px] font-mono text-ink3">{t}</span>
                ))}
              </div>
              <div className="flex flex-col gap-2 sm:gap-2.5">
                {job.points.map((h, i) => (
                  <div key={i} className="flex gap-3 sm:gap-3.5 items-start px-3.5 sm:px-[18px] py-3 sm:py-[13px] bg-[#f8fafc] border border-[#e5e7eb] rounded-xl transition-all duration-200 hover:bg-indigo-light hover:border-indigo/18 hover:translate-x-1">
                    <span className="inline-flex items-center justify-center px-2.5 sm:px-3 py-1 rounded-full bg-indigo-light border border-indigo/18 text-[12px] sm:text-[13.5px] font-bold text-indigo shrink-0 min-w-[60px] sm:min-w-[68px] text-center">{h.metric}</span>
                    <p className="text-[13px] sm:text-[14px] text-ink2 leading-[1.6]">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rv transition-all duration-700 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#e5e7eb]">
            <p className="font-mono text-[11px] text-ink4 uppercase tracking-[0.1em] mb-4">Education</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { deg: 'Master of Computer Application',   abbr: 'MCA', school: 'Ayya Nadar Janaki Ammal College, Sivakasi', yr: '2015 – 2017' },
                { deg: 'Bachelor of Computer Application', abbr: 'BCA', school: 'Sri Kaliswari College, Sivakasi',           yr: '2012 – 2015' },
              ].map((e, i) => (
                <div key={i} className="bg-white border border-[#e5e7eb] rounded-2xl shadow-card p-4 sm:p-5 transition-all duration-300  hover:-translate-y-0.5">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="px-[11px] py-[3px] bg-indigo-light border border-indigo/18 rounded-full text-[11.5px] font-mono text-indigo font-medium">{e.abbr}</span>
                    <span className="text-[12px] text-ink4">{e.yr}</span>
                  </div>
                  <div className="font-display text-[14px] sm:text-[15px] font-semibold text-ink mb-0.5">{e.deg}</div>
                  <div className="text-[12.5px] sm:text-[13px] text-ink3">{e.school}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects" ref={projRef} className="px-4 sm:px-8 py-10 sm:py-12 border-t border-[#e5e7eb]">
        <div className="max-w-[1160px] mx-auto">
          <SectionBadge label="PROJECTS" />
          <div className="rv transition-all duration-700 flex flex-col sm:flex-row justify-between sm:items-end gap-2 sm:gap-3 mb-6 sm:mb-7">
            <h2 className="font-display text-[clamp(1.4rem,4vw,2.5rem)] font-bold text-ink tracking-[-0.02em] leading-[1.1]">FEATURED PROJECTS</h2>
            <p className="text-[13.5px] sm:text-[14px] text-ink3 max-w-[400px] leading-[1.6]">High-impact work focused on scalability, performance, and real business outcomes.</p>
          </div>

          {/* SparkNest */}
          <div className="rv transition-all duration-700 relative mb-4 rounded-[18px] sm:rounded-[20px] bg-white border border-[#e5e7eb] shadow-panel overflow-hidden  hover:border-indigo/22 hover:-translate-y-[2px] transition-all duration-200">
            <div className="h-[3px] bg-gradient-to-r from-[#4338ca] via-[#6d28d9] to-[#0284c7]" />
            <div className="absolute w-[180px] h-[180px] rounded-full bg-indigo/4 -top-[60px] -right-[40px] pointer-events-none" />
            <div className="p-4 sm:p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[11px] text-ink4">01</span>
                  </div>
                  <h3 className="font-display text-[20px] sm:text-[22px] font-bold text-ink mb-1 tracking-[-0.02em]">SparkNest</h3>
                  <p className="text-[11px] text-indigo mb-3 tracking-[0.06em] uppercase font-semibold">Real-Time eCommerce Platform</p>
                  <div className="flex flex-col gap-1.5 mb-3">
                    {[
                      { label: 'Problem',  color: '#991b1b', bg: '#fef2f2', border: '#fecaca', text: PROJECTS[0].problem },
                      { label: 'Solution', color: '#0369a1', bg: '#eff6ff', border: '#bfdbfe', text: PROJECTS[0].solution },
                      { label: 'Result',   color: '#065f46', bg: '#f0fdf4', border: '#bbf7d0', text: PROJECTS[0].result },
                    ].map((row, i) => (
                      <div key={i} className="px-3 py-2.5 rounded-lg"
                        style={{ background: row.bg, border: `1px solid ${row.border}` }}>
                        <span className="block text-[9px] font-bold uppercase tracking-[0.1em] mb-1" style={{ color: row.color }}>{row.label}</span>
                        <p className="text-[12.5px] text-ink2 leading-[1.6] m-0">{row.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {PROJECTS[0].stack.map((s, j) => (
                      <span key={j} className="px-2.5 py-1 bg-white border border-[#e5e7eb] rounded-lg text-[11px] font-mono text-ink3">{s}</span>
                    ))}
                  </div>
                  <a href={`https://${PROJECTS[0].url}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-[18px] py-[9px] rounded-[10px] bg-indigo text-white text-[13px] font-semibold no-underline transition-all duration-200 hover:bg-indigo-dark hover:-translate-y-[2px] font-sans">
                    Visit Site
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </a>
                </div>
                <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-0 md:text-right shrink-0">
                  <div>
                    <div className="font-display text-[38px] sm:text-[44px] font-extrabold text-indigo tracking-[-0.04em] leading-none">35%</div>
                    <div className="text-[12px] text-ink4 mt-1 md:mb-2">faster loads</div>
                  </div>
                  <a href={`https://${PROJECTS[0].url}`} target="_blank" rel="noopener noreferrer"
                    className="text-[12px] text-ink4 no-underline hover:text-indigo font-sans hidden md:block">
                    {PROJECTS[0].url} ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            {PROJECTS.slice(1).map((p, i) => (
              <div key={i} className="rv transition-all duration-700 relative flex flex-col bg-white border border-[#e5e7eb] rounded-2xl p-5 sm:p-6 shadow-card overflow-hidden hover:-translate-y-[2px] hover:border-[#d1d5db] transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: p.accent }} />
                <div className="flex justify-between items-start mb-3">
                  <span className="font-mono text-[11px] text-ink4">{p.idx}</span>
                  <a href={`https://${p.url}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-[5px] rounded-lg text-[12px] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 font-sans"
                    style={{ border: `1px solid ${p.accent}30`, background: `${p.accent}08`, color: p.accent }}
                    onMouseEnter={e => e.currentTarget.style.background = `${p.accent}15`}
                    onMouseLeave={e => e.currentTarget.style.background = `${p.accent}08`}>
                    Visit
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </a>
                </div>
                <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-ink mb-0.5 tracking-tight">{p.name}</h3>
                <p className="text-[10.5px] sm:text-[11px] text-ink4 mb-2.5 tracking-[0.05em] uppercase font-medium">{p.type}</p>
                <p className="text-[13px] sm:text-[13.5px] text-ink2 leading-[1.6] mb-4 flex-1">{p.desc}</p>
                <div className="border-t border-[#e5e7eb] pt-3 sm:pt-3.5 flex items-center justify-between">
                  <div>
                    <div className="font-display text-[20px] sm:text-[22px] font-bold tracking-tight leading-none" style={{ color: p.accent }}>{p.metric}</div>
                    <div className="text-[11px] sm:text-[11.5px] text-ink4 mt-0.5">{p.metricLabel}</div>
                  </div>
                  <div className="flex gap-[5px] flex-wrap justify-end">
                    {p.stack.slice(0, 2).map((s, j) => (
                      <span key={j} className="px-2 py-[3px] bg-white border border-[#e5e7eb] rounded-md text-[11px] font-mono text-ink3">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" ref={contactRef} className="relative px-4 sm:px-8 py-10 sm:py-12 border-t border-[#e5e7eb] overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(67,56,202,0.05) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-[1160px] mx-auto">

          {/* ── Centred header block ── */}
          <div className="text-center mb-8 sm:mb-10">
            <SectionBadge label="CONTACT" />
            <h2 className="rv transition-all duration-700 font-display text-[clamp(1.8rem,5vw,3.2rem)] font-bold text-ink leading-[1.1] tracking-[-0.02em] mb-3">
              LET'S BUILD <span className="text-indigo">GREAT PRODUCTS</span> TOGETHER.
            </h2>
            <p className="rv transition-all duration-700 [transition-delay:0.07s] text-[14px] sm:text-[15px] text-ink3 leading-[1.6] max-w-[480px] mx-auto mb-8 sm:mb-10">
              Available for full-time and contract roles — open to high-impact work globally.
            </p>


          </div>

          {/* ── 2×2 contact card grid ── */}
          <div className="rv transition-all duration-700 [transition-delay:0.18s] grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[680px] mx-auto">
            {[
              {
                label: 'Email', value: HIRE_EMAIL, href: `mailto:${HIRE_EMAIL}`,
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              },
              {
                label: 'Phone', value: '+91 80158 50365', href: 'tel:+918015850365',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.09 6.09l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
              },
              {
                label: 'LinkedIn', value: 'linkedin.com/in/satheeskumar-marikani', href: LINKEDIN,
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
              },
              {
                label: 'Location', value: 'Sivakasi, Tamil Nadu, India', href: null,
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              },
            ].map((c, i) => (
              <div key={i}
                className={`flex items-center gap-3 sm:gap-3.5 p-4 sm:p-5 bg-white border border-[#e5e7eb] rounded-xl shadow-card transition-all duration-200 hover:border-indigo/25 hover:-translate-y-[2px] ${c.href ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={() => c.href && window.open(c.href, c.href.startsWith('http') ? '_blank' : '_self')}>
                <div className="w-10 h-10 rounded-[10px] bg-indigo-light border border-indigo/15 flex items-center justify-center text-indigo shrink-0">{c.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-ink4 uppercase tracking-[0.08em] mb-0.5 font-medium font-mono">{c.label}</div>
                  <div className="text-[13px] sm:text-[13.5px] text-ink font-medium overflow-hidden text-ellipsis whitespace-nowrap">{c.value}</div>
                </div>
                {c.href && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink4 shrink-0"><polyline points="9 18 15 12 9 6"/></svg>}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-white border-t border-[#e5e7eb] py-5 px-4 sm:px-8">
        <div className="max-w-[1160px] mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-[15px] font-bold text-indigo tracking-tight">SM</span>
            <span className="font-mono text-[11px] text-ink4">/dev</span>
          </div>
          <span className="text-[12px] text-ink3 order-last sm:order-none w-full sm:w-auto text-center sm:text-left">
            Satheeskumar Marikani · Senior Full Stack Developer
          </span>
          <div className="flex gap-4 sm:gap-5">
            {[{ l: 'Email', h: `mailto:${HIRE_EMAIL}` }, { l: 'LinkedIn', h: LINKEDIN }].map((x, i) => (
              <a key={i} href={x.h} target="_blank" rel="noopener noreferrer"
                className="text-[12px] text-ink4 no-underline transition-colors duration-200 hover:text-indigo font-sans">{x.l}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
