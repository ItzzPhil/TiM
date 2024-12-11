<template>
    <section class="py-30 px-70">
        <!-- <div class="h-[40rem] w-full">
            <img
                src="https://sumbcq.webwave.dev/files/dynamicContent/sites/sumbcq/images/pl/webpage_1/lqijiye9/element_19/rwdMode_1/550x600/unsplash-image.webp"
                class="h-full w-full object-cover"
                alt=""
            />
        </div> -->
        <div class="text-center">
            <div class="font-extrabold text-14 pb-8">O nas</div>
            <div class="text-6 pr-8 leading-16">
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
