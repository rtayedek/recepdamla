import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const ISTATISTIKLER = [
  { emoji: '🎵', sayi: '1203', baslik: 'Dinlenen Toplam Şarkı', aciklama: 'kabede hacılar hu der allah' },
  { emoji: '🎮', sayi: '1603', baslik: 'Birlikte Oynanan Mobile Legend Maçı', aciklama: 'Sen tam bir prosun' },
  { emoji: '💛💙', sayi: '1907', baslik: 'Fenerbahçe Maçlarında Edilen Tatlı Kavgalar', aciklama: 'Ama hep barıştık 😘' },
  { emoji: '❤️', sayi: 'Sonsuz', baslik: 'Söylenen Seni Seviyorum Sayısı', aciklama: 'Yinede yetmiyor...' },
  { emoji: '🥺', sayi: '"Hadi Barışalım"', baslik: 'Küsünce Barışmak İçin Yaptığımız En Büyük Şey', aciklama: 'Her seferinde işe yarıyor 💕' },
  { emoji: '📱', sayi: '1001', baslik: 'Birbirimize Gönderilen Reels Sayısı', aciklama: '"Bak bak bak bu sennn" 😂' },
  { emoji: '🧣', sayi: 'Aşkımın Atkısı', baslik: "Erzurum'un Soğuğunda Beni Sıcak Tutan", aciklama: 'En güzel battaniyem 🥰' },
  { emoji: '👣', sayi: 'Sonsuz', baslik: 'Birlikte Atılan Adımlar', aciklama: 'Ve daha yürüyeceğimiz çok yol var önümüzde...' },
  { emoji: '📸', sayi: '978.979+', baslik: 'Beraber Çekilen Fotoğraf', aciklama: 'Yine de yetmez!' },
  { emoji: '📞', sayi: '97.988+ dk', baslik: 'Telefonda Konuşulan Dakika', aciklama: 'Yine de "hadi kapatalım" diyemiyoruz' },
  { emoji: '😍', sayi: 'Sayılamaz...', baslik: 'O Güzel Gözlerinle Bakıp Kalbimi Hızlandırdığın Anlar', aciklama: 'Her bakışta yeniden aşık oluyorum' },
]

const KONFETI_RENKLER = ['#FF4D6D', '#FF8FA3', '#FFB3C1', '#D4A853', '#F2D07E', '#FF6B6B', '#FFE66D', '#A8E6CF']
const EMOJILER = ['🎂', '🎉', '🎊', '🎈', '💕', '✨', '🌸', '💝', '🎀', '🥳']

function Konfeti({ id, onDone }) {
  const isEmoji = Math.random() > 0.6
  const emoji = EMOJILER[Math.floor(Math.random() * EMOJILER.length)]
  const renk = KONFETI_RENKLER[Math.floor(Math.random() * KONFETI_RENKLER.length)]
  const x = Math.random() * 100
  const size = Math.random() * 30 + 20
  const duration = Math.random() * 2 + 2.5
  const rotate = Math.random() * 720 - 360
  const drift = (Math.random() - 0.5) * 200

  return (
    <motion.div
      initial={{ y: '60vh', x: `${x}vw`, opacity: 1, scale: 0, rotate: 0 }}
      animate={{
        y: '-20vh',
        x: `calc(${x}vw + ${drift}px)`,
        opacity: [1, 1, 0],
        scale: [0, 1.4, 1],
        rotate,
      }}
      transition={{ duration, ease: 'easeOut' }}
      onAnimationComplete={onDone}
      style={{
        position: 'fixed', bottom: 0, zIndex: 9998, pointerEvents: 'none',
        fontSize: isEmoji ? `${size + 24}px` : undefined,
      }}
    >
      {isEmoji ? emoji : (
        <div style={{
          width: size, height: size,
          background: renk,
          borderRadius: Math.random() > 0.5 ? '50%' : '2px',
        }} />
      )}
    </motion.div>
  )
}

function FlipCard({ item, index, inView }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => setFlipped(f => !f)}
      style={{ perspective: '1000px', cursor: 'pointer', height: '280px' }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
      >
        {/* ÖN YÜZ */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          background: 'white', border: '1.5px solid #FFCCD5', borderRadius: '24px',
          padding: '2rem', boxShadow: '0 8px 32px rgba(255,77,109,0.08)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '3rem', lineHeight: 1 }}>{item.emoji}</span>
            <span style={{ fontSize: '11px', color: '#FFCCD5', letterSpacing: '0.06em' }}>dokun ↩</span>
          </div>
          <div>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#FF4D6D', lineHeight: 1.1, marginBottom: '10px' }}>{item.sayi}</p>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#1A0A10', lineHeight: 1.4 }}>{item.baslik}</p>
          </div>
        </div>

        {/* ARKA YÜZ */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg, #FF4D6D, #FF8FA3)', borderRadius: '24px',
          padding: '2rem', boxShadow: '0 8px 32px rgba(255,77,109,0.25)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '16px',
        }}>
          <span style={{ fontSize: '3rem' }}>{item.emoji}</span>
          <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'white', lineHeight: 1.7 }}>{item.aciklama}</p>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em' }}>tekrar dokun ↩</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [konfetiler, setKonfetiler] = useState([])
  const [patladi, setPatladi] = useState(false)
  const [showMsg, setShowMsg] = useState(false)

  const patla = () => {
    const yeni = Array.from({ length: 150 }, (_, i) => ({ id: Date.now() + i }))
    setKonfetiler(yeni)
    setPatladi(true)
    setShowMsg(true)
    setTimeout(() => setShowMsg(false), 4000)
  }

  const kaldir = (id) => {
    setKonfetiler(prev => prev.filter(k => k.id !== id))
  }

  return (
    <>
      {konfetiler.map(k => (
        <Konfeti key={k.id} id={k.id} onDone={() => kaldir(k.id)} />
      ))}

      <AnimatePresence>
        {showMsg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: 'spring', bounce: 0.5 }}
            style={{
              position: 'fixed', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9999, textAlign: 'center',
              background: 'rgba(255,251,255,0.98)',
              border: '2px solid #FFCCD5',
              borderRadius: '32px',
              padding: '4rem 5rem',
              boxShadow: '0 30px 80px rgba(255,77,109,0.3)',
              pointerEvents: 'none',
              width: 'min(90vw, 600px)',
            }}
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: '8rem', marginBottom: '1.5rem' }}
            >
              🎂
            </motion.div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              fontWeight: 700, color: '#FF4D6D',
              marginBottom: '1rem',
            }}>
              İyi ki doğdun! 🎉
            </h2>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: '#6B3040', fontSize: '1.3rem' }}>
              Seni seviyorum canım 💕
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="istatistik" ref={ref} style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(180deg, #FFFBFF 0%, #FFF0F3 100%)',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ fontSize: '12px', color: '#C9849A', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '8px' }}>SAYILARLA</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#1A0A10' }}>
              İstatistiklerimiz 💕
            </h2>
            <p style={{ fontSize: '14px', color: '#C9849A', marginTop: '8px', fontStyle: 'italic' }}>
              Kartlara dokun, arka yüzü gör ✨
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {ISTATISTIKLER.map((item, i) => (
              <FlipCard key={i} item={item} index={i} inView={inView} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={patla}
              style={{
                background: patladi
                  ? 'linear-gradient(135deg, #D4A853, #F2D07E)'
                  : 'linear-gradient(135deg, #FF4D6D, #FF8FA3)',
                border: 'none', borderRadius: '999px',
                padding: '16px 40px',
                color: 'white', fontSize: '1rem', fontWeight: 500,
                cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                boxShadow: '0 8px 32px rgba(255,77,109,0.25)',
              }}
            >
              {patladi ? '🎊 Tekrar Patlat!' : '🎂 TIKLA'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}