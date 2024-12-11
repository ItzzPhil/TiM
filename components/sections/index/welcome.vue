<template>
    <main class="relative">
        <div class="h-[54rem] w-full">
            <img :src="require('/assets/img/welcome-plane.jpg')" class="h-full w-full object-cover" alt="" />
        </div>
        <img :src="require('/assets/img/megaphone.png')" alt="" class="absolute bottom-20 left-20 h-50" />
        <div class="absolute top-30 right-40 bg-[#EAA45D] w-160 p-10 text-black">
            <img :src="require('/assets/img/earth.png')" alt="" class="absolute top-10 right-20 h-25" />
            <div class="text-9">Zapraszamy do Koła <br />Turystyki i Marketingu!!!</div>
            <div class="text-6 pt-4">Z nami rozwiniesz skrzydła!</div>
        </div>
    </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
