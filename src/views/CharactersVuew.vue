<template>
    <div>
        <h2>
            Characters
        </h2>
    </div>

    <div>
        <CharacterCard/>
    </div>
</template>

<script>
    import CharacterCard from '@/components/CharacterCard.vue';

    export default {
        components: {
            CharacterCard
        }
    }
</script>

<style scoped>

</style>