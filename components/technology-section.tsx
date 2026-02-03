import { Cpu, Cloud, Network, Fingerprint } from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    title: "Modern Hardware",
    description: "Whether it's low power paper-like displays that are easy on the eyes, modern microcontrollers or secure environments - we hack with it all.",
    link: "Learn More",
  },
  {
    icon: Cloud,
    title: "Cloud, P2P, and AI Enhancements",
    description: "Intelligent features powered by on-device node operation, or contacting external servers enabling smart functionality while keeping your data private.",
    link: "Learn More",
  },
  {
    icon: Network,
    title: "Designed by Web3 Natives",
    description: "Native integration with decentralized networks. Self-custody, on-chain verification, and sovereign identity built-in.",
    link: "Learn More",
  },
  {
    icon: Fingerprint,
    title: "Zero-Knowledge enabled",
    description: "Prove statements without revealing underlying data. Authenticate, verify, and transact while maintaining complete privacy.",
    link: "Learn More",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="relative py-24 lg:py-32 bg-muted/30">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-sm text-primary">TECHNOLOGY</p>
          <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Combining Modern Tech with Nostalgic Device Concepts</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            We believe in blending the best of both worlds: AI, Web3, Cloud, Peer to peer networking, 
            zero-knowledge and quantum resistant technologies, all wrapped in designs that feel timeless and familiar.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {technologies.map((tech, index) => (
            <div 
              key={tech.title}
              className="group relative flex gap-6 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Number */}
              <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-muted transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                <tech.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-sans text-lg font-semibold text-foreground">{tech.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
                <p className="mt-3 font-mono text-xs text-primary">{tech.link} →</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
