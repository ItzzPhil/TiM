<template>
    <div>
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    mounted() {
        this.OnNewPage()
    },
    watch: {
        $route() {
            this.OnNewPage()
        },
    },
    methods: {
        OnNewPage() {
            this.$nextTick(() => {
                this.$nuxt.$loading.finish()
                this.$fadeInit()
            })
        },
    },
}
</script>

<style lang="scss"></style>
