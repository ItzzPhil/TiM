<template>
    <section class="grid grid-cols-3 justify-between content-center py-8 px-8 bg-gray-900 text-white">
        <div class="flex gap-5">
            <a href="https://umg.edu.pl/" class="flex flex-col gap-3 content-center p-4 _buttons">
                <img :src="require('/assets/img/umg-inw.png')" class="h-32 object-scale-down" alt="" />
                <div class="text-center">
                    Uniwersytet Morski<br />
                    w Gdyni
                </div>
            </a>
            <a href="https://wznj.umg.edu.pl/" class="flex flex-col gap-3 content-center p-4 _buttons">
                <img :src="require('/assets/img/wznj-inw.png')" class="h-32 object-scale-down" alt="" />
                <div class="text-center">Wydział zarządzania<br />i nauk o jakości</div>
            </a>
        </div>

        <div class="grid gap-4 text-center content-center">
            <div class="text-8">Uniwersytet Morski w Gdyni</div>
            <div class="text-6">Wydział Zarządzania i Nauk o Jakości</div>
            <div class="">Ul. Morska 81/87</div>
            <div class="">81-225 Gdynia</div>
        </div>

        <div class="grid gap-4 text-center content-center">
            <div class="text-8">Kontakt</div>
            <div class="text-6">Konrad Hryniewicz</div>
            <a class="" href="mailto:email@example.com">email@example.com</a>
            <a class="" href="tel:123456789">123-456-789</a>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@keyframes border-anim {
    0% {
        border-color: white;
    }
    50% {
        border-color: #444444;
    }
    100% {
        border-color: white;
    }
}
._buttons {
    border: 3px solid transparent;
    border-radius: 0.375rem;
    &:hover {
        animation-name: border-anim;
        animation-duration: 1.75s;
        animation-iteration-count: infinite;
    }
}
</style>
