<template>
    <div v-if="character" >
        <h1>
            {{ character.name }}
        </h1>   
        <img :src="character.avatar" :alt="character.name" class="characterImg" style="width: 400px;">
        <div>
            <p>
                Age: {{ character.age }}
            </p>
            <p>
                Height: {{ character.height }}
            </p>
        </div>
        <h3>
            {{ character.faction }}
        </h3>
    </div>
</template>

<script>
    export default {
        props: ["id"],
        computed:{
            character(){
                return this.$store.state.character
            }
        },
        mounted(){
            this.$store.dispatch("getCharacter", this.id)
        }
    }
</script>

<style scoped>
    img{
        width: 400px !important;
    }
</style>