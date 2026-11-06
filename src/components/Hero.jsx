import { useEffect, useRef, useState } from 'react'
import { ShieldCheck, Smartphone } from 'lucide-react'
import { APK } from '../data'
import DownloadButton from './DownloadButton'

// Mismos estados que muestra el simulador dentro de la app
function estado(nivel) {
  if (nivel < 25) return { texto: 'Limpio', color: 'bg-turquesa' }
  if (nivel < 50) return { texto: 'En riesgo', color: 'bg-luciernaga' }
  if (nivel < 75) return { texto: 'Contaminado', color: 'bg-sedimento' }
  return { texto: 'Muy contaminado', color: 'bg-[#7a5530]' }
}

// Vista previa: un teléfono en horizontal con el simulador de contaminación.
// Las dos capturas usan la misma cámara, así que el fundido reproduce
// lo que ocurre en la app cuando mueves el control.
function SimuladorPreview() {
  const [nivel, setNivel] = useState(0)
  const tocado = useRef(false)

  // Una sola demostración al cargar: el agua se enturbia y vuelve a aclararse.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const anim = { raf: 0 }
    let inicio
    const ida = 2600
    const pausa = 900
    const vuelta = 2200
    const pico = 80
    const suave = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)
    const paso = (t) => {
      if (tocado.current) return
      inicio ??= t
      const e = t - inicio
      if (e < ida) setNivel(Math.round(pico * suave(e / ida)))
      else if (e < ida + pausa) setNivel(pico)
      else if (e < ida + pausa + vuelta) setNivel(Math.round(pico * (1 - suave((e - ida - pausa) / vuelta))))
      else return setNivel(0)
      anim.raf = requestAnimationFrame(paso)
    }
    const espera = setTimeout(() => (anim.raf = requestAnimationFrame(paso)), 1400)
    return () => {
      clearTimeout(espera)
      cancelAnimationFrame(anim.raf)
    }
  }, [])

  const e = estado(nivel)

  return (
    <figure className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Halo bioluminiscente detrás del dispositivo */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgb(46_196_182/0.28),transparent)] blur-2xl"
      />
      {/* Marco del teléfono en horizontal */}
      <div className="rounded-[1.75rem] bg-gradient-to-b from-[#1d4a53] to-[#0a252c] p-2 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.12)] ring-1 ring-aguamarina/15 sm:rounded-[2.25rem] sm:p-3">
        <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-abismo sm:rounded-[1.6rem]">
          <img
            src="/capturas/02_dia_vista_general.webp"
            alt="Cenote Vivo: vista general del cenote limpio con agua turquesa, rodeado de selva."
            width="1280"
            height="720"
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover"
          />
          <img
            src="/capturas/06_contaminado_vista_general.webp"
            alt=""
            aria-hidden="true"
            width="1280"
            height="720"
            style={{ opacity: nivel / 100 }}
            className="absolute inset-0 size-full object-cover"
          />
          {/* Cámara perforada */}
          <span aria-hidden="true" className="absolute top-1/2 left-2.5 size-2 -translate-y-1/2 rounded-full bg-black/70 ring-1 ring-white/10 sm:left-3.5" />
          {/* Indicador de estado, como en el HUD de la app */}
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-abismo/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm sm:bottom-4 sm:left-5 sm:text-sm">
            <span className={`size-2 rounded-full ${e.color} transition-colors`} />
            {e.texto}
            <span className="tabular-nums text-niebla">{nivel}%</span>
          </span>
        </div>
      </div>

      <figcaption className="mt-6 px-1 sm:px-4">
        <label htmlFor="nivel" className="flex items-baseline justify-between gap-4 text-sm">
          <span className="font-semibold text-espuma">Prueba el simulador</span>
          <span className="text-niebla">Nivel de contaminación</span>
        </label>
        <input
          id="nivel"
          type="range"
          min="0"
          max="100"
          value={nivel}
          aria-valuetext={`${nivel}%, ${e.texto}`}
          onPointerDown={() => (tocado.current = true)}
          onKeyDown={() => (tocado.current = true)}
          onChange={(ev) => {
            tocado.current = true
            setNivel(Number(ev.target.value))
          }}
          className="rango mt-3 w-full"
        />
      </figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="luz-cenote relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div aria-hidden="true" className="causticas absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-aguamarina/20 bg-cenote/40 px-3 py-1 text-sm text-aguamarina">
            <Smartphone className="size-4" aria-hidden="true" />
            App 3D para Android
          </p>
          <h1 className="mt-6 text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
            El agua que no ves, también se contamina
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-niebla">
            Cenote Vivo te lleva a un cenote de la Península de Yucatán, rodeado de selva. Contamina el agua tú mismo,
            baja al subsuelo y descubre cómo lo que tiramos en la superficie llega al agua que bebemos.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <DownloadButton />
            <p className="flex items-center gap-2 text-sm text-niebla">
              <ShieldCheck className="size-4 text-selva" aria-hidden="true" />
              {APK.minAndroid} o superior, gratis
            </p>
          </div>
        </div>
        <SimuladorPreview />
      </div>
    </section>
  )
}
