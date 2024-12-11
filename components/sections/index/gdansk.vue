<template>
    <section>
        <div class="text-5 py-6">Dni turystyki w Gdańsku</div>
        <div class="flex justify-center gap-4 w-311">
            <div class="grid gap-4">
                <div class="">
                    <Photo class="" :src_dsk="require('assets/img/gdansk1.webp')" />
                </div>
                <div class="">
                    <Photo class="" :src_dsk="require('assets/img/gdansk2.webp')" />
                </div>
            </div>
            <div class="">
                <Photo class="" :src_dsk="require('assets/img/gdansk3.webp')" />
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
