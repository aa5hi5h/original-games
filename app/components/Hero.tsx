// components/Hero.tsx
import Image from 'next/image'
import BgImage from "@/public/assets/slot-img.webp"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BgImage}
          alt="Casino background"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Original Games
        </h1>
        <p className="mt-4 text-lg font-medium md:text-xl text-gray-100">
          The next-gen casino protocol. Own your spins.
        </p>
        <div className='flex gap-4 justify-center items-center'> 
          <button className="mt-8 px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
            Slots
          </button>
          <button className="mt-8 px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
            Games 
          </button>
        </div>
      </div>
    </section>
  )
}