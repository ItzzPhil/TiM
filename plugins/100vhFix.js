import extend from '~/utils/extend-vue-app'

export default async function ({ app }) {
    extend(app, {
        mounted() {
            function setStyleVariable() {
                let vh = window.innerHeight * 0.01
                document.documentElement.style.setProperty('--vh', `${vh}px`)
            }

            setStyleVariable()
            window.addEventListener('resize', setStyleVariable)
        },
        beforeDestroy() {
            window.removeEventListener('resize')
        },
    })
}
