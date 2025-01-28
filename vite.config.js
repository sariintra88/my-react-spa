import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-react-spa/', // แทนที่ด้วยชื่อ repository ของตัวเอง
})
