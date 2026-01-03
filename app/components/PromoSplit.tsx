"use client"

import Image from "next/image"

const videoPlaceholders = [
  '/assets/slots-5.mp4',
  '/assets/slots-2.mp4',
  '/assets/slots-3.mp4',
  '/assets/slots-4.mp4',
]

export default function PromoSplit() {
  return (
    <section id="slots" className="py-24 px-6">
        <div className="max-w-7xl mx-auto mb-8">
                <Image
                  src="/assets/slots-img-2.webp"
                  alt="Featured Games"
                  width={1400}
                  height={800}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>
               <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <p className="text-gray-400 text-sm">
          Compare Slots · Filter by Provider
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold">Slots & Other Live  Games</h3>
          <p className="mt-4 text-gray-400">Play and review variety of different slots.</p>
        </div>
        {/* carousel */}
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* track */}
          <div className="flex gap-6 animate-scroll">
            {[...videoPlaceholders, ...videoPlaceholders].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-96 aspect-video rounded-xl overflow-hidden relative"
              >
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-12">
          <button className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
        Coming Soon
      </button>
        </div>
      </div>
    </section>
  )
}