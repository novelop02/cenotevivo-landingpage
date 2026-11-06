import { APK } from '../data'
import { AndroidIcon } from './BrandIcons'

// Botón que descarga el APK directamente (atributo download, mismo origen).
// size="lg" para el hero; size="sm" para la barra de navegación.
export default function DownloadButton({ size = 'lg', className = '' }) {
  const label = `Descargar APK de Cenote Vivo, versión ${APK.version}, ${APK.size}`

  if (size === 'sm') {
    return (
      <a
        href={APK.href}
        download={APK.file}
        aria-label={label}
        className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-turquesa px-4 py-2 text-sm font-semibold text-abismo transition hover:bg-aguamarina active:scale-[0.97] ${className}`}
      >
        <AndroidIcon className="size-4" />
        <span>Descargar APK</span>
      </a>
    )
  }

  return (
    <a
      href={APK.href}
      download={APK.file}
      aria-label={label}
      className={`group relative inline-flex shrink-0 items-center gap-4 whitespace-nowrap rounded-2xl bg-turquesa py-3.5 pr-6 pl-4 text-abismo shadow-[0_0_0_1px_rgb(142_234_219/0.4),0_18px_50px_-12px_rgb(46_196_182/0.55)] transition duration-200 hover:-translate-y-0.5 hover:bg-aguamarina hover:shadow-[0_0_0_1px_rgb(142_234_219/0.7),0_22px_60px_-10px_rgb(142_234_219/0.6)] active:translate-y-0 ${className}`}
    >
      <span className="grid size-11 place-items-center rounded-xl bg-abismo text-turquesa transition group-hover:text-aguamarina">
        <AndroidIcon className="size-6" />
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className="font-display text-lg font-bold">Descargar APK</span>
        <span className="text-sm font-medium text-abismo/75">
          Versión {APK.version}, {APK.size}
        </span>
      </span>
    </a>
  )
}
