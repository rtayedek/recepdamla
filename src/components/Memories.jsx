import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const BASLANGIC = new Date('2022-03-12')

function hesapla() {
  const simdi = new Date()
  const fark = simdi - BASLANGIC

  const gun = Math.floor(fark / (1000 * 60 * 60 * 24))
  const saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60))
  const saniye = Math.floor((fark % (1000 * 60)) / 1000)

  return { gun, saat, dakika, saniye }
}

function Kart({ deger, etiket, delay }) {
  const [val, setVal] = useState(deger)

  useEffect(() => {
    setVal(deger)
  }, [deger])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'white',
        border: '1px solid #FFCCD5',
        borderRadius: '20px',
        padding: '1.5rem 1rem',
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(255,77,109,0.08)',
        minWidth: '100px',
        flex: 1,
      }}
    >
      <motion.div
        key={val}
        initial={{ opacity: 0.4, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
          fontWeight: 700,
          color: '#FF4D6D',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {String(val).padStart(2, '0')}
      </motion.div>
      <p style={{ fontSize: '12px', color: '#C9849A', fontWeight: 500, letterSpacing: '0.1em' }}>
        {etiket}
      </p>
    </motion.div>
  )
}

export default function Memories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [zaman, setZaman] = useState(hesapla())

  useEffect(() => {
    const interval = setInterval(() => setZaman(hesapla()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="anilar" ref={ref} style={{ padding: '5rem 2rem', background: 'linear-gradient(180deg, #FFF0F3 0%, #FFFBFF 100%)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '12px', color: '#C9849A', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '8px' }}>
            12 MART 2022'DEN BERİ
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#1A0A10', marginBottom: '0.5rem' }}>
            Birlikteyiz 🤍
          </h2>
          <p style={{ color: '#C9849A', fontSize: '1rem' }}>ve her saniye daha da çok seviyorum</p>
        </motion.div>

        {/* Sayaç kartları */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Kart deger={zaman.gun} etiket="GÜN" delay={0.2} />
          <Kart deger={zaman.saat} etiket="SAAT" delay={0.3} />
          <Kart deger={zaman.dakika} etiket="DAKİKA" delay={0.4} />
          <Kart deger={zaman.saniye} etiket="SANİYE" delay={0.5} />
        </div>

        {/* Alt mesaj */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.1rem', color: '#6B3040' }}>
            "Her geçen saniye de kalbim çarpıyor." ♥
          </p>
        </motion.div>

      </div>
    </section>
  )
}