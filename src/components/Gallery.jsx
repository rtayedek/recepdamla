import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

// ✏️ type: 'photo' ya da 'video' yaz
const MEDYA = [
  { type: 'photo', src: '/foto1.png', caption: 'İlk buluşmamız ✨' },
  { type: 'video', src: '/video1.mp4', caption: 'O anki sesin 🎥' },
  { type: 'photo', src: '/foto2.png', caption: 'En güzel kahvaltılar' },
  { type: 'photo', src: '/foto3.png', caption: 'Birlikte yürüdüğümüz yollar' },
  { type: 'video', src: '/video2.mp4', caption: 'Güldüğün o an 💕' },
  { type: 'photo', src: '/foto4.png', caption: 'Her gün seninle' },
  { type: 'photo', src: '/foto5.png', caption: 'Güldüğün anlar 💕' },
  { type: 'photo', src: '/foto6.png', caption: 'Sonsuza kadar' },
]

const LOOP = [...MEDYA, ...MEDYA, ...MEDYA]

function VideoThumb({ src }) {
  const ref = useRef(null)
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        onMouseEnter={e => e.target.play()}
        onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0 }}
      />
      {/* Play ikonu */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '44px', height: '44px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF4D6D">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </div>
  )
}

function Lightbox({ item, onClose, onPrev, onNext }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(26,10,16,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    >
      <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }} onClick={e => e.stopPropagation()}
        style={{ position: 'relative', maxWidth: '860px', width: '100%', borderRadius: '20px', overflow: 'hidden', background: '#1A0A10' }}
      >
        {item.type === 'video' ? (
          <video
            src={item.src}
            controls
            autoPlay
            style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', display: 'block', background: '#000' }}
          />
        ) : (
          <img src={item.src} alt={item.caption} style={{ width: '100%', maxHeight: '75vh', objectFit: 'cover', display: 'block' }} />
        )}

        <div style={{ padding: '1rem 1.5rem', background: '#1A0A10', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {item.type === 'video' && (
              <span style={{ fontSize: '11px', background: 'rgba(255,77,109,0.2)', color: '#FF8FA3', border: '1px solid rgba(255,77,109,0.3)', borderRadius: '999px', padding: '2px 10px', fontWeight: 500 }}>
                VİDEO
              </span>
            )}
            <p style={{ color: '#FFCCD5', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1rem' }}>{item.caption}</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[{ label: '←', fn: onPrev }, { label: '→', fn: onNext }].map(btn => (
              <button key={btn.label} onClick={btn.fn}
                style={{ background: 'rgba(255,77,109,0.15)', border: '1px solid rgba(255,77,109,0.3)', color: '#FF8FA3', borderRadius: '10px', width: '38px', height: '38px', fontSize: '16px', cursor: 'pointer' }}
              >{btn.label}</button>
            ))}
          </div>
        </div>

        <button onClick={onClose} style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(26,10,16,0.7)', border: 'none', color: 'white', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [selected, setSelected] = useState(null)
  const [paused, setPaused] = useState(false)

  const CARD_W = 280
  const GAP = 16
  const TOTAL_W = MEDYA.length * (CARD_W + GAP)

  return (
    <>
      <section id="galeri" ref={ref} style={{ padding: '5rem 0', background: '#FFFBFF', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}
        >
          <p style={{ fontSize: '12px', color: '#C9849A', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '8px' }}>BİZİM DÜNYAMIZ</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#1A0A10' }}>Fotoğraf & Video Galerimiz</h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg, #FFFBFF, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(270deg, #FFFBFF, transparent)', zIndex: 2, pointerEvents: 'none' }} />

          <motion.div
            animate={paused ? {} : { x: [-TOTAL_W, 0] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{ display: 'flex', gap: `${GAP}px`, width: 'max-content', padding: '1rem 0 1.5rem' }}
          >
            {LOOP.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelected(i % MEDYA.length)}
                style={{
                  width: `${CARD_W}px`, flexShrink: 0, borderRadius: '16px', overflow: 'hidden',
                  cursor: 'pointer', border: '1px solid #FFCCD5',
                  boxShadow: '0 4px 20px rgba(255,77,109,0.07)',
                  position: 'relative',
                  aspectRatio: i % 3 === 0 ? '4/3' : '3/4',
                  background: '#FFF0F3',
                }}
              >
                {item.type === 'video' ? (
                  <VideoThumb src={item.src} />
                ) : (
                  <img src={item.src} alt={item.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                )}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(26,10,16,0.7))', padding: '2rem 1rem 0.9rem' }}>
                  <p style={{ color: 'white', fontSize: '13px', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <Lightbox
            item={MEDYA[selected]}
            onClose={() => setSelected(null)}
            onPrev={() => setSelected(i => (i - 1 + MEDYA.length) % MEDYA.length)}
            onNext={() => setSelected(i => (i + 1) % MEDYA.length)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
