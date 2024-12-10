<template>
    <div class="__preloader" :class="{ __finished: !loading }"></div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        dont_show: false,
    }),
    methods: {
        start() {
            console.log('finish')
            if (this.dont_show) return this.finish()
            this.loading = true
        },
        finish() {
            console.log('finish')
            this.$nextTick(() => {
                this.loading = false
            })
            this.dont_show = true
        },
    },
}
</script>

<style lang="scss" scoped>
.__preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    z-index: 99999;
    opacity: 1;
    visibility: visible;
    &.__finished {
        transition: opacity 0.6s, visibility 0.6s;
        opacity: 0;
        visibility: hidden;
    }
}
</style>
