import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const MEKTUP_SATIRLAR = [
  "Doğum günün kutlu olsun aşkım, ollley bugün aşkımın doğum günü! Sen benim hayatımda olduğun için gerçekten çok şanslıyım. Doğum günü sadece büyümek değil, insanın bu dünyaya bıraktığı izlerin de kutlanmasıdır ve sen gittiğin her yere güzellikler bırakan birisin…",
  "",
  "Senin gülüşün, bazen en kötü günümü bile güzel bir güne çeviriyor; seninle konuştuğumda sanki dünya güzelleşiyor. İnsan bazen hayatında birinin ne kadar değerli olduğunu anlatacak kelime bulamıyor… Ben de bulamıyorum ama şunu çok iyi biliyorum: İyi ki varsın. Hayatımda olman bana güç veriyor, huzur veriyor. Seninle kurduğumuz küçük hayaller bile benim için büsbüyük mutluluklar demek.",
  "",
  "Senin mutlu olduğunu görmek, benim için dünyadaki en güzel şey. Umarım buna çok mutlu olmuşsundur, her şeyi seni düşünerek yaptım. Bugün tamamen senin günün. Ama şunu da bilmeni istiyorum… Sen gülerken de, üzülürken de, hayaller kurarken de hep yanında olmak isteyen biri var: O da benim. İyi ki doğdun aşkım, iyi ki bu dünyaya geldin. Anniş de tam bir arı, senin gibi bir bal yapmış! Ve iyi ki HAYATIMDASIN. Doğum günün kutlu olsun, seni çok seviyorum. 🎂❤️"
]

export default function LoveLetter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mektup" ref={ref} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem', background: '#FFFBFF', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', width: '100%' }}>

        {/* 🐝 Arı */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}
        >
          <span style={{ fontSize: '4.5rem' }}>🐝</span>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontStyle: 'italic', color: '#C9849A' }}>bu anniş</span>
        </motion.div>

        {/* Mektup kartı */}
        <motion.div initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%', background: 'white', border: '1px solid #FFCCD5', borderRadius: '24px', padding: 'clamp(2rem, 5vw, 3.5rem)', boxShadow: '0 8px 48px rgba(255,77,109,0.08)', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: 'linear-gradient(225deg, #FFF0F3 0%, transparent 60%)', borderRadius: '0 24px 0 0' }} />

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '12px', color: '#C9849A', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '8px' }}></p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1A0A10', lineHeight: 1.2 }}>Aşkıma Mektubum</h2>
          </motion.div>

          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 0.5, duration: 0.6 }}
            style={{ height: '1px', background: 'linear-gradient(90deg, #FF4D6D, #FFB3C1, transparent)', marginBottom: '2rem', transformOrigin: 'left' }}
          />

          {MEKTUP_SATIRLAR.map((satir, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
              style={{ fontFamily: satir ? 'Playfair Display, serif' : undefined, fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: satir ? '#3D1520' : 'transparent', lineHeight: 1.9, minHeight: satir ? undefined : '1rem' }}
            >
              {satir}
            </motion.p>
          ))}

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.5 }} style={{ marginTop: '2rem', textAlign: 'right' }}>
            <p style={{ color: '#C9849A', fontSize: '14px', marginBottom: '4px' }}></p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontStyle: 'italic', color: '#FF4D6D' }}>Senin için ♥</p>
          </motion.div>
        </motion.div>

        {/* 🍯 Bal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '1.5rem' }}
        >
          <span style={{ fontSize: '4.5rem' }}>🍯</span>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontStyle: 'italic', color: '#C9849A' }}>bu da sen</span>
        </motion.div>

      </div>
    </section>
  )
}