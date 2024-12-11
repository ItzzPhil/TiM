<template>
    <section>
        <div class="text-5 py-6">Wyjazd do Słupska w ramach koła naukowego 15 czerwca 2023r.</div>
        <div class="flex justify-center gap-4">
            <div class="w-120" v-for="photo in gallerySlupsk">
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
                img: require('assets/img/slupsk1.webp'),
            },
            {
                img: require('assets/img/slupsk2.webp'),
            },
            {
                img: require('assets/img/slupsk3.webp'),
            },
        ],
    }),
}
</script>

<style lang="scss" scoped></style>
