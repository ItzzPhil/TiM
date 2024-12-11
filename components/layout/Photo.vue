<template>
    <picture class="block w-full h-full" :alt="alt" :title="alt">
        <source :srcset="src_dsk" media="(min-width: 768px)" :alt="alt" :title="alt" />
        <img
            :alt="alt"
            :title="alt"
            :src="src_mob || src_dsk"
            class="w-full h-full"
            :class="{ 'object-contain': contain, 'object-cover': !contain }"
        />
    </picture>
</template>

<script>
export default {
    props: ['src_dsk', 'src_mob', 'contain', 'alt'],
}
</script>

<style lang="scss"></style>
