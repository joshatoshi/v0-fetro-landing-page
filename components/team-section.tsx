"use client"

import { User } from "lucide-react"
import { useEffect, useRef } from "react"

const team = [
  {
    name: "Joshatoshi",
    role: "CTO",
    bio: "Former enterprise risk quant at leading fintech firm. 15 yrs experience as a Web3 entrepreneur and hardware hacker. Passionate about upcycling and bridging the nostalgic analog era's craftsmanship with cutting-edge technology.",
  },
  {
    name: "Gamey",
    role: "CMO",
    bio: "Brand strategist with a decade of experience in premium consumer electronics. Believes great products tell great stories.",
  },
  {
    name: "Sam Rivera",
    role: "Fabrication Design Head",
    bio: "CAD genius in the aerodynamics and motorsports field.",
  },
]

export function TeamSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Random glitch effect - occasionally pause and jump
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        // 30% chance of glitch
        video.pause()
        setTimeout(() => {
          // Small random time jump for stutter effect
          if (video.duration) {
            const jumpAmount = (Math.random() - 0.5) * 0.5
            video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + jumpAmount))
          }
          video.play()
        }, 50 + Math.random() * 100)
      }
    }, 2000 + Math.random() * 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section id="team" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover grayscale"
          style={{
            filter: "grayscale(100%) contrast(1.1) brightness(0.9)",
          }}
        >
          <source src="/videos/team-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/85" />
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
              {/* Placeholder Avatar */}
              <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 border-border bg-muted/80 transition-colors group-hover:border-primary/30">
                <User className="h-16 w-16 text-muted-foreground" />
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
