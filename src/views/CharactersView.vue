<template>
    <div>
        <h2>
            Characters
        </h2>
    </div>

    <div v-if="characters" >
        <CharacterCard v-for="character of characters" :key="character.id" :character="character"/>
    </div>
    <div v-else>
        Could not load
    </div>  
</template>

<script>
    import CharacterCard from '@/components/CharacterCard.vue';

    export default {
        computed: {
            characters(){
                return this.$store.state.characters
            }
        },
        mounted(){
            this.$store.dispatch("getCharacters")
        },
        components: {
            CharacterCard
        }
    }
</script>

<style scoped>

</style>