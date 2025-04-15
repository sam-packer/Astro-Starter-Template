// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    // Replace this with your domain
    // Make sure you change the URL in the /public/robots.txt file as well!
    site: "https://astro-starter.sampacker.com",

    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});
