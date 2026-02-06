"use client"

import { User } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

const TEAM_VIDEO_URL = "/images/background.mp4"

const team = [
  {
    name: "Joshatoshi",
    role: "CTO",
    bio: "Former enterprise risk quant at leading fintech firm. 15 yrs experience as a Web3 entrepreneur and hardware hacker. Passionate about upcycling and bridging the nostalgic analog era's craftsmanship with cutting-edge technology.",
    image: "/images/joshatoshi.jpeg",
  },
  {
    name: "マット",
    role: "Senior Engineer",
    bio: "Mechanical Engineer - Digital Consulting - Retro & Elegant System Design - 100% Monospaced Font Enthusiast.",
    image: "https://i2c.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/9e2572f300d337cb0ff8747429670d/c09e2572f300d337cb0ff8747429670d.gif?w=500",
  },
  {
    name: "Sam Hammer",
    role: "3D Modelling Lead",
    bio: "CAD genius in the aerodynamics and motorsports fields.",
    image: "https://i2c.seadn.io/ethereum/0x1d20a51f088492a0f1c57f047a9e30c9ab5c07ea/9a1cd53f5ab2f0c008971863733137/299a1cd53f5ab2f0c008971863733137.png?w=500",
  },
]

export function TeamSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let isGlitching = false

    // Random glitch effect - occasionally create small time jumps
    const glitchInterval = setInterval(() => {
      if (!isGlitching && Math.random() > 0.7 && video.duration) {
        isGlitching = true
        // Small random time jump for stutter effect (no pause/play, just time jump)
        const jumpAmount = (Math.random() - 0.5) * 0.3
        video.currentTime = Math.max(0, Math.min(video.duration - 0.1, video.currentTime + jumpAmount))
        
        setTimeout(() => {
          isGlitching = false
        }, 150)
      }
    }, 2500)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section id="team" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{
            filter: "grayscale(100%) contrast(1.1) brightness(0.9)",
          }}
          src={TEAM_VIDEO_URL}
        >
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Scanline effect for retro feel */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-sm text-primary">OUR TEAM</p>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">The People Behind Fetro</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            A team of engineers, designers, and craftspeople united by a shared vision 
            of technology that ages gracefully.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div 
              key={member.name}
              className="group rounded-lg border border-border bg-card/80 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Avatar */}
              <div className="mx-auto mb-6 relative h-32 w-32 overflow-hidden rounded-full border-2 border-border bg-muted/80 transition-colors group-hover:border-primary/30">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <User className="h-16 w-16 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-sans text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 font-mono text-sm text-primary">{member.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
