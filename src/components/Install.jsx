import { Download, PackageCheck, ShieldAlert } from 'lucide-react'
import { APK } from '../data'

const PASOS = [
  {
    icon: Download,
    titulo: 'Descarga el APK',
    texto: (
      <>
        Desde tu teléfono, toca{' '}
        <a href={APK.href} download={APK.file} className="font-semibold text-aguamarina underline decoration-aguamarina/40 underline-offset-4 hover:decoration-aguamarina">
          Descargar APK
        </a>{' '}
        ({APK.size}). Si lo bajas en tu computadora, pásalo al teléfono por cable o por la nube.
      </>
    ),
  },
  {
    icon: ShieldAlert,
    titulo: 'Permite orígenes desconocidos',
    texto: (
      <>
        Al abrir el archivo, Android te pedirá permiso. Ve a <strong className="font-semibold text-espuma">Ajustes</strong> y
        activa <strong className="font-semibold text-espuma">Permitir desde esta fuente</strong> para tu navegador o tu
        gestor de archivos.
      </>
    ),
  },
  {
    icon: PackageCheck,
    titulo: 'Instala y explora',
    texto: (
      <>
        Vuelve al archivo y toca <strong className="font-semibold text-espuma">Instalar</strong>. Si Play Protect muestra
        un aviso, elige <strong className="font-semibold text-espuma">Instalar de todas formas</strong>. Abre Cenote Vivo
        y gira el teléfono en horizontal.
      </>
    ),
  },
]

export default function Install() {
  return (
    <section id="instalacion" aria-labelledby="instalacion-titulo" className="bg-abismo py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="instalacion-titulo" className="max-w-2xl text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
          Instálala en tres pasos
        </h2>
        <p className="mt-4 max-w-xl text-lg text-niebla">
          La app no está en Google Play, así que se instala directamente desde el archivo APK.
        </p>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Línea que une los pasos, como el nivel del agua */}
          <span aria-hidden="true" className="absolute top-6 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-turquesa/60 via-aguamarina/30 to-selva/60 md:block" />
          {PASOS.map(({ icon: Icon, titulo, texto }, i) => (
            <li key={titulo} className="relative grid grid-cols-[auto_1fr] gap-x-5 md:grid-cols-1 md:text-center">
              <span className="relative z-10 grid size-12 place-items-center rounded-full border border-aguamarina/30 bg-profundo font-display text-lg font-bold text-aguamarina shadow-[0_0_24px_rgb(46_196_182/0.25)] md:mx-auto">
                {i + 1}
              </span>
              <div className="md:mt-6">
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold md:justify-center">
                  <Icon className="size-5 text-turquesa" aria-hidden="true" />
                  {titulo}
                </h3>
                <p className="mt-2 leading-relaxed text-niebla md:mx-auto md:max-w-xs">{texto}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-14 rounded-2xl border border-aguamarina/10 bg-profundo/50 px-5 py-4 text-sm leading-relaxed text-niebla md:text-center">
          Requiere {APK.minAndroid} o superior y un procesador de 64 bits (ARM64). Funciona sin conexión a internet.
        </p>
      </div>
    </section>
  )
}
