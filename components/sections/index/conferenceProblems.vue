<template>
    <section class="">
        <div class="">
            <div class="text-7 py-6 text-center">
                Udział Uniwersytetu Morskiego w 9. Konferencji „Problemy i wyzwania geografii komunikacji"
            </div>
            <div class="text-5 pb-9">
                <div class="pb-4">
                    W dniach 10-11 kwietnia 2024 Aleksandra Lis i Paweł Laskowski reprezentowali Uniwersytet Morski w
                    Gdyni podczas 9. edycji konferencji naukowej „Problemy i wyzwania geografii komunikacji”. W ramach
                    wydarzenia przygotowali poster naukowy pt. „Zmiany w transporcie z wykorzystaniem funduszy
                    europejskich na przykładzie miasta Gdynia”.
                </div>

                <div class="grid gap-4 pb-4">
                    Elementy posteru:
                    <li>
                        <b>Analiza zmian w transporcie miejskim w Gdyni:</b> Przedstawiono, jak wykorzystanie funduszy
                        unijnych wpłynęło na rozwój infrastruktury transportowej miasta.
                    </li>
                    <li>
                        <b>Projekty współfinansowane przez Unię Europejską:</b> Omówiono najważniejsze inwestycje w
                        transporcie publicznym, poprawę dostępności komunikacyjnej oraz modernizację sieci
                        transportowej.
                    </li>
                    <li>
                        <b>Wpływ na zrównoważony rozwój:</b> Podkreślono znaczenie funduszy europejskich w kontekście
                        ekologii, innowacji oraz poprawy jakości życia mieszkańców Gdyni.
                    </li>
                </div>
                <div class="">
                    Konferencja zgromadziła przedstawicieli środowiska akademickiego oraz praktyków z branży
                    transportowej, co stworzyło przestrzeń do wymiany doświadczeń. Poster Aleksandry Lis i Pawła
                    Laskowskiego wzbudził duże zainteresowanie, podkreślając aktywność naukową Uniwersytetu Morskiego w
                    Gdyni oraz jego wkład w rozwój zrównoważonego transportu.
                </div>
            </div>

            <div class="text-5 pb-9">
                Zmiany w transporcie z wykorzystaniem funduszy europejskich na przykładzie miasta Gdynia" opracowane
                przez: Krzysztof Małachowski, Marzena Wanagos, Aleksandra Lis, Paweł Laskowski
            </div>
            <div class="grid justify-center gap-4 pb-9">
                <div class="w-234" v-for="photo in galleryPoster">
                    <Photo :src_dsk="photo.img" />
                </div>
            </div>
            <div class="flex justify-center gap-4">
                <div class="h-160" v-for="photo in galleryTorunCertificates">
                    <Photo :src_dsk="photo.img" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        galleryTorunCertificates: [
            {
                img: require('assets/img/gallery/CertyfikatOla.jpg'),
            },
            {
                img: require('assets/img/gallery/CertyfikatPawel.jpg'),
            },
        ],
        galleryPoster: [
            {
                img: require('assets/img/gallery/posterImg1.jpg'),
            },
            {
                img: require('assets/img/gallery/posterImg2.jpg'),
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
