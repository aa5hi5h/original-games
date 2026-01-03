import Image from "next/image"

// components/Partners.tsx
const partnerLogos = [
  {
    name: 'Pragmatic Play',
    url: '/assets/pragmatic-play-seeklogo.png',
  },
  {
    name: 'Play\'n GO',
    url: '/assets/playn-go-seeklogo.png',
  },
]

export default function Partners() {
  return (
    <section className="py-16 px-6">
      <p className="text-center text-sm mb-8">Featured Game Providers</p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-90 hover:opacity-100 transition-opacity">
        {partnerLogos.map((partner, i) => (
          <div key={i} className="h-12 relative w-36  transition-all duration-300">
            <Image 
              src={partner.url} 
              alt={partner.name} 
              fill 
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        <Image
          src="/assets/slots-img-4.webp"
          alt="Featured Games"
          width={1400}
          height={800}
          className="w-full h-auto rounded-2xl shadow-2xl"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto text-center mt-8 px-4">
        <p className="text-gray-400 text-sm">
          Trusted Reviews · Smart Comparisons
        </p>
      </div>
    </section>
  )
}