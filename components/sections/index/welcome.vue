<template>
    <section class="relative h-240 max-h-screen">
        <div class="h-full w-full">
            <Photo :src_dsk="require('/assets/img/welcome-plane.jpg')" />
        </div>
        <!-- <img :src="require('/assets/img/megaphone.png')" alt="" class="absolute bottom-20 left-20 h-50" /> -->
        <div class="absolute top-0 right-15 w-full h-full max-w-[1920px] pt-50 flex justify-end items-start">
            <div class="w-210 p-10 flex gap-16">
                <img :src="require('/assets/img/megaphone_peach.png')" alt="" class="h-30 -rotate-12" />
                <div class="">
                    <div class="text-7">
                        Chcesz rozwijać swoje pasje, poznawać ciekawych ludzi i przygotować się na wyzwania rynku pracy?
                        Dołącz do nas i twórz z nami inspirującą społeczność!
                    </div>
                    <div class="text-6 pt-4">Razem odkrywajmy świat turystyki i marketingu! 🚀</div>
                    <!-- <div class="text-6 pt-4">Z nami rozwiniesz skrzydła!</div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
