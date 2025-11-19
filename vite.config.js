import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/Portfolio-Website/', // 👈 IMPORTANT: Your GitHub repo name
    plugins: [react()],

});