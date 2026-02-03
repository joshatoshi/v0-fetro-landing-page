export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm text-primary">OUR PHILOSOPHY</p>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">We Believe Technology Should Age Gracefully</span>
          </h2>
          
          <div className="mt-10 space-y-6 text-lg text-muted-foreground">
            <p className="text-pretty">
              The most beloved objects in our lives are often the oldest. A grandfather{"'"}s watch, 
              a vintage radio, a well-worn leather bag. These items carry stories and develop 
              character over time.
            </p>
            <p className="text-pretty">
              Meanwhile, our digital devices have become disposable—sleek but soulless, 
              designed for planned obsolescence and built with materials that will outlast 
              civilizations in landfills.
            </p>
            <p className="text-pretty">
              We{"'"}re building something different. Fetro devices are crafted from brass, 
              walnut, and materials that develop a patina—while housing technology 
              designed to remain relevant for decades.
            </p>
          </div>

          <div className="mt-12 border-t border-border pt-12">
            <blockquote className="relative">
              <p className="text-xl font-medium italic text-foreground">
                {'"'}The future of privacy shouldn{"'"}t look like the future. 
                It should feel like something you{"'"}d want to pass down.{'"'}
              </p>
              <footer className="mt-6 flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-mono text-sm text-primary">AK</span>
                </div>
                <div className="text-left">
                  <p className="font-sans text-sm font-medium text-foreground">Alex Kovalenko</p>
                  <p className="font-mono text-xs text-muted-foreground">Founder & CTO</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
