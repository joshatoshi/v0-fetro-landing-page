"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

// ASCII art for each device - assembled state
const devices = [
  {
    name: "Mobile Phone",
    label: "SMARTPHONE",
    assembled: `
    ┌─────────────┐
    │  ○          │
    │ ┌─────────┐ │
    │ │         │ │
    │ │         │ │
    │ │         │ │
    │ │         │ │
    │ │         │ │
    │ └─────────┘ │
    │    [===]    │
    └─────────────┘`,
    parts: [
      { id: "screen", y: -60, x: 0, art: `
    ┌─────────┐
    │ ░░░░░░░ │
    │ ░░░░░░░ │
    │ ░░░░░░░ │
    └─────────┘` },
      { id: "chip", y: 0, x: 80, art: `
    ┌───┬───┐
    │CPU│GPU│
    ├───┼───┤
    │RAM│SSD│
    └───┴───┘` },
      { id: "battery", y: 60, x: 0, art: `
    ╔═══════╗
    ║ ████▓ ║
    ║ LION  ║
    ╚═══════╝` },
      { id: "frame", y: 0, x: -80, art: `
    │         │
    │    ○    │
    │         │
    │  [===]  │
    └─────────┘` },
    ],
  },
  {
    name: "DCR-VX1000",
    label: "CAMCORDER",
    assembled: `
       ┌──────────────┐
      /│    [REC]     │
     ○ │  ┌────────┐  │
    ═══╪══│ ▓▓▓▓▓▓ │══╡
       │  │ ▓▓▓▓▓▓ │  │
       │  └────────┘  │
       │ ○    ════    │
       └──────────────┘`,
    parts: [
      { id: "lens", y: 0, x: -90, art: `
      ╭───╮
     ( ◉   )
      ╰───╯
       ═══` },
      { id: "viewfinder", y: -70, x: 0, art: `
    ┌────────┐
    │ [REC]  │
    │  ▣▣▣   │
    └────────┘` },
      { id: "pcb", y: 0, x: 90, art: `
    ┌──────┐
    │▪▫▪▫▪▫│
    │ ◻◻◻  │
    │▫▪▫▪▫▪│
    └──────┘` },
      { id: "tape", y: 70, x: 0, art: `
    ╔══════╗
    ║ ◎  ◎ ║
    ║ miniDV║
    ╚══════╝` },
    ],
  },
  {
    name: "Les Paul",
    label: "ELECTRIC GUITAR",
    assembled: `
          ┌┐
         ┌┘└┐
        ┌┘  └┐
       ┌┴────┴┐
       │ ◉  ◉ │
       │      │
       │ ════ │
       │ ○  ○ │
       └──┬┬──┘
          ││
          ││
          ││
          ╘╛`,
    parts: [
      { id: "headstock", y: -80, x: 0, art: `
      ┌┐
     ┌┘└┐
    ┌┘  └┐
    │●●●●│` },
      { id: "pickups", y: 0, x: 80, art: `
    ┌──────┐
    │══════│
    │ MIDI │
    │══════│
    └──────┘` },
      { id: "circuit", y: 0, x: -80, art: `
    ┌────┐
    │○  ○│
    │ ⊕⊕ │
    │○  ○│
    └────┘` },
      { id: "bridge", y: 80, x: 0, art: `
    ╔════╗
    ║▓▓▓▓║
    ╚════╝` },
    ],
  },
]

export function HeroAnimation() {
  const [currentDevice, setCurrentDevice] = useState(0)
  const [isExploded, setIsExploded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExploded((prev) => {
        if (prev) {
          // After assembling, wait a bit then switch device
          setTimeout(() => {
            setCurrentDevice((d) => (d + 1) % devices.length)
          }, 800)
        }
        return !prev
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const device = devices[currentDevice]

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Outer decorative ring */}
      <div 
        className="absolute inset-0 rounded-full border border-border/30"
        style={{ 
          animation: 'spin 40s linear infinite',
        }}
      />
      
      {/* Inner glow */}
      <div className="absolute inset-8 rounded-full bg-primary/5" />

      {/* Main animation container */}
      <div className="relative flex h-80 w-80 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentDevice}-${isExploded}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {isExploded ? (
              // Exploded view with parts
              <div className="relative h-64 w-64">
                {device.parts.map((part, index) => (
                  <motion.div
                    key={part.id}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.8 }}
                    animate={{ 
                      x: part.x, 
                      y: part.y, 
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <pre className="font-mono text-[10px] leading-tight text-primary/90 sm:text-xs">
                      {part.art}
                    </pre>
                  </motion.div>
                ))}
                
                {/* Connection lines */}
                <svg className="absolute inset-0 h-full w-full overflow-visible" style={{ zIndex: -1 }}>
                  {device.parts.map((part, index) => (
                    <motion.line
                      key={`line-${part.id}`}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${part.x}px)`}
                      y2={`calc(50% + ${part.y}px)`}
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    />
                  ))}
                </svg>
              </div>
            ) : (
              // Assembled view
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <pre className="font-mono text-xs leading-tight text-foreground sm:text-sm">
                  {device.assembled}
                </pre>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Device label */}
        <motion.div 
          key={device.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            {device.label}
          </span>
        </motion.div>

        {/* Status indicator */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <motion.span 
            className="font-mono text-[10px] text-primary"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {isExploded ? "[ EXPLODED VIEW ]" : "[ ASSEMBLED ]"}
          </motion.span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 h-8 w-8 border-l border-t border-primary/30" />
      <div className="absolute top-0 right-0 h-8 w-8 border-r border-t border-primary/30" />
      <div className="absolute bottom-0 left-0 h-8 w-8 border-l border-b border-primary/30" />
      <div className="absolute bottom-0 right-0 h-8 w-8 border-r border-b border-primary/30" />

      {/* Device indicators */}
      <div className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 gap-2">
        {devices.map((d, i) => (
          <button
            key={d.name}
            onClick={() => {
              setCurrentDevice(i)
              setIsExploded(false)
            }}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === currentDevice ? "bg-primary" : "bg-border hover:bg-primary/50"
            }`}
            aria-label={`View ${d.name}`}
          />
        ))}
      </div>
    </div>
  )
}
