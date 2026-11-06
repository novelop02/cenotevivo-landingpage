/* global __APK__ */
// Contenido de la landing. Los textos vienen de la propia app (TextosCenote.cs).

export const APK = {
  href: `/${__APK__.file}`,
  file: __APK__.file,
  version: __APK__.version,
  size: `${(__APK__.bytes / 1_000_000).toFixed(1)} MB`,
  minAndroid: 'Android 8.0',
}

export const REPO_URL = 'https://github.com/novelop02/cenote-vivo'

export const CREDITOS = {
  autor: 'José Novelo',
  materia: 'Gráficos por Computadora',
  universidad: 'Universidad Marista de Mérida',
}

export const FRASES = [
  'Lo que tiras en la superficie puede llegar al cenote en horas, no en años.',
  'El suelo calizo es como una esponja: deja pasar el agua… y también la basura.',
  'No hay ríos en la superficie: los cenotes son las ventanas a nuestro río subterráneo.',
]

export const CAPTURAS = [
  {
    src: '/capturas/04_noche_corte.webp',
    titulo: 'Corte del subsuelo',
    texto: 'Los estratos de roca caliza y el cenote vistos de lado, de noche.',
  },
  {
    src: '/capturas/02_dia_vista_general.webp',
    titulo: 'Vista general de día',
    texto: 'El cenote limpio rodeado de selva.',
  },
  {
    src: '/capturas/03_dia_nivel_agua.webp',
    titulo: 'Nivel del agua',
    texto: 'La transparencia y el color del agua limpia.',
  },
  {
    src: '/capturas/05_noche_vista_general.webp',
    titulo: 'Vista general de noche',
    texto: 'Faroles dentro del cenote y luciérnagas en la selva.',
  },
  {
    src: '/capturas/06_contaminado_vista_general.webp',
    titulo: 'Cenote contaminado',
    texto: 'Agua turbia, basura flotante y vegetación marchita.',
  },
  {
    src: '/capturas/07_contaminado_nivel_agua_noche.webp',
    titulo: 'Agua contaminada de noche',
    texto: 'Sedimento suspendido visto desde el nivel del agua.',
  },
  {
    src: '/capturas/01_menu_inicio.webp',
    titulo: 'Menú de inicio',
    texto: 'Frases de impacto y acceso al cenote.',
  },
]
