import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min'

gsap.registerPlugin(ScrollTrigger)

export default (context, inject) => {
    const img = (img_obj, desktop = true, size = null) => {
        if (!img_obj || img_obj.image === undefined || img_obj.imagemob === undefined) {
            return ''
        }
        let _img = desktop || !img_obj.imagemob ? img_obj.image : img_obj.imagemob
        if (_img.sizes && size) {
            return _img.sizes[size] ? _img.sizes[size] : ''
        }
        return _img.url ? _img.url : ''
    }
    inject('img', img)
    context.$img = img

    const fadeInit = () => {
        gsap.utils.toArray('[fade]').forEach((elem) => {
            const dirs = {
                up: { y: `${50 / 16}rem` },
                down: { y: `${-50 / 16}rem` },
                left: { x: `${50 / 16}rem` },
                right: { x: `${-50 / 16}rem` },
            }

            let _dir = elem.getAttribute('fade')
            let _delay = elem.getAttribute('fadeDelay')
            let _fire_soon = elem.getAttribute('fadeFireSoon')

            let _from = _dir in dirs ? dirs[_dir] : {}
            _from = Object.assign(_from, { opacity: 0 })
            gsap.fromTo(elem, _from, {
                x: 0,
                y: 0,
                opacity: 1,

                duration: 0.7,
                delay: _delay ? _delay : 0,
                paused: true,
                ease: 'sine.out',

                scrollTrigger: {
                    trigger: elem,
                    start: _fire_soon ? '-=100 bottom' : '-=100 80%',
                    end: _fire_soon ? '-=100 bottom' : '-=100 80%',
                },
            })
        })
        ScrollTrigger.refresh()
    }
    inject('fadeInit', fadeInit)
    context.$fadeInit = fadeInit

    const getRootVar = (varName) => {
        return getComputedStyle(document.documentElement).getPropertyValue(varName)
    }
    inject('getRootVar', getRootVar)
    context.$getRootVar = getRootVar

    const toggleBodyScroll = (force = null) => {
        if (force === null) {
            document.documentElement.classList.toggle('overflow-hidden')
            document.body.classList.toggle('overflow-hidden')
        }
        if (force === true) {
            document.documentElement.classList.add('overflow-hidden')
            document.body.classList.add('overflow-hidden')
        }
        if (force === false) {
            document.documentElement.classList.remove('overflow-hidden')
            document.body.classList.remove('overflow-hidden')
        }
    }
    inject('toggleBodyScroll', toggleBodyScroll)
    context.$toggleBodyScroll = toggleBodyScroll
}
