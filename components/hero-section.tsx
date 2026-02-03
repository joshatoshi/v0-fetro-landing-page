import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeroAnimation } from "./hero-animation"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px),
                           linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-xs text-primary">
                Handbuilt Hybrid Devices
              </span>
            </div>

            <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">
                The Future Looks Better{" "}
                <span className="text-primary">In Retro</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty font-sans text-lg leading-relaxed text-muted-foreground">
              Fetro crafts hybrid devices that merge timeless analog aesthetics with modern technologies.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="group font-mono">
                <a href="#products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono bg-transparent">
                <a href="#philosophy">Our Story</a>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div>
                <p className="font-mono text-3xl font-bold text-primary">100%</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">Handcrafted</p>
              </div>
              <div>
                <p className="font-mono text-3xl font-bold text-primary">3</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">Product Lines</p>
              </div>
              <div>
                <p className="font-mono text-3xl font-bold text-primary">2026</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">Est.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-lg">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
