<template>
    <section class="">
        <div class="">
            <div class="text-7 py-6 text-center">
                II Ogólnopolska Naukowa Konferencja Studencko-Doktorancka "Współczesne trendy w turystyce – szanse,
                perspektywy, zagrożenia"
            </div>
            <div class="text-5 pb-9">
                <div class="pb-4">
                    Członkinie Naszego Koła Naukowego Paulina Mikuła oraz Patrycja Krupa dnia 12 maja 2023 wzięły udział
                    w II Ogólnopolskiej Naukowej Konferencji Studencko-Doktoranckiej, organizowanej przez Studenckie
                    Koło Naukowe Turystyki i Rekreacji SKNTiR "Globtroter". Podczas wydarzenia wygłosiły referat pt.
                    „Internet jako źródło informacji krajoznawczej młodzieży licealnej w opinii uczniów aglomeracji
                    Trójmiasta (Gdańsk, Sopot, Gdynia)”.
                </div>

                <div class="grid gap-4 pb-4">
                    Aspekty wystąpienia:
                    <li>Analiza roli internetu jako narzędzia poznawania świata przez młodzież licealną.</li>
                    <li>
                        Wyniki badań przeprowadzonych wśród uczniów z aglomeracji trójmiejskiej, które ukazały, jak
                        młodzi ludzie postrzegają internet w kontekście zdobywania wiedzy krajoznawczej.
                    </li>
                    <li>
                        Dyskusja na temat możliwości oraz ograniczeń wynikających z korzystania z internetu w celach
                        edukacyjnych i turystycznych.
                    </li>
                </div>
                <div class="">
                    Konferencja była doskonałą okazją do wymiany poglądów oraz prezentacji wyników badań z zakresu
                    nowoczesnych trendów w turystyce. Wystąpienie Pauliny i Patrycji zostało docenione przez
                    organizatorów oraz uczestników, co zaowocowało przyznaniem im certyfikatu za udział i zaangażowanie.
                </div>
            </div>
            <div class="flex justify-center gap-4">
                <div class="w-200 h-145" v-for="photo in galleryTrends">
                    <Photo :src_dsk="photo.img" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        galleryTrends: [{ img: require('assets/img/gallery/certyfikat_warszawa.jpg') }],
    }),
}
</script>

<style lang="scss" scoped>
li {
    padding-left: 1rem;
}
</style>
