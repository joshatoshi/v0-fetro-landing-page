export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm text-primary">OUR STORY</p>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">We Believe Technology Should Age Gracefully</span>
          </h2>
          
          <div className="mt-10 space-y-6 text-lg text-muted-foreground">
            <p className="text-pretty">
              The most beloved objects in our lives are often the oldest. A grandfather{"'"}s watch, 
              a vintage hifi, a well-worn leather bag. These items carry stories and develop 
              character over time.
            </p>
            <p className="text-pretty">
              Meanwhile, our digital devices have become disposable, sleek but soulless, 
              designed for planned obsolescence and built with materials that will outlast 
              civilizations in landfills.
            </p>
            <p className="text-pretty">
              We{"'"}re building things different. Fetro devices are inspired by the era where 
              materials developed a patina while housing technology designed to integrate 
              to the modern digital world of AI, blockchains, and accelerated hardware.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
