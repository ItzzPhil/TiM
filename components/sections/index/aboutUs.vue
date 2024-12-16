<template>
    <section class="py-20 px-70">
        <div class="text-center">
            <div class="font-bold text-9 pb-8">O nas</div>
            <div class="leading-16 px-35 text-5">
                Jesteśmy dynamiczną grupą studentów zafascynowanych światem turystyki, marketingu i nowoczesnych
                rozwiązań biznesowych. Nasze koło to przestrzeń dla kreatywnych pomysłów, praktycznych projektów i
                współpracy z profesjonalistami z branży. Organizujemy warsztaty, konferencje i wyjazdy studyjne, które
                pozwalają zdobywać wiedzę oraz doświadczenie w praktycznym działaniu.
            </div>
            <div class="flex gap-6 pt-8 justify-center">
                <div class="w-60" v-for="person in people">
                    <div class="w-full aspect-square border-[3px] border-black rounded-full overflow-hidden">
                        <Photo :src_dsk="person.img" />
                    </div>

                    <div class="text-6">{{ person.name }}</div>
                    <div class="">{{ person.description }}</div>
                </div>
            </div>
            <div class="flex gap-6 pt-8 justify-center">
                <div class="w-40">
                    <div class="w-full aspect-square border-[3px] border-black rounded-full overflow-hidden">
                        <Photo :src_dsk="require('assets/img/people/F_Radziminski.jpg')" />
                    </div>

                    <div class="text-5">Filip Radzimiński</div>
                    <div class="">Technik / Twórca strony</div>
                </div>
            </div>
            <div class="flex gap-6 pt-8 justify-center">
                <div class="text-5">
                    <b>Pozostali członkowie: </b>Wiktoria Dubiel, Aleksandra Kowalska, Marysia Leśniewska, Anna Panasiuk, Karolina Rodak, Patrycja Słabińska, Asia Sygidus, <br>Kinga Szulkowska, Kinga Zabrodzka
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        people: [
            {
                name: 'Konrad Hryniewicz',
                img: require('assets/img/people/K_Hryniewicz.jpg'),
                description: 'Opiekun Koła Naukowego',
            },
            {
                name: 'Patrycja Krupa',
                img: require('assets/img/people/P_Krupa.jpg'),
                description: 'Przewodnicząca',
            },
            {
                name: 'Julia Krawczyk',
                img: require('assets/img/people/J_Krawczyk.jpg'),
                description: 'Wiceprzewodnicząca',
            },
            {
                name: 'Aleksander Sapko',
                img: require('assets/img/people/A_Sapko.jpg'),
                description: 'Sekretarz',
            },
        ],
    }),
}
</script>

<style lang="scss" scoped></style>
