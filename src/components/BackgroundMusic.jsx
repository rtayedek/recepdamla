import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SIFRE = 'reciko reciko reciko'

export default function BackgroundMusic() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const [input, setInput] = useState('')
  const [yanlis, setYanlis] = useState(false)

  const gir = () => {
    if (input.trim().toLowerCase() === SIFRE) {
      setShowSplash(false)
      const audio = audioRef.current
      audio.volume = 0.4
      audio.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      setYanlis(true)
      setTimeout(() => setYanlis(false), 800)
    }
  }

  const toggle = (e) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/sarki.mp3" loop preload="auto" />

      {/* Giriş ekranı */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'linear-gradient(160deg, #FFFBFF 0%, #FFF0F3 40%, #FFE4EC 100%)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center', padding: '2rem',
            }}
          >
            {/* Kalp */}
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ marginBottom: '2rem' }}
            >
              <svg width="72" height="72" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4D6D" />
                    <stop offset="100%" stopColor="#FF8FA3" />
                  </linearGradient>
                </defs>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#sg)"/>
              </svg>
            </motion.div>

            {/* Yazı */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.3rem, 4vw, 2rem)',
                fontWeight: 700, color: '#1A0A10',
                lineHeight: 1.4, marginBottom: '2.5rem',
                maxWidth: '480px',
              }}
            >
              Mutluluk denince akla hemen onun adı gelir ???
            </motion.h1>

            {/* Şifre alanı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ width: '100%', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <motion.input
                animate={yanlis ? { x: [-8, 8, -8, 8, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
                type="text"
                placeholder="✦  cevabını yaz..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && gir()}
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  fontSize: '1rem',
                  fontFamily: 'DM Sans, sans-serif',
                  border: yanlis ? '1px solid #FF4D6D' : '1px solid #FFCCD5',
                  borderRadius: '999px',
                  outline: 'none',
                  textAlign: 'center',
                  background: 'white',
                  color: '#1A0A10',
                  boxShadow: yanlis
                    ? '0 0 0 3px rgba(255,77,109,0.15)'
                    : '0 4px 20px rgba(255,77,109,0.08)',
                  transition: 'border 0.2s, box-shadow 0.2s',
                }}
              />

              {yanlis && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontSize: '13px', color: '#FF4D6D', fontStyle: 'italic' }}
                >
                  Yanlış cevap, tekrar dene 🌸
                </motion.p>
              )}

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={gir}
                style={{
                  background: 'linear-gradient(135deg, #FF4D6D, #FF8FA3)',
                  border: 'none', borderRadius: '999px',
                  padding: '14px', color: 'white',
                  fontSize: '1rem', fontWeight: 500,
                  cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                  boxShadow: '0 8px 32px rgba(255,77,109,0.25)',
                }}
              >
                Gir ♥
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sağ altta player */}
      <AnimatePresence>
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'fixed', bottom: '24px', right: '24px', zIndex: 999,
              display: 'flex', alignItems: 'center', gap: '10px',
              background: 'rgba(255,251,255,0.92)',
              backdropFilter: 'blur(16px)',
              border: '1px solid #FFCCD5', borderRadius: '999px',
              padding: '8px 16px 8px 10px',
              boxShadow: '0 4px 24px rgba(255,77,109,0.12)',
            }}
          >
            <motion.button onClick={toggle} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF4D6D, #FF8FA3)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                {playing ? <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/> : <path d="M8 5v14l11-7z"/>}
              </svg>
            </motion.button>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 500, color: '#1A0A10', whiteSpace: 'nowrap' }}>Cennet — Ferhat Göçer</p>
              <p style={{ fontSize: '11px', color: '#C9849A' }}>{playing ? '♪ Çalıyor' : '— Duraklatıldı'}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}