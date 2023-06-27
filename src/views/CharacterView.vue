<template>
    <div v-if="character" >
        <h1>
            {{ character.name }}
        </h1>   
        <img :src="character.profile" :alt="character.name" class="characterImg">
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

        
    <div>
        <input type="radio" id="main" :value="character.main" v-model="picked">
        <label for="main">Natural Form</label>
        <input type="radio" id="alt" :value="character.alt" v-model="picked">
        <label for="alt">Alterior Form</label>
        <input type="radio" id="final" :value="character.final" v-model="picked">
        <label for="final">Final Form</label>
        <br>
        <span>
            <img :src="picked" :alt="character.name">
        </span>
        
    </div>
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
        },
        data(){
            return {
                picked: 'main'
            }
        }
    }
</script>

<style scoped>
    img{
        width: 800px;
    }
</style>