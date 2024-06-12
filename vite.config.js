//*********************Funcionando******************* */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  base: 'https://benjumeacarlos981.github.com/gh-pages',
  server: {
    port: 3000
  },
  envFile: '.env.production', // Cargar el archivo .env.production para el entorno de producción
  });

//******************************************************* */
