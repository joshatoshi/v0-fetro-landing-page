"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Camera, Music, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    icon: Camera,
    name: "DSLR1",
    tagline: "Decentralised Secure Ledger Recorder",
    description: "A vintage camera-inspired device that proves and verifies image and video provenance in the age of AI. Cryptographic authenticity for every frame.",
    specs: ["Image provenance verification", "Vintage camera aesthetic", "Blockchain attestation"],
    status: "In Development",
    link: "https://cryptoc.am",
    external: true,
    images: [
      "/images/1a.jpeg",
    ],
  },
  {
    icon: Music,
    name: "MIDI Retrofits",
    tagline: "Analog Meets Digital",
    description: "Adding modern MIDI capabilities to non-MIDI musical devices. Transform vintage guitars, pedals, and instruments with seamless digital connectivity.",
    specs: ["Guitar MIDI integration", "Pedal retrofitting", "Vintage instrument upgrades"],
    status: "Custom Orders",
    link: "#contact",
    external: false,
    images: [
      "/images/2a1.jpeg",
      "/images/2a3.jpeg",
      "/images/2b1.jpeg",
    ],
  },
  {
    icon: Wrench,
    name: "One Shot Consulting",
    tagline: "Bespoke Build Services",
    description: "Custom R&D and fabrication consulting for unique projects. From concept to completion, we bring together hardware and software expertise.",
    specs: ["Software development", "CAD, 3D modeling, Woodwork & enclosures", "Electronics & Hardware, PCB design & assembly"],
    status: "Available",
    link: "#contact",
    external: false,
    images: [
      "/images/3a.jpeg",
      "/images/3b.jpeg",
      "/images/3c.jpeg",
      "/images/3d.jpeg",
    ],
  },
]

function ProductCard({ product }: { product: typeof products[0] }) {
  const [isCardHovered, setIsCardHovered] = useState(false)
  const [isLearnMoreHovered, setIsLearnMoreHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const showImages = isCardHovered && product.images.length > 0

  useEffect(() => {
    if (showImages) {
      setCurrentImageIndex(0)
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
      }, 1500)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      setCurrentImageIndex(0)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [showImages, product.images.length])

  return (
    <Card 
      className="group relative overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => {
        setIsCardHovered(false)
        setIsLearnMoreHovered(false)
      }}
    >
      {/* Hover Image Overlay */}
      {showImages && (
        <div className="absolute inset-0 bottom-16 z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${product.name} showcase`}
            className={`h-full w-full object-cover transition-all duration-300 ${
              isLearnMoreHovered ? "" : "grayscale"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
          <product.icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="font-sans text-xl text-foreground">{product.name}</CardTitle>
            <CardDescription className="font-mono text-xs text-primary">
              {product.tagline}
            </CardDescription>
          </div>
          <span className="rounded-full border border-border bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            {product.status}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{product.description}</p>
        
        <ul className="space-y-2">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
              {spec}
            </li>
          ))}
        </ul>

        {/* Learn More button - always at bottom and clickable */}
        <div 
          className="relative z-20"
          onMouseEnter={() => setIsLearnMoreHovered(true)}
          onMouseLeave={() => setIsLearnMoreHovered(false)}
        >
          {product.external ? (
            <Link href={product.link} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="mt-4 w-full justify-between font-mono text-sm">
                Learn More
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href={product.link}>
              <Button variant="ghost" className="mt-4 w-full justify-between font-mono text-sm">
                Learn More
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-sm text-primary">PRODUCTS & SERVICES</p>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Handbuilt Devices for the Modern Era</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Each Fetro creation is handcrafted with care, combining curious experimentation 
            and attention to detail with cutting-edge technology.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
