<template>
    <section class="flex justify-between content-center py-6 px-12 fixed w-full left-0 top-0 z-50" :class="{ _bg: bg }">
        <div class="flex gap-5">
            <a href="/">
                <div class="h-18"><Photo :src_dsk="require('assets/img/logo.png')" /></div>

                <div class="text-13 font-bold _title">Koło Naukowe Turystyki i Marketingu</div>
            </a>
        </div>
        <div class="flex gap-12 items-center text-8">
            <a href="/" class="_buttons">Strona Główna</a>
            <a href="/inicjatywy/" class="_buttons">Inicjatywy</a>
            <a href="/osiagniecia/" class="_buttons">Osiągnięcia</a>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        bg: false,
    }),
    mounted() {
        document.addEventListener('scroll', () => {
            let x = document.scrollingElement.scrollTop
            this.bg = x > 0.1 * window.innerHeight
        })
    },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.google.com/specimen/Anton');
// ._buttons {
//     padding: 3px;
//     background-color: white;
//     border: 3px solid;
//     border-top-color: #c9c9c9;
//     border-left-color: #c9c9c9;
//     border-bottom-color: #4b5563;
//     border-right-color: #4b5563;
//     transition: background-color 0.3s, border-color 0.3s;
//     border-radius: 0.375rem;
//     &:hover {
//         background-color: #e59240;
//         border-top-color: #4b5563;
//         border-left-color: #4b5563;
//         border-bottom-color: #c9c9c9;
//         border-right-color: #c9c9c9;
//     }
// }
section {
    background-color: transparent;
    box-shadow: 0 0 20px transparent;
    transition: background-color 0.3s, box-shadow 0.3s;
    &._bg {
        background-color: #e9d2b9;
        box-shadow: 0 0 20px #0002;
    }
}
._title {
    font-size: 3.25rem;
    font-weight: 700;
    font-family: 'Anton', sans-serif;
}
</style>
