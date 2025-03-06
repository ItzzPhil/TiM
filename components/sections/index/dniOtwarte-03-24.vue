<template>
    <section class="">
        <div class="">
            <div class="text-7 py-6 text-center">Dni otwarte Uniwersytetu Morskiego 8 Marca 2023r.</div>
            <div class="text-5 pb-9 leading-14">
                Podczas Dni Otwartych Uniwersytetu Morskiego zorganizowanych 8 marca 2024r Koło Naukowe Turystyka i
                Marketing miało przyjemność zaprezentować swoją działalność. Stoisko koła cieszyło się dużym
                zainteresowaniem dzięki przygotowanemu quizowi z nagrodami. Uczestnicy mieli okazję sprawdzić swoją
                wiedzę na temat Uniwersytetu Morskiego oraz turystyki. Na zwycięzców quizu czekały drobne upominki
                sygnowane logo Uniwersytetu, co dodatkowo motywowało uczestników do zabawy. Wydarzenie okazało się
                doskonałą okazją do promocji uczelni, integracji z odwiedzającymi oraz nawiązania nowych kontaktów.
                Stoisko koła stało się miejscem ciekawych rozmów i inspiracji dla przyszłych studentów, którzy mogli
                poznać bliżej życie akademickie na Uniwersytecie Morskim. Dzięki zaangażowaniu członków koła oraz
                różnorodnym atrakcjom, Dni Otwarte na długo zapadną w pamięć zarówno organizatorom, jak i uczestnikom.
            </div>
            <div class="flex justify-center gap-4">
                <div class="w-120 h-90" v-for="photo in gallerySlupsk">
                    <Photo :src_dsk="photo.img" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        gallerySlupsk: [
            {
                img: require('assets/img/gallery/dniOtwarte_03-24_1.jpg'),
            },
            {
                img: require('assets/img/gallery/dniOtwarte_03-24_2.jpg'),
            },
            {
                img: require('assets/img/gallery/dniOtwarte_03-24_3.jpg'),
            },
            {
                img: require('assets/img/gallery/dniOtwarte_03-24_4.jpg'),
            },
            {
                img: require('assets/img/gallery/dniOtwarte_03-24_5.jpg'),
            },
        ],
    }),
}
</script>

<style lang="scss" scoped>
li {
    padding-left: 1rem;
}
</style>
