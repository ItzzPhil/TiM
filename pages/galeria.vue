<template>
    <main class="h-screen w-screen">
        <div class="pt-40 pb-12 font-bold text-center text-9">
            <div class="">Galeria zdjęć</div>
        </div>
        <div class="grid text-center justify-center gap-12">
            <div class="grid gap-6">
                <div class="text-5">Wyjazd do Słupska w ramach koła naukowego 15 czerwca 2023r.</div>
                <div class="flex">
                    <div class="w-120" v-for="photo in gallerySlupsk">
                        <Photo :src_dsk="photo.img" />
                    </div>
                </div>
            </div>
            <div class="grid gap-6">
                <div class="text-5">Dni turystyki w Gdańsku</div>
                <div class="flex">
                    <div class="w-120 h-90" v-for="photo in galleryGdansk">
                        <Photo :src_dsk="photo.img" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data: () => ({
        gallerySlupsk: [
            {
                img: require('assets/img/slupsk1.webp'),
            },
            {
                img: require('assets/img/slupsk2.webp'),
            },
            {
                img: require('assets/img/slupsk3.webp'),
            },
        ],
        galleryGdansk: [
            {
                img: require('assets/img/gdansk1.webp'),
            },
            {
                img: require('assets/img/gdansk2.webp'),
            },
            {
                img: require('assets/img/gdansk3.webp'),
            },
        ],
    }),
}
</script>

<style lang="scss" scoped></style>
