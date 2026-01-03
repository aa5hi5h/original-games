// components/GamesMosaic.tsx
import Image from 'next/image'

const placeholders = [
  '/assets/crash.jpg',   // swap with real banner
  '/assets/dice.webp',   // swap with real banner
  '/assets/poker.avif',   // swap with real banner
  '/assets/plinko.png',   // swap with real banner
]

export default function GamesMosaic() {
  return (
    <section id='games' className="pt-24 pb-6 px-6">
      {/* Featured Games Image Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <Image
          src="/assets/slots-img-3.webp"
          alt="Featured Games"
          width={1400}
          height={800}
          className="w-full h-auto rounded-2xl shadow-2xl"
          priority
        />
      </div>
       <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <p className="text-gray-400 text-sm">
          Verified RTP & Fairness Ratings
        </p>
      </div>

      {/* Original Content */}
      <h2 className="text-center text-4xl font-bold mb-12">
        Crash, Mines, Dice,  Plinko & More 
          <p className="mt-4 text-lg text-gray-400">Play a variety of  fun games.</p>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {placeholders.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Game ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-semibold">
              {src.split('/')[2].split('.')[0].toUpperCase()}
            </span>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <button className="mt-8 px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
          Coming Soon
        </button>
      </div>
    </section>
  )
}