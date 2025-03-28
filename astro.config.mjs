// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    // Replace this with your domain
    // Make sure you change the URL in /public/robots.txt as well!
    site: "https://astro-demo.sampacker.com",

    vite: {
        plugins: [tailwindcss()],
    },
});
