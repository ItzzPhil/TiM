<template>
    <section class="py-30 px-70">
        <div class="text-center">
            <div class="font-bold text-9 pb-8">O nas</div>
            <div class="leading-16 px-40 text-5">
                Jesteśmy dynamiczną społecznością studencką zafascynowaną ekonomią oraz nowoczesnymi usługami. Nasze
                koło skupia się na rozwoju wiedzy poprzez badania, praktykę oraz interaktywne seminaria. Tworzymy
                inspirujące projekty badawcze i integrujące wyjazdy, zapewniając platformę do eksploracji najnowszych
                trendów w tych dziedzinach.
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
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        people: [
            {
                name: 'John Doe',
                img: require('assets/img/people.png'),
                description: 'bleh',
            },
            {
                name: 'John Doe',
                img: require('assets/img/people.png'),
                description: 'bleh',
            },
            {
                name: 'John Doe',
                img: require('assets/img/people.png'),
                description: 'bleh',
            },
            {
                name: 'John Doe',
                img: require('assets/img/people.png'),
                description: 'bleh',
            },
        ],
    }),
}
</script>

<style lang="scss" scoped></style>
