"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, MapPin, Twitter } from "lucide-react"

function ComingSoonLink({ children, className }: { children: React.ReactNode; className?: string }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <button
      type="button"
      className={`relative ${className ?? ""}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => {
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 1500)
      }}
    >
      {children}
      {showTooltip && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 font-mono text-xs text-primary-foreground">
          Coming soon
        </span>
      )}
    </button>
  )
}

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [joinTooltip, setJoinTooltip] = useState(false)

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm text-primary">STAY UPDATED</p>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Join the Waiting List</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Be the first to know when new Fetro devices become available. 
            Subscribers get early access and exclusive pricing.
          </p>

          <div className="mt-8">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 font-mono bg-card border-border placeholder:text-muted-foreground focus-visible:ring-primary"
              />
              <div className="relative">
                <Button
                  type="button"
                  className="font-mono"
                  onMouseEnter={() => setJoinTooltip(true)}
                  onMouseLeave={() => setJoinTooltip(false)}
                  onClick={() => {
                    setJoinTooltip(true)
                    setTimeout(() => setJoinTooltip(false), 1500)
                  }}
                >
                  Join
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                {joinTooltip && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 font-mono text-xs text-primary-foreground">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Contact Links */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <ComingSoonLink className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="font-mono text-sm">hello@fetro.com</span>
            </ComingSoonLink>
            <ComingSoonLink className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="font-mono text-sm">@fetrodev</span>
            </ComingSoonLink>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span className="font-mono text-sm">Global, Planet Earth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
