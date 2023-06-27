<template>
    <router-link :to="{name: 'character', params:{id: character.id}}">
    <h3>
        {{ character.name }}
    </h3>
    <img :src="character.avatar" :alt="character.name" class="characterImg">
    <p>
        Age: {{ character.age }}
    </p>
    <p>
        Height: {{ character.height }} 
    </p>
    <h4>
        {{ character.faction }}
    </h4>
    </router-link>
</template>

<script>
    export default{
        props: ["character"]
    }
</script>

<style scoped>
    .characterImg{
        width: 400px;
        height: 400px;
        object-fit: cover;
    }
</style>