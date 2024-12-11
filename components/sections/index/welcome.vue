<template>
    <section class="relative h-240 max-h-screen">
        <div class="h-full w-full">
            <Photo :src_dsk="require('/assets/img/welcome-plane.jpg')" />
        </div>
        <!-- <img :src="require('/assets/img/megaphone.png')" alt="" class="absolute bottom-20 left-20 h-50" /> -->
        <div
            class="
                absolute
                top-0
                left-1/2
                w-full
                h-full
                max-w-[1920px]
                -translate-x-1/2
                pt-50
                flex
                justify-end
                items-start
            "
        >
            <div class="w-160 p-10 flex justify-between">
                <div class="">
                    <div class="text-9">Zapraszamy do Koła <br />Turystyki i Marketingu!!!</div>
                    <div class="text-6 pt-4">Z nami rozwiniesz skrzydła!</div>
                </div>
                <img :src="require('/assets/img/megaphone_peach.png')" alt="" class="h-30 -rotate-12" />
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
