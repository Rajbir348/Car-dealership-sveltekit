import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "https://car-dealership-management-api.onrender.com",
			},
		},
	},
});
