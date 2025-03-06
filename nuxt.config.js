export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    server: {
        host: '0.0.0.0', // default: localhost -
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Koło Naukowe Turystyki i Marketingu',
        description:
            'Jesteśmy dynamiczną grupą studentów zafascynowanych światem turystyki, marketingu i nowoczesnych rozwiązań biznesowych. Nasze koło to przestrzeń dla kreatywnych pomysłów, praktycznych projektów i współpracy z profesjonalistami z branży. Organizujemy warsztaty, konferencje i wyjazdy studyjne, które pozwalają zdobywać wiedzę oraz doświadczenie w praktycznym działaniu.',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Jesteśmy dynamiczną społecznością studencką zafascynowaną ekonomią oraz nowoczesnymi usługami. Nasze koło skupia się na rozwoju wiedzy poprzez badania, praktykę oraz interaktywne seminaria. Tworzymy inspirujące projekty badawcze i integrujące wyjazdy, zapewniając platformę do eksploracji najnowszych trendów w tych dziedzinach. ',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap',
                defer: true,
                async: true,
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['./assets/scss/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/global.js', '~/plugins/100vhFix.js'],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/svg',
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
    ],

    tailwindcss: {
        cssPath: '~/assets/scss/vendors/tailwind.css',
        configPath: 'tailwind.config.js',
    },

    // Modules: https://go.nuxtjs.dev/config-modules

    modules: [
        // '@nuxtjs/gtm',
        [
            'nuxt-lazy-load',
            {
                // These are the default values
                images: true,
                videos: false,
                audios: true,
                iframes: true,
                native: false,
                polyfill: true,
                directiveOnly: false,

                // Default image must be in the static folder
                // defaultImage: '/default-image.svg',

                // To remove class set value to false
                loadingClass: 'isLoading',
                loadedClass: 'isLoaded',
                appendClass: 'lazyLoad',

                observerConfig: {
                    // See IntersectionObserver documentation
                },
            },
        ],
    ],
    gtm: {
        // id: 'gtm-id-goes-here',
    },

    /* https://github.com/nuxt-community/gtm-module*/

    axios: {
        responseType: 'json',
        progress: true,
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    loading: '~/components/layout/Loader.vue',
    router: {
        trailingSlash: true,
    },

    styleResources: {
        scss: ['./assets/scss/abstracts.scss'],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
