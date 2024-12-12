<template>
    <section class="">
        <div class="text-7 py-6 text-center">Wyjazd do Słupska w ramach koła naukowego 15 czerwca 2023r.</div>
        <div class="flex justify-center gap-4">
            <div class="w-120 h-90" v-for="photo in gallerySlupsk">
                <Photo :src_dsk="photo.img" />
            </div>
        </div>
        <div class="text-5 py-6 text-center">
            Certyfikaty przyznane Patrycji Krupie, Paulinie Mikule oraz Aleksandrowi Sapko za wygłoszone referaty pt.
            "Zmiany preferencji zakwaterowania podczas krajowych wyjazdów Polaków okresie przed i po pandemii Covid19"
        </div>
        <div class="flex justify-center gap-4">
            <div class="w-120 h-90" v-for="photo in gallerySlupskCertificates">
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
                img: require('assets/img/gallery/slupskPatrycja.jpg'),
            },
            {
                img: require('assets/img/gallery/slupskPaulina.jpg'),
            },
            {
                img: require('assets/img/gallery/slupskAleks.jpg'),
            },
        ],
        gallerySlupskCertificates: [
            {
                img: require('assets/img/gallery/slupskCertyfikatPatrycja.jpg'),
            },
            {
                img: require('assets/img/gallery/slupskCertyfikatPaulina.jpg'),
            },
            {
                img: require('assets/img/gallery/slupskCertyfikatAleks.jpg'),
            },
        ],
    }),
}
</script>

<style lang="scss" scoped></style>
