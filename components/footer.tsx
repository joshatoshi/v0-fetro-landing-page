import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  products: [
    { name: "DSLR1", href: "https://cryptoc.am" },
    { name: "MIDI Retrofits", href: "#products" },
    { name: "1-of-1 Consulting", href: "#products" },
  ],
  company: [
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Warranty", href: "#" },
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
              © 2026 Future Retro Devices. All rights reserved.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.map((link) => (
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
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
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
            <h3 className="mt-8 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
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
        </div>

        
      </div>
    </footer>
  )
}
