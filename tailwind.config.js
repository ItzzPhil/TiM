module.exports = {
    mode: 'jit',
    purge: {
        options: {
            // Whitelisting some classes to avoid purge
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                black: '#211b19',
                fullBlack: '#000',
                primary: '#888',
            },
            fontWeight: () => {
                let ret = {}
                for (let i = 100; i <= 900; i += 100) {
                    ret[i] = `${i}`
                }
                return ret
            },
        },
        spacing: () => {
            let ret = {}
            for (let i = 0; i <= 1000; i += 4) {
                ret[i / 4] = `${i / 16}rem`
            }
            for (let i = 1008; i <= 2000; i += 16) {
                ret[i / 4] = `${i / 16}rem`
            }
            return ret
        },
        fontSize: () => {
            let ret = {}
            for (let i = 0; i <= 132; i += 2) {
                ret[i / 4] = `${i / 16}rem`
            }
            return ret
        },
        lineHeight: () => {
            let ret = {}
            for (let i = 10; i <= 20; i++) {
                ret[i] = `${i / 10}`
            }
            return ret
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
