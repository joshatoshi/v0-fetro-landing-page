import { User } from "lucide-react"

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
  return (
    <section id="team" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Placeholder Avatar */}
              <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 border-border bg-muted transition-colors group-hover:border-primary/30">
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
