import { statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// APK publicado en /public. El tamaño se lee del archivo real en cada
// arranque o build, así la página nunca muestra un número desactualizado.
const APK_FILE = 'cenote-vivo-v0.1.0.apk'
const APK_VERSION = '0.1.0'
const apkPath = fileURLToPath(new URL(`./public/${APK_FILE}`, import.meta.url))
const apkBytes = statSync(apkPath).size

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __APK__: JSON.stringify({ file: APK_FILE, version: APK_VERSION, bytes: apkBytes }),
  },
})
