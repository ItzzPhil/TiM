<template>
    <section>
        <div class="text-5 py-6">Wyjazd do Słupska w ramach koła naukowego 15 czerwca 2023r.</div>
        <div class="flex justify-center gap-4">
            <div class="w-120 h-90" v-for="photo in gallerySlupsk">
                <Photo :src_dsk="photo.img" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        gallerySlupsk: [
            {
                img: require('assets/img/gallery/slupsk1.webp'),
            },
            {
                img: require('assets/img/gallery/slupsk2.webp'),
            },
            {
                img: require('assets/img/gallery/slupsk3.webp'),
            },
        ],
    }),
}
</script>

<style lang="scss" scoped></style>
