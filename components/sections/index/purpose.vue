<template>
    <section class="">
        <div class="text-9 text-center font-bold">Nasza misja oraz co możemy zaoferować</div>
        <div class="grid grid-cols-4 px-50 py-11 text-5 gap-8">
            <div class="grid gap-5 items-center">
                <div class="_textL">
                    Rozwój umiejętności analitycznych w obszarze turystyki i martetingu. Tworzenie innowacyjnych
                    projektów badawczych. Budowanie sieci kontaktów z profesjonalistami z branży
                </div>

                <div class="_textL">
                    Interaktywne seminaria prezentujące najnowsze tendencje w dziedzinie turystyki i marketingu.
                    Projekty badawcze zachęcające do eksploracji nowatorskich pomysłów.
                </div>
            </div>
            <div class="col-span-2 h-128 px-20">
                <Photo :src_dsk="require('assets/img/Purpose.png')" />
            </div>
            <div class="grid gap-5 items-center">
                <div class="_textR">
                    Integracyjne wyjazdy krajoznawcze i międzynarodowe, poszerzające horyzonty. Możliwość nawiązania
                    kontaktów z doświadczonymi praktykami z branży.
                </div>
                <div class="_textR">
                    Dołączając do naszego koła, otrzymasz szansę na rozwijanie wiedzy, zdobywanie cennych doświadczeń
                    oraz współtworzenie innowacyjnych projektów. Zapraszamy Cię do przyłączenia się do naszej
                    pasjonującej społeczności!
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Photo from '~/components/layout/Photo.vue'

export default {}
</script>

<style lang="scss" scoped>
._textR {
    // max-width: 20rem;
    border-left: 0.75rem solid var(--black);
    border-radius: 1rem;
    padding-left: 1rem;
}
._textL {
    text-align: end;
    border-right: 0.75rem solid var(--black);
    border-radius: 1rem;
    padding-right: 1rem;
}
</style>
