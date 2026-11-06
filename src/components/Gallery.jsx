import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { CAPTURAS } from '../data'

export default function Gallery() {
  const [actual, setActual] = useState(null)
  const dialogo = useRef(null)
  const origen = useRef(null)

  const abrir = (i, ev) => {
    origen.current = ev.currentTarget
    setActual(i)
  }
  const cerrar = useCallback(() => dialogo.current?.close(), [])
  const mover = useCallback((d) => setActual((i) => (i + d + CAPTURAS.length) % CAPTURAS.length), [])

  useEffect(() => {
    const d = dialogo.current
    if (actual !== null && d && !d.open) d.showModal()
  }, [actual])

  const alCerrar = () => {
    setActual(null)
    origen.current?.focus()
  }

  const onKeyDown = (ev) => {
    if (ev.key === 'ArrowRight') mover(1)
    if (ev.key === 'ArrowLeft') mover(-1)
  }

  const c = actual !== null ? CAPTURAS[actual] : null

  return (
    <section id="galeria" aria-labelledby="galeria-titulo" className="bg-gradient-to-b from-abismo via-profundo/60 to-abismo py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="galeria-titulo" className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
            Así se ve en tu teléfono
          </h2>
          <p className="max-w-sm text-niebla">Capturas reales de la app. Toca una para verla completa.</p>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {CAPTURAS.map((cap, i) => (
            <li key={cap.src} className={i === 0 ? 'sm:col-span-2 lg:col-span-3' : ''}>
              <button
                type="button"
                onClick={(ev) => abrir(i, ev)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-aguamarina/10 bg-profundo text-left"
                aria-label={`Ver captura: ${cap.titulo}`}
              >
                <img
                  src={cap.src}
                  alt={`${cap.titulo}. ${cap.texto}`}
                  loading="lazy"
                  width="1280"
                  height="720"
                  className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                    i === 0 ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'
                  }`}
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-abismo/90 via-abismo/40 to-transparent p-4 pt-12">
                  <span>
                    <span className="block font-display font-semibold sm:text-lg">{cap.titulo}</span>
                    {i === 0 && <span className="mt-1 hidden text-sm text-niebla sm:block">{cap.texto}</span>}
                  </span>
                  <Expand
                    aria-hidden="true"
                    className="size-4 shrink-0 text-aguamarina opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Visor a pantalla completa: <dialog> nativo gestiona foco y Escape */}
      <dialog
        ref={dialogo}
        onClose={alCerrar}
        onKeyDown={onKeyDown}
        onClick={(ev) => ev.target === dialogo.current && cerrar()}
        aria-label={c ? c.titulo : 'Visor de capturas'}
        className="visor m-auto w-[min(92vw,1100px)] max-w-none bg-transparent p-0 text-espuma"
      >
        {c && (
          <figure>
            <img
              src={c.src}
              alt={`${c.titulo}. ${c.texto}`}
              width="1280"
              height="720"
              className="aspect-video w-full rounded-2xl object-cover shadow-2xl ring-1 ring-aguamarina/20"
            />
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <span>
                <span className="block font-display text-lg font-semibold">{c.titulo}</span>
                <span className="text-sm text-niebla">{c.texto}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="mr-2 text-sm tabular-nums text-niebla">
                  {actual + 1} de {CAPTURAS.length}
                </span>
                <button type="button" onClick={() => mover(-1)} aria-label="Captura anterior" className="grid size-10 place-items-center rounded-full bg-cenote transition hover:bg-turquesa hover:text-abismo">
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => mover(1)} aria-label="Captura siguiente" className="grid size-10 place-items-center rounded-full bg-cenote transition hover:bg-turquesa hover:text-abismo">
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={cerrar} aria-label="Cerrar visor" autoFocus className="grid size-10 place-items-center rounded-full bg-cenote transition hover:bg-espuma hover:text-abismo">
                  <X className="size-5" aria-hidden="true" />
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  )
}
