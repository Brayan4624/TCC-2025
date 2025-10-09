import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// substitua 'usuario' e 'nexus-app' pelo seu usuário e nome do repositório
export default defineConfig({
  base: '/TCC-2025/', 
  plugins: [react()],
})
