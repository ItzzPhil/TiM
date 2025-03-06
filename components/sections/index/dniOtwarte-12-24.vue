    <template>
        <section class="">
            <div class="">
                <div class="text-7 py-6 text-center">Dni otwarte Uniwersytetu Morskiego 13 Grudnia 2023r.</div>
                <div class="text-5 pb-9">
                    <div class="">
                        W dniu 13 grudnia 2024 roku odbyły się Dni Otwarte Uniwersytetu Morskiego w Gdyni, podczas
                        których
                        swoje stanowisko zaprezentowało Koło Turystyki i Marketingu. Stoisko przyciągnęło uwagę
                        zwiedzających dzięki ciekawym atrakcjom oraz kreatywnemu podejściu do promocji swojej
                        działalności.
                    </div>
                    <div class="grid gap-4 pb-4">
                        Atrakcje na stoisku Koła Turystyki i Marketingu:
                        <li>
                            <b>Quiz z wiedzy o turystyce i marketingu:</b> uczestnicy mogli sprawdzić swoją wiedzę na
                            temat
                            branży, odpowiadając na pytania dotyczące podstawowych zagadnień związanych z turystyką i
                            marketingiem.
                        </li>
                        <li>
                            <b>Zgadywanie języka po treści napisu:</b> zabawa polegała na rozpoznawaniu, w jakim języku
                            napisane są przygotowane fragmenty tekstów, co cieszyło się dużym zainteresowaniem i
                            angażowało osoby
                            w różnym wieku.
                        </li>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            Wystawa przedmiotów przedwojennych: na stoisku zaprezentowano ciekawe eksponaty z nawiązanej
                            współpracy z Muzeum Bankowiec w Gdyni, które pokazywały historię codziennego życia, takie
                            jak:
                        </div>
                        <li>
                            <b>Młynek do mielenia mięsa,</b>
                        </li>
                        <li>
                            <b>Młynek do kawy.</b>
                        </li>
                        Eksponaty te pozwoliły uczestnikom przenieść się w czasie i poczuć klimat przedwojennych lat.
                        Dni Otwarte były doskonałą okazją do zaprezentowania działalności Koła oraz nawiązania kontaktu
                        z
                        potencjalnymi przyszłymi studentami Uniwersytetu Morskiego. Atrakcyjna forma promocji sprawiła,
                        że
                        stoisko Koła Turystyki i Marketingu cieszyło się dużym zainteresowaniem.
                    </div>
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
                img: require('assets/img/gallery/dniOtwarte_12-24_1.jpg'),
            },
            {
                img: require('assets/img/gallery/dniOtwarte_12-24_2.jpg'),
            },
            {
                img: require('assets/img/gallery/dniOtwarte_12-24_3.jpg'),
            },
            {
                img: require('assets/img/gallery/dniOtwarte_12-24_4.jpg'),
            },
            {
                img: require('assets/img/gallery/dniOtwarte_12-24_5.jpg'),
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
