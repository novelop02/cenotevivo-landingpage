import { useEffect, useState } from 'react'
import DownloadButton from './DownloadButton'

const LINKS = [
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#galeria', label: 'Galería' },
  { href: '#instalacion', label: 'Instalación' },
]

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative grid size-7 place-items-center rounded-full ring-2 ring-turquesa/35" aria-hidden="true">
        <span className="size-3.5 rounded-full bg-turquesa shadow-[0_0_14px_rgb(46_196_182/0.8)]" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">Cenote Vivo</span>
    </span>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-aguamarina/10 bg-abismo/80 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" aria-label="Cenote Vivo, ir al inicio">
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 text-sm text-niebla md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-espuma">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <DownloadButton size="sm" />
      </nav>
    </header>
  )
}
