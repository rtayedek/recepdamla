import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Finale() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(160deg, #FFF0F3 0%, #FFE4EC 50%, #FFCCD5 100%)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Dekoratif büyük kalpler arka planda */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.06 + i * 0.03, scale: 1 } : {}}
          transition={{ delay: 0.2 + i * 0.15, duration: 1.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <svg
            width={300 + i * 140}
            height={300 + i * 140}
            viewBox="0 0 24 24"
            fill="#FF4D6D"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
      ))}

      {/* İçerik */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ marginBottom: '2rem' }}
          >
            <svg width="72" height="72" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="finalHeart" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF4D6D" />
                  <stop offset="100%" stopColor="#D4A853" />
                </linearGradient>
              </defs>
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="url(#finalHeart)"
              />
            </svg>
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 700,
            color: '#1A0A10',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          Sonsuza Kadar
          <br />
          <span style={{ color: '#FF4D6D', fontStyle: 'italic' }}>Seninle</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#6B3040',
            maxWidth: '380px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          💕
        </motion.p>
      </div>
    </section>
  )
}