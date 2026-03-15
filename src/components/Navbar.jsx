import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Mektup', href: '#mektup' },
  { label: 'Sayaç', href: '#anilar' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Şarkımız', href: '#sarki' },
  { label: 'Biziz 💕', href: '#istatistik' },
]
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setActive(href)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 clamp(1rem, 4vw, 2.5rem)', height: '60px',
          background: scrolled ? 'rgba(255,251,255,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,204,213,0.5)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s',
        }}
      >
        <button onClick={() => scrollTo('#hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="#FF4D6D"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </motion.svg>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#1A0A10' }}>
            Seninle
          </span>
        </button>

        <div className="nav-links" style={{ display: 'flex', gap: '4px' }}>
          {NAV_LINKS.map(link => (
            <button key={link.href} onClick={() => scrollTo(link.href)}
              style={{
                background: active === link.href ? '#FFF0F3' : 'none',
                border: 'none', borderRadius: '999px', padding: '6px 14px',
                fontSize: '13.5px', fontWeight: active === link.href ? 500 : 400,
                color: active === link.href ? '#FF4D6D' : '#6B3040',
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'DM Sans, sans-serif',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
        >
          {[0, 1, 2].map(i => (
            <motion.span key={i}
              animate={menuOpen
                ? { rotate: i === 0 ? 45 : i === 2 ? -45 : 0, y: i === 0 ? 7 : i === 2 ? -7 : 0, opacity: i === 1 ? 0 : 1 }
                : { rotate: 0, y: 0, opacity: 1 }}
              style={{ display: 'block', width: '22px', height: '1.5px', background: '#1A0A10', borderRadius: '2px', transformOrigin: 'center' }}
            />
          ))}
        </button>
      </motion.nav>

      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -12, pointerEvents: 'none' }}
        transition={{ duration: 0.25 }}
        style={{
          position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(255,251,255,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #FFCCD5', padding: '1rem clamp(1rem, 4vw, 2.5rem)',
          display: 'flex', flexDirection: 'column', gap: '2px',
        }}
      >
        {NAV_LINKS.map(link => (
          <button key={link.href} onClick={() => scrollTo(link.href)}
            style={{
              background: 'none', border: 'none', textAlign: 'left', padding: '10px 12px',
              fontSize: '15px', fontWeight: active === link.href ? 500 : 400,
              color: active === link.href ? '#FF4D6D' : '#3D1520',
              cursor: 'pointer', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif',
            }}
          >
            {link.label}
          </button>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}