<template>
    <main>
        <section class="text-8 py-4">Error: {{ error.statusCode }}</section>
    </main>
</template>

<script>
export default {
    props: ['error'],
}
</script>

<style scoped lang="scss"></style>
