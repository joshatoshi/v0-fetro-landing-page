"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Technology", href: "#technology" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [preOrderTooltip, setPreOrderTooltip] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image 
            src="/fetro-logo.svg" 
            alt="Fetro" 
            width={120} 
            height={71} 
            className="h-10 w-auto invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <div className="relative">
            <Button
              className="font-mono text-sm"
              onMouseEnter={() => setPreOrderTooltip(true)}
              onMouseLeave={() => setPreOrderTooltip(false)}
              onClick={() => {
                setPreOrderTooltip(true)
                setTimeout(() => setPreOrderTooltip(false), 1500)
              }}
            >
              Pre-Order
            </Button>
            {preOrderTooltip && (
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 font-mono text-xs text-primary-foreground">
                Coming soon
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <div className="relative">
                <Button
                  className="w-full font-mono text-sm"
                  onClick={() => {
                    setPreOrderTooltip(true)
                    setTimeout(() => setPreOrderTooltip(false), 1500)
                  }}
                >
                  Pre-Order
                </Button>
                {preOrderTooltip && (
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 font-mono text-xs text-primary-foreground z-10">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
