<template>
    <section class="flex justify-between content-center py-8 px-8 bg-gray-900 text-white text-6">
        <div class="flex gap-5">
            <a href="https://umg.edu.pl/" class="flex flex-col gap-3 content-center p-4 _buttons">
                <img
                    src="https://umg.edu.pl/sites/default/files/zalaczniki/umg-inw.png"
                    class="h-[12rem] object-scale-down"
                    alt=""
                />
                <div class="text-center">
                    Uniwersytet Morski<br />
                    w Gdyni
                </div>
            </a>
            <a href="https://wznj.umg.edu.pl/" class="flex flex-col gap-3 content-center p-4 _buttons">
                <img
                    src="https://umg.edu.pl/sites/default/files/zalaczniki/wznj-inw.png"
                    class="h-[12rem] object-scale-down"
                    alt=""
                />
                <div class="text-center">Wydział zarządzania<br />i nauk o jakości</div>
            </a>
        </div>

        <div class="">Kontakt</div>
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
