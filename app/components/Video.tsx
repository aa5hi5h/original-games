"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

const Video = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-01-31T23:59:59').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/slots-9.webp"
          alt="Casino background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-8">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-4 px-4">
          WIN BIG
        </h2>
        <p className="text-xl sm:text-2xl md:text-4xl font-bold text-purple-400 mb-6 sm:mb-8 px-4">
          Play · Spin · Win
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 -mx-2 sm:mx-0 max-w-2xl mx-auto mb-8 sm:mb-12">
  Experience the thrill of next-generation casino gaming. Your luck starts here.
</p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 px-4 sm:px-6 mb-6 sm:mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 min-w-16 sm:min-w-20 md:min-w-24">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">{timeLeft.days}</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">DAYS</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 min-w-16 sm:min-w-20 md:min-w-24">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">{timeLeft.hours}</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">HOURS</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 min-w-16 sm:min-w-20 md:min-w-24">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">{timeLeft.minutes}</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">MINS</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 min-w-16 sm:min-w-20 md:min-w-24">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">{timeLeft.seconds}</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">SECS</div>
          </div>
        </div>

        <p className="text-purple-400 text-sm md:text-base font-semibold px-4">
          Launching End of January 2026
        </p>
      </div>
    </section>
  )
}

export default Video