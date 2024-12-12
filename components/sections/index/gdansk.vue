<template>
    <section class="">
        <div class="text-6 py-6 text-center">Dni turystyki w Gdańsku</div>
        <div class="flex justify-center h-221 overflow-hidden">
            <div class="flex w-312 gap-4 justify-center">
                <div class="grid gap-4">
                    <div class="">
                        <Photo class="" :src_dsk="require('assets/img/gallery/gdansk1.webp')" />
                    </div>
                    <div class="">
                        <Photo class="" :src_dsk="require('assets/img/gallery/gdansk2.webp')" />
                    </div>
                </div>
                <div class="">
                    <Photo class="" :src_dsk="require('assets/img/gallery/gdansk3.webp')" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
