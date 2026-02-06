"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

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
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 font-mono text-xs text-primary-foreground z-10">
          Coming soon
        </span>
      )}
    </button>
  )
}

const footerLinks = {
  project: [
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy", comingSoon: true },
    { name: "Terms", comingSoon: true },
    { name: "Warranty", comingSoon: true },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/fetro-logo.svg" 
                alt="Fetro" 
                width={120} 
                height={71} 
                className="h-10 w-auto invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Future Retro Devices. Where timeless design meets 
              modern technology.
            </p>
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              &copy; 2026 Future Retro Devices. All rights reserved.
            </p>
          </div>

          {/* Links Columns - Project and Legal inline */}
          <div className="lg:col-span-3 flex flex-wrap gap-16">
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                Project
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.project.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <ComingSoonLink className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.name}
                    </ComingSoonLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
