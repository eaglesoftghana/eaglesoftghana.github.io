// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devServer: {
		port: 1200,
		host: "localhost",
	},
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	ssr: true,
	css: ["~/assets/app.css"],
	app: {
    baseURL: '/',
		head: {
			title: "eaglesoft ghana".toUpperCase(),
			htmlAttrs: {
				lang: "en-GH",
				// class: "theme-light",
			},
			link: [
				{
					rel: "icon",
					href: "/icon.png",
					sizes: "any",
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.png",
				},
				{
					rel: "manifest",
					href: "/manifest.json",
				},
			],
		},
	},
});
