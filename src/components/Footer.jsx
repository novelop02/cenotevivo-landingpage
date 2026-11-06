import { BookOpen, Download } from 'lucide-react'
import { APK, CREDITOS, REPO_URL } from '../data'
import { GithubIcon } from './BrandIcons'
import { Logo } from './Nav'

// Estratos de roca caliza, como en la vista de corte de la app
function Estratos() {
  const capas = Array.from({ length: 6 }, (_, i) => i)
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-20 w-full sm:h-28">
      {capas.map((i) => (
        <path
          key={i}
          d={`M0 ${20 + i * 18} C 200 ${4 + i * 18}, 400 ${40 + i * 18}, 600 ${22 + i * 18} S 1000 ${2 + i * 18}, 1200 ${24 + i * 18} V 120 H 0 Z`}
          fill={i % 2 ? '#062630' : '#083039'}
          opacity={0.35 + i * 0.12}
        />
      ))}
    </svg>
  )
}

const ENLACES = [
  { href: REPO_URL, label: 'Repositorio en GitHub', icon: GithubIcon, externo: true },
  { href: `${REPO_URL}#readme`, label: 'Guía del proyecto', icon: BookOpen, externo: true },
]

export default function Footer() {
  return (
    <footer className="bg-abismo">
      <Estratos />
      <div className="bg-[#062630]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-niebla">
              Proyecto de {CREDITOS.materia} realizado por {CREDITOS.autor}. Hecho con Unity 6.6 y URP, modelo del cenote
              en Blender, y programado con ayuda de Claude.
            </p>
            <img
              src="/logos/universidad-marista-merida.png"
              alt={CREDITOS.universidad}
              width="1578"
              height="649"
              loading="lazy"
              className="mt-8 h-14 w-auto brightness-0 invert opacity-90"
            />
          </div>

          <div>
            <h2 className="font-display text-base font-semibold">Descarga</h2>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
              <dt className="text-niebla">Versión</dt>
              <dd>{APK.version}</dd>
              <dt className="text-niebla">Tamaño</dt>
              <dd>{APK.size}</dd>
              <dt className="text-niebla">Requiere</dt>
              <dd>{APK.minAndroid} o superior</dd>
            </dl>
            <a
              href={APK.href}
              download={APK.file}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aguamarina transition-colors hover:text-espuma"
            >
              <Download className="size-4" aria-hidden="true" />
              Descargar APK
            </a>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold">Enlaces</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              {ENLACES.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-niebla transition-colors hover:text-espuma"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-aguamarina/10">
          <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-niebla/80 sm:px-6">
            © 2026 {CREDITOS.autor}, {CREDITOS.universidad}. Cenote Vivo es un proyecto académico sin fines de lucro.
          </p>
        </div>
      </div>
    </footer>
  )
}
