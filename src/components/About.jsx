import { BookOpenText, Camera, Droplets, Hand, Info, Leaf, Megaphone, MoonStar } from 'lucide-react'
import { CREDITOS, FRASES } from '../data'

const PILARES = [
  {
    icon: Leaf,
    titulo: 'Conservación',
    texto: 'Los cenotes son la única fuente de agua dulce de la región. Cuidarlos es cuidar el agua potable de mañana.',
  },
  {
    icon: Megaphone,
    titulo: 'Divulgación',
    texto: 'Explica con lenguaje sencillo por qué la roca caliza deja pasar la contaminación casi sin filtrarla.',
  },
  {
    icon: Hand,
    titulo: 'Experiencia interactiva',
    texto: 'En lugar de leer cifras, ves y controlas el daño: el cambio ocurre frente a ti, en tiempo real.',
  },
]

const VISTAS = ['General', 'Nivel del agua', 'Corte del subsuelo']

export default function About() {
  return (
    <section id="proyecto" aria-labelledby="proyecto-titulo" className="relative bg-abismo pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Propósito */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 id="proyecto-titulo" className="text-4xl leading-[1.05] font-bold tracking-[-0.02em] sm:text-5xl">
              Una ventana al río que corre bajo la selva
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-niebla">
              En la Península de Yucatán casi toda el agua que bebemos viene del subsuelo. No hay ríos en la superficie:
              la lluvia se filtra por la roca caliza y forma un sistema de ríos subterráneos. Fosas sépticas, basureros y
              agroquímicos llegan a ese acuífero en horas. Cenote Vivo hace visible ese proceso para que cualquiera
              pueda entenderlo.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-niebla/80">
              Proyecto de {CREDITOS.autor} para la materia {CREDITOS.materia} en la {CREDITOS.universidad}.
            </p>
          </div>
          <dl className="grid gap-8 self-end">
            {PILARES.map(({ icon: Icon, titulo, texto }) => (
              <div key={titulo} className="grid grid-cols-[auto_1fr] gap-x-4">
                <dt className="contents">
                  <Icon className="row-span-2 mt-0.5 size-6 text-aguamarina" aria-hidden="true" />
                  <span className="font-display text-xl font-semibold">{titulo}</span>
                </dt>
                <dd className="mt-1 leading-relaxed text-niebla">{texto}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Características */}
        <h3 className="sr-only">Características de la app</h3>
        <ul className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          {/* Función principal: ocupa más espacio */}
          <li className="group relative overflow-hidden rounded-3xl border border-aguamarina/10 bg-profundo sm:col-span-2 lg:row-span-2">
            <div className="relative aspect-[16/8] overflow-hidden">
              <img
                src="/capturas/07_contaminado_nivel_agua_noche.webp"
                alt="Agua del cenote turbia y con sedimento, vista desde el nivel del agua."
                loading="lazy"
                width="1280"
                height="720"
                className="size-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-profundo via-profundo/20 to-transparent" />
            </div>
            <div className="relative -mt-10 p-6 sm:p-8">
              <Droplets className="size-7 text-sedimento" aria-hidden="true" />
              <h4 className="mt-4 font-display text-2xl font-bold sm:text-3xl">Simulador de contaminación</h4>
              <p className="mt-3 max-w-lg leading-relaxed text-niebla">
                Un solo control lleva el cenote de limpio a muy contaminado. El agua pasa de turquesa a turbia, aparecen
                basura flotante y filtraciones en las paredes, y la vegetación se marchita.
              </p>
            </div>
          </li>

          <li className="rounded-3xl border border-aguamarina/10 bg-profundo/60 p-6 transition-colors hover:border-aguamarina/25 sm:p-7">
            <MoonStar className="size-6 text-luciernaga" aria-hidden="true" />
            <h4 className="mt-4 font-display text-xl font-semibold">Día y noche</h4>
            <p className="mt-2 leading-relaxed text-niebla">
              Al caer la noche se encienden faroles dentro del cenote y las luciérnagas salen a la selva.
            </p>
          </li>

          <li className="rounded-3xl border border-aguamarina/10 bg-profundo/60 p-6 transition-colors hover:border-aguamarina/25 sm:p-7">
            <Camera className="size-6 text-aguamarina" aria-hidden="true" />
            <h4 className="mt-4 font-display text-xl font-semibold">Tres vistas de cámara</h4>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {VISTAS.map((v) => (
                <li key={v} className="rounded-full bg-cenote/70 px-3 py-1 text-espuma/90">
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-3 leading-relaxed text-niebla">
              El corte muestra los estratos de roca y la pluma de contaminación que baja al acuífero.
            </p>
          </li>

          <li className="rounded-3xl border border-aguamarina/10 bg-profundo/60 p-6 transition-colors hover:border-aguamarina/25 sm:col-span-2 sm:p-7 lg:col-span-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex items-center gap-3 sm:w-64 sm:shrink-0 sm:flex-col sm:items-start">
                <Info className="size-6 text-selva" aria-hidden="true" />
                <h4 className="font-display text-xl font-semibold">Panel informativo</h4>
              </div>
              <p className="leading-relaxed text-niebla">
                Explica cómo se filtran los residuos, qué especies únicas viven en los cenotes, qué riesgos tiene el
                agua contaminada para la salud y qué puedes hacer tú para evitarlo.
              </p>
              <BookOpenText className="hidden size-10 shrink-0 text-cenote sm:block" aria-hidden="true" />
            </div>
          </li>
        </ul>

        {/* Frase de impacto tomada del menú de la app */}
        <figure className="mx-auto mt-28 max-w-4xl text-center">
          <blockquote className="font-display text-3xl leading-[1.15] font-semibold tracking-[-0.02em] text-balance text-aguamarina sm:text-5xl">
            “{FRASES[0]}”
          </blockquote>
          <figcaption className="mt-5 text-sm text-niebla">Una de las frases del menú de inicio de la app</figcaption>
        </figure>
      </div>
    </section>
  )
}
