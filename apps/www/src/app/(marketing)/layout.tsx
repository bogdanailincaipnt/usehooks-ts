import Link from 'next/link'

import { GitHub } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'

type MarketingLayoutProps = {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex space-x-4 justify-center align-middle">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <GitHub className="h-6 w-6 my-auto" />
              <span className="sr-only">GitHub</span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
