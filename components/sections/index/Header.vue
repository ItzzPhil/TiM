<template>
    <section class="flex justify-between content-center py-6 px-5 text-black text-6 bg-[#EAA45D]">
        <div class="text-8">Koło Turystyki i Marketingu</div>
        <div class="flex gap-3 content-center">
            <a href="/" class="_buttons">Strona Główna</a>
            <a href="/gallery/" class="_buttons">Galeria</a>
            <a href="/contact/" class="_buttons">Kontakt</a>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
._buttons {
    padding: 3px;
    background-color: white;
    border: 3px solid;
    border-top-color: #c9c9c9;
    border-left-color: #c9c9c9;
    border-bottom-color: #4b5563;
    border-right-color: #4b5563;
    transition: background-color 0.3s, border-color 0.3s;
    border-radius: 0.375rem;
    &:hover {
        background-color: #e59240;
        border-top-color: #4b5563;
        border-left-color: #4b5563;
        border-bottom-color: #c9c9c9;
        border-right-color: #c9c9c9;
    }
}
</style>
