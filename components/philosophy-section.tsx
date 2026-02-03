"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const nostalgicImages = [
  "/images/nostalgic-phone.jpg",
  "/images/nostalgic-mp3.jpg", 
  "/images/nostalgic-camcorder.jpg",
]

export function PhilosophySection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % nostalgicImages.length)
    }, 1500) // Fast cuts - 1.5 seconds per image

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="philosophy" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Slideshow */}
      <div className="absolute inset-0">
        {nostalgicImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover grayscale"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm text-primary">OUR STORY</p>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">We Believe Technology Should Age Gracefully</span>
          </h2>
          
          <div className="mt-10 space-y-6 text-lg text-muted-foreground">
            <p className="text-pretty">
              The most beloved objects in our lives are often the oldest. A grandfather{"'"}s watch, 
              a vintage hifi, a well-worn leather bag. These items carry stories and develop 
              character over time.
            </p>
            <p className="text-pretty">
              Meanwhile, our digital devices have become disposable, sleek but soulless, 
              designed for planned obsolescence and built with materials that will outlast 
              civilizations in landfills.
            </p>
            <p className="text-pretty">
              We{"'"}re building things different. Fetro devices are inspired by the era where 
              materials developed a patina while housing technology designed to integrate 
              to the modern digital world of AI, blockchains, and accelerated hardware.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
