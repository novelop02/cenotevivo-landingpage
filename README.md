# Cenote Vivo, landing page

Página de presentación y descarga del APK de **Cenote Vivo**, la app 3D para Android sobre la contaminación del agua subterránea en los cenotes de Yucatán.
Proyecto de José Novelo para la materia Gráficos por Computadora, Universidad Marista de Mérida.

Stack: Vite + React 19, Tailwind CSS 4 y Lucide.

## Ejecutar

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # genera dist/ listo para producción
npm run preview   # sirve dist/ en http://localhost:4173
```

## Estructura

```
public/
├─ cenote-vivo-v0.1.0.apk     APK que descargan los botones
├─ capturas/*.webp            capturas de la app (del README del repo de Unity)
├─ logos/                     logo de la Universidad Marista de Mérida
└─ _headers                   tipo MIME del APK (Netlify / Cloudflare Pages)
src/
├─ data.js                    textos, capturas, créditos y datos del APK
└─ components/                Nav, Hero (simulador), About, Gallery, Install, Footer
```

## Publicar una nueva versión del APK

1. Copia el APK a `public/` con el nombre `cenote-vivo-vX.Y.Z.apk` y borra el anterior.
2. Cambia `APK_FILE` y `APK_VERSION` en `vite.config.js`.

El tamaño que muestra la página se lee del archivo en cada build, no hay que escribirlo a mano.

> El APK pesa unos 39 MB. GitHub acepta archivos de hasta 100 MB, pero si el repositorio crece conviene usar Git LFS o publicar el APK como asset de un *release*.
