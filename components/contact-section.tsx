"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, MapPin, Twitter } from "lucide-react"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

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

          {submitted ? (
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-sans font-medium text-foreground">You{"'"}re on the list!</p>
                  <p className="font-mono text-sm text-muted-foreground">We{"'"}ll be in touch soon.</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 font-mono bg-card border-border placeholder:text-muted-foreground focus-visible:ring-primary"
                  required
                />
                <Button type="submit" className="font-mono">
                  Join
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}

          {/* Contact Links */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <a 
              href="mailto:hello@fetro.com" 
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="font-mono text-sm">hello@fetro.com</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="font-mono text-sm">@fetro_devices</span>
            </a>
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
