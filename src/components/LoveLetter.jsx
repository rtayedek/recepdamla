import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ✏️ BURAYA SEVGİ MEKTUBUNU YAZ
const MEKTUP_SATIRLAR = [
  "Seni tanıdığım günden beri hayatım bambaşka bir anlam kazandı.",
  "Her sabah gözlerimi açtığımda aklıma ilk sen geliyorsun.",
  "Gülüşün, o küçük alışkanlıkların, benimle paylaştığın her an —",
  "hepsi benim için paha biçilmez birer hazine.",
  "",
  "Bugün ve her gün, sonsuza dek seninle olmak istiyorum.",
  "Seni seviyorum.",
]

export default function LoveLetter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="mektup"
      ref={ref}
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem',
        background: '#FFFBFF',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: '620px',
          width: '100%',
          background: 'white',
          border: '1px solid #FFCCD5',
          borderRadius: '24px',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          boxShadow: '0 8px 48px rgba(255, 77, 109, 0.08), 0 1px 2px rgba(255,77,109,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dekoratif köşe */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '120px', height: '120px',
          background: 'linear-gradient(225deg, #FFF0F3 0%, transparent 60%)',
          borderRadius: '0 24px 0 0',
        }} />

        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <p style={{ fontSize: '12px', color: '#C9849A', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '8px' }}>
            SANA ÖZEL
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: '#1A0A10',
            lineHeight: 1.2,
          }}>
            Sevgi Mektubum
          </h2>
        </motion.div>

        {/* Çizgi */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, #FF4D6D, #FFB3C1, transparent)',
            marginBottom: '2rem',
            transformOrigin: 'left',
          }}
        />

        {/* Mektup satırları */}
        {MEKTUP_SATIRLAR.map((satir, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.6, ease: 'easeOut' }}
            style={{
              fontFamily: satir === '' ? undefined : 'Playfair Display, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: satir === '' ? 'transparent' : '#3D1520',
              lineHeight: 1.9,
              minHeight: satir === '' ? '1rem' : undefined,
            }}
          >
            {satir}
          </motion.p>
        ))}

        {/* İmza */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{ marginTop: '2rem', textAlign: 'right' }}
        >
          <p style={{ color: '#C9849A', fontSize: '14px', marginBottom: '4px' }}>Her zaman,</p>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            color: '#FF4D6D',
          }}>Senin için ♥</p>
        </motion.div>
      </motion.div>
    </section>
  )
}