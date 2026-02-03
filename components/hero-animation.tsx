"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const devices = [
  {
    name: "Mobile Phone",
    label: "FETRO PHONE",
    subtitle: "Nokia 3310 Platform",
    parts: [
      { id: "mic", label: "Agentic AI\nInstructor Mic", x: -120, y: -80 },
      { id: "cpu", label: "Updated CPU", x: 120, y: 0 },
      { id: "display", label: "E-Ink Display", x: -120, y: 80 },
    ],
  },
  {
    name: "Guitar",
    label: "FETRO GUITAR",
    subtitle: "Les Paul Platform",
    parts: [
      { id: "pickups", label: "Noiseless\nPickups", x: -130, y: -60 },
      { id: "midi", label: "Onboard Programmable\nMIDI Controller", x: 130, y: 0 },
      { id: "battery", label: "Rechargeable\nBattery", x: -130, y: 70 },
    ],
  },
  {
    name: "Camcorder",
    label: "DSLR1",
    subtitle: "DCR-VX1000 Platform",
    parts: [
      { id: "cooling", label: "Intelligent\nCooling", x: -140, y: -90 },
      { id: "zk", label: "ZK Attested\nSensor Data", x: 140, y: -50 },
      { id: "tamper", label: "Tamper-Proof\nEnvironment", x: -140, y: 20 },
      { id: "blockchain", label: "Blockchain\nProvenance", x: 140, y: 50 },
      { id: "cloud", label: "Cloud Sync", x: 0, y: 110 },
    ],
  },
]

// SVG paths for each device silhouette (simplified technical drawings)
function PhoneSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Phone body */}
      <rect x="10" y="5" width="60" height="130" rx="8" />
      {/* Screen */}
      <rect x="15" y="15" width="50" height="40" rx="2" />
      {/* Speaker holes */}
      <circle cx="40" cy="10" r="2" />
      {/* Keypad area */}
      <rect x="18" y="62" width="44" height="65" rx="2" strokeDasharray="2 2" />
      {/* Keypad buttons grid */}
      <g strokeWidth="1">
        {[0, 1, 2].map(row => 
          [0, 1, 2].map(col => (
            <rect key={`${row}-${col}`} x={22 + col * 14} y={68 + row * 18} width="10" height="12" rx="2" />
          ))
        )}
        {/* Bottom row */}
        <rect x="22" y="122" width="10" height="10" rx="2" />
        <rect x="36" y="122" width="10" height="10" rx="2" />
        <rect x="50" y="122" width="10" height="10" rx="2" />
      </g>
    </svg>
  )
}

function GuitarSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 180" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Headstock */}
      <path d="M42 5 L42 25 L38 25 L38 5 Q40 0 42 5" />
      <path d="M58 5 L58 25 L62 25 L62 5 Q60 0 58 5" />
      {/* Tuning pegs */}
      <circle cx="38" cy="10" r="3" />
      <circle cx="38" cy="20" r="3" />
      <circle cx="62" cy="10" r="3" />
      <circle cx="62" cy="20" r="3" />
      {/* Neck */}
      <rect x="44" y="25" width="12" height="60" />
      {/* Body */}
      <ellipse cx="50" cy="120" rx="40" ry="50" />
      {/* Cutaway */}
      <path d="M30 85 Q20 95 25 110" />
      {/* Pickups */}
      <rect x="35" y="100" width="30" height="8" rx="2" strokeDasharray="2 2" />
      <rect x="35" y="115" width="30" height="8" rx="2" strokeDasharray="2 2" />
      {/* Bridge */}
      <rect x="40" y="140" width="20" height="6" rx="1" />
      {/* Control knobs */}
      <circle cx="30" cy="145" r="5" />
      <circle cx="70" cy="145" r="5" />
      <circle cx="30" cy="158" r="5" />
      <circle cx="70" cy="158" r="5" />
    </svg>
  )
}

function CamcorderSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Main body */}
      <rect x="50" y="30" width="120" height="70" rx="5" />
      {/* Lens housing */}
      <rect x="5" y="40" width="50" height="50" rx="25" />
      <circle cx="30" cy="65" r="18" />
      <circle cx="30" cy="65" r="12" />
      <circle cx="30" cy="65" r="6" />
      {/* Lens hood */}
      <path d="M5 50 L0 45 L0 85 L5 80" />
      {/* Top handle */}
      <path d="M70 30 L70 15 L150 15 L150 30" strokeWidth="2" />
      <rect x="75" y="10" width="70" height="8" rx="2" />
      {/* Viewfinder */}
      <rect x="155" y="35" width="25" height="20" rx="2" />
      <rect x="175" y="40" width="10" height="10" rx="1" />
      {/* LCD screen outline */}
      <rect x="60" y="40" width="50" height="35" rx="2" strokeDasharray="2 2" />
      {/* Grip area */}
      <rect x="120" y="35" width="40" height="55" rx="3" strokeDasharray="2 2" />
      {/* Record button */}
      <circle cx="160" cy="70" r="8" />
      <circle cx="160" cy="70" r="5" fill="currentColor" />
      {/* Battery compartment */}
      <rect x="145" y="85" width="20" height="12" rx="2" />
    </svg>
  )
}

function DeviceSVG({ device, className }: { device: string; className?: string }) {
  switch (device) {
    case "Mobile Phone":
      return <PhoneSVG className={className} />
    case "Guitar":
      return <GuitarSVG className={className} />
    case "Camcorder":
      return <CamcorderSVG className={className} />
    default:
      return null
  }
}

export function HeroAnimation() {
  const [currentDevice, setCurrentDevice] = useState(0)
  const [isExploded, setIsExploded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExploded((prev) => {
        if (prev) {
          setTimeout(() => {
            setCurrentDevice((d) => (d + 1) % devices.length)
          }, 800)
        }
        return !prev
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const device = devices[currentDevice]

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Main animation container */}
      <div className="relative flex h-96 w-full max-w-lg items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentDevice}-${isExploded}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Central device silhouette */}
            <motion.div
              animate={{ 
                scale: isExploded ? 0.7 : 1,
                opacity: isExploded ? 0.4 : 1 
              }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="relative z-10"
            >
              <DeviceSVG 
                device={device.name} 
                className="h-40 w-auto text-primary" 
              />
            </motion.div>

            {/* Exploded parts with callout lines */}
            {isExploded && device.parts.map((part, index) => (
              <motion.div
                key={part.id}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ 
                  x: part.x, 
                  y: part.y, 
                  opacity: 1,
                }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {/* Callout box */}
                <div className="relative">
                  <div className="rounded border border-primary/60 bg-background/90 px-2 py-1 backdrop-blur-sm">
                    <p className="whitespace-pre-line text-center font-mono text-[9px] leading-tight text-foreground sm:text-[10px]">
                      {part.label}
                    </p>
                  </div>
                  {/* Callout number */}
                  <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Connection lines */}
            {isExploded && (
              <svg 
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" 
                style={{ zIndex: 0 }}
              >
                {device.parts.map((part, index) => (
                  <motion.g key={`line-${part.id}`}>
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${part.x}px)`}
                      y2={`calc(50% + ${part.y}px)`}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-primary/40"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    />
                    {/* End dot */}
                    <motion.circle
                      cx={`calc(50% + ${part.x * 0.3}px)`}
                      cy={`calc(50% + ${part.y * 0.3}px)`}
                      r="2"
                      className="fill-primary/60"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    />
                  </motion.g>
                ))}
              </svg>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Device label and subtitle */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center">
          <motion.div 
            key={device.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-foreground">
              {device.label}
            </span>
            <p className="font-mono text-[9px] text-muted-foreground">
              {device.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Status indicator */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2">
          <motion.div 
            className="flex items-center gap-2 rounded border border-border/50 bg-background/80 px-3 py-1 backdrop-blur-sm"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${isExploded ? 'bg-primary' : 'bg-muted-foreground'}`} />
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              {isExploded ? "Exploded View" : "Assembled"}
            </span>
          </motion.div>
        </div>

        {/* Figure number - Haynes manual style */}
        <div className="absolute -top-8 right-0">
          <span className="font-mono text-[10px] text-muted-foreground">
            Fig. {currentDevice + 1}.{isExploded ? '2' : '1'}
          </span>
        </div>
      </div>

      {/* Corner brackets - technical drawing style */}
      <div className="absolute top-0 left-0 h-6 w-6 border-l-2 border-t-2 border-primary/40" />
      <div className="absolute top-0 right-0 h-6 w-6 border-r-2 border-t-2 border-primary/40" />
      <div className="absolute bottom-0 left-0 h-6 w-6 border-l-2 border-b-2 border-primary/40" />
      <div className="absolute bottom-0 right-0 h-6 w-6 border-r-2 border-b-2 border-primary/40" />

      {/* Device navigation dots */}
      <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 gap-3">
        {devices.map((d, i) => (
          <button
            key={d.name}
            onClick={() => {
              setCurrentDevice(i)
              setIsExploded(false)
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentDevice 
                ? "bg-primary scale-125" 
                : "bg-border hover:bg-primary/50"
            }`}
            aria-label={`View ${d.name}`}
          />
        ))}
      </div>
    </div>
  )
}
