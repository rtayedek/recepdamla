import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ✏️ BURAYA ÖZEL ANILARINIZI YAZ
const ANILAR = [
  {
    tarih: "İlk Gün",
    baslik: "Seni İlk Gördüğümde",
    aciklama: "O an hayatımın en güzel anlarından biriydi. Kalp atışım hızlandı.",
    emoji: "✨",
  },
  {
    tarih: "İlk Hafta",
    baslik: "İlk Kahvemiz",
    aciklama: "Saatlerce konuştuk. Zamanın nasıl geçtiğini anlamadık.",
    emoji: "☕",
  },
  {
    tarih: "Özel Bir Gün",
    baslik: "İlk Öpücüğümüz",
    aciklama: "O anlık... dünya durdu gibiydi.",
    emoji: "💋",
  },
  {
    tarih: "Bugün",
    baslik: "Sevgililer Gününüz",
    aciklama: "Ve hâlâ her gün sana daha çok aşık oluyorum.",
    emoji: "❤️",
  },
]

export default function Memories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(180deg, #FFF0F3 0%, #FFFBFF 100%)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ fontSize: '12px', color: '#C9849A', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '8px' }}>
            BİRLİKTE
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#1A0A10',
          }}>
            Bizim Anlarımız
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Dikey çizgi */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: 'clamp(20px, 4vw, 40px)',
              top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(180deg, #FF4D6D, #FFB3C1, #FFCCD5)',
              transformOrigin: 'top',
            }}
          />

          {ANILAR.map((ani, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex',
                gap: 'clamp(1.5rem, 4vw, 3rem)',
                paddingLeft: 'clamp(48px, 8vw, 80px)',
                marginBottom: '2.5rem',
                position: 'relative',
              }}
            >
              {/* Nokta */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.4, type: 'spring', bounce: 0.6 }}
                style={{
                  position: 'absolute',
                  left: 'clamp(12px, 2.5vw, 32px)',
                  top: '14px',
                  width: '18px', height: '18px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '2px solid #FF4D6D',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '9px',
                  boxShadow: '0 0 0 4px #FFF0F3',
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF4D6D' }} />
              </motion.div>

              {/* İçerik */}
              <div style={{
                background: 'white',
                border: '1px solid #FFCCD5',
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
                flex: 1,
                boxShadow: '0 4px 20px rgba(255,77,109,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', color: '#C9849A', fontWeight: 500, letterSpacing: '0.06em' }}>
                    {ani.tarih}
                  </span>
                  <span style={{ fontSize: '22px' }}>{ani.emoji}</span>
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#1A0A10',
                  marginBottom: '6px',
                }}>
                  {ani.baslik}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B3040', lineHeight: 1.65 }}>
                  {ani.aciklama}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}