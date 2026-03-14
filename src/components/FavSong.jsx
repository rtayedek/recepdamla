import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const SARKI = {
  baslik: 'Bizim Şarkımız',
  sanatci: 'Ferhat Göçer',
  spotifyId: '0zcA26urhOJ71d4hThKnal', 
  neden: 'Bu şarkıyı ilk duyduğumda seni düşündüm. Her satırı sanki bizim için yazılmış gibi hissettirdi.',
}

export default function FavSong() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [playing, setPlaying] = useState(false)
  const [showEmbed, setShowEmbed] = useState(false)

  return (
    <section id="sarki" ref={ref} style={{ padding: '5rem 2rem', background: 'linear-gradient(160deg, #1A0A10 0%, #2D1520 60%, #3D1A28 100%)', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '12px', color: '#C9849A', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '8px' }}>HER ZAMAN</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'white' }}>Fav Şarkımız</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.9 }}
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,204,213,0.15)', borderRadius: '24px', padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div style={{ display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Vinyl */}
            <motion.div animate={{ rotate: playing ? 360 : 0 }} transition={{ duration: 3, repeat: playing ? Infinity : 0, ease: 'linear' }}
              style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'conic-gradient(#2d1520 0deg, #3d1a28 30deg, #2d1520 60deg, #3d1a28 90deg, #2d1520 120deg, #3d1a28 150deg, #2d1520 180deg, #3d1a28 210deg, #2d1520 240deg, #3d1a28 270deg, #2d1520 300deg, #3d1a28 330deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 48px rgba(26,10,16,0.4)', flexShrink: 0 }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF4D6D, #FF8FA3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2d1520' }} />
              </div>
            </motion.div>

            <div style={{ flex: 1, minWidth: '200px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.1, marginBottom: '6px' }}>{SARKI.baslik}</h3>
              <p style={{ color: '#C9849A', fontSize: '1rem', marginBottom: '1.5rem' }}>{SARKI.sanatci}</p>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                onClick={() => { setPlaying(p => !p); setShowEmbed(true) }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', background: playing ? 'rgba(255,77,109,0.2)' : 'linear-gradient(135deg, #FF4D6D, #FF8FA3)', border: playing ? '1px solid rgba(255,77,109,0.4)' : 'none', borderRadius: '999px', padding: '10px 22px', color: 'white', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  {playing ? <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/> : <path d="M8 5v14l11-7z"/>}
                </svg>
                {playing ? 'Durdur' : "Spotify'da Aç"}
              </motion.button>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,204,213,0.12)', paddingTop: '1.5rem' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: '#FFCCD5', lineHeight: 1.8 }}>"{SARKI.neden}"</p>
          </div>

          {showEmbed && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.5 }} style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <iframe src={`https://open.spotify.com/embed/track/${SARKI.spotifyId}?utm_source=generator&theme=0`} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style={{ display: 'block', borderRadius: '12px' }} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}