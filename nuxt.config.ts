// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        'nuxt-auth-sanctum',
    ],
    runtimeConfig: {
        public: {
            sanctum: {
                baseUrl: 'http://localhost',
            },
        },
    },

    sanctum: {
        endpoints: {
            user: '/api/auth/user',
        },
    },
})
