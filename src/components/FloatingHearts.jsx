import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HEART_SVG = ({ size = 20, color = '#FF4D6D', opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)

function createHeart(id) {
  return {
    id,
    x: Math.random() * 100,
    size: Math.random() * 18 + 10,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.4 + 0.15,
    drift: (Math.random() - 0.5) * 120,
    color: ['#FF4D6D', '#FF8FA3', '#FFB3C1', '#FFD6E0', '#D4A853'][Math.floor(Math.random() * 5)],
  }
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState(() =>
    Array.from({ length: 18 }, (_, i) => createHeart(i))
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => {
        const next = [...prev]
        const idx = Math.floor(Math.random() * next.length)
        next[idx] = createHeart(Date.now())
        return next
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden'
    }}>
      {hearts.map(h => (
        <motion.div
          key={h.id}
          initial={{ y: '110vh', x: `${h.x}vw`, opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{
            y: '-10vh',
            x: `calc(${h.x}vw + ${h.drift}px)`,
            opacity: [0, h.opacity, h.opacity, 0],
            scale: [0.5, 1, 1, 0.8],
            rotate: [h.drift > 0 ? -20 : 20, h.drift > 0 ? 20 : -20],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: Math.random() * 4,
          }}
          style={{ position: 'absolute', bottom: 0 }}
        >
          <HEART_SVG size={h.size} color={h.color} opacity={1} />
        </motion.div>
      ))}
    </div>
  )
}