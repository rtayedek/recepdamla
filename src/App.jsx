import Navbar from './components/Navbar'
import FloatingHearts from './components/FloatingHearts'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import Memories from './components/Memories'
import Gallery from './components/Gallery'
import FavSong from './components/FavSong'
import Finale from './components/Finale'

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar />
      <FloatingHearts />
      <div id="hero"><Hero /></div>
      <LoveLetter />
      <div id="anilar"><Memories /></div>
      <Gallery />
      <FavSong />
      <Finale />
    </div>
  )
}