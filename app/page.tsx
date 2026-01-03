import Hero from './components/Hero'
import GamesMosaic from './components/GameMosaic'
import PromoSplit from './components/PromoSplit'
import Partners from './components/Partners'
import FooterCTA from './components/FooterCTA'
import Video from './components/Video'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <GamesMosaic />
      <PromoSplit />
      <Video />
      <Partners />
      <FooterCTA />
    </main>
  )
}