import { motion, useAnimationFrame } from 'framer-motion'
import { useState, useRef } from 'react'

function PulsingHeart() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.12, 1, 1.08, 1],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ display: 'inline-block', lineHeight: 1 }}
    >
      <svg width="90" height="90" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4D6D" />
            <stop offset="100%" stopColor="#FF8FA3" />
          </linearGradient>
        </defs>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="url(#heartGrad)"
        />
      </svg>
    </motion.div>
  )
}

// ✏️ BURAYA SEVGİLİNİN ADINI YAZ
const SEVGILIM_ADI = "İyiki Doğdun Canım DAMLAM"

// ✏️ BURAYA ÖZEL MESAJINI YAZ
const HERO_MESAJ = "İkimizin özel sitesine hoş geldin prensesim 🌸"

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(160deg, #FFFBFF 0%, #FFF0F3 40%, #FFE4EC 100%)',
    }}>
      {/* Tarih rozeti */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          background: 'white',
          border: '1px solid #FFCCD5',
          borderRadius: '999px',
          padding: '6px 20px',
          fontSize: '13px',
          color: '#C9849A',
          fontWeight: 500,
          letterSpacing: '0.08em',
          marginBottom: '2.5rem',
          boxShadow: '0 2px 16px rgba(255,77,109,0.08)',
        }}
      >
        16.03
      </motion.div>

      {/* Büyük kalp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, type: 'spring', bounce: 0.45, delay: 0.3 }}
        style={{ marginBottom: '1.5rem' }}
      >
        <PulsingHeart />
      </motion.div>

      {/* Başlık */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
          fontWeight: 700,
          color: '#1A0A10',
          lineHeight: 1.1,
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}
      >
        Seni Seviyorum,
        <br />
        <span style={{ color: '#FF4D6D', fontStyle: 'italic' }}>{SEVGILIM_ADI}</span>
      </motion.h1>

      {/* Alt mesaj */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: '#6B3040',
          maxWidth: '480px',
          lineHeight: 1.7,
          fontWeight: 300,
          marginBottom: '2.5rem',
        }}
      >
        {HERO_MESAJ}
      </motion.p>

      {/* Scroll aşağı ok */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ cursor: 'pointer', color: '#C9849A' }}
        onClick={() => document.getElementById('mektup')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  )
}