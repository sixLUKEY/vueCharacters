import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: null,
    character: null
  },
  mutations: {
    setCharacters: ( state, characters) => {
      state.characters = characters
    },
    setCharacter: ( state, character ) => {
      state.character = character
    }
  },
  actions: {
    getCharacters: async ( context ) => {
      fetch( "http://localhost:3000/characters" )
      .then(( res ) => res.json())
      .then(( characters ) => context.commit( "setCharacters", characters ))
    },
    getCharacter: async ( context, id ) => {
      fetch( "http://localhost:3000/characters/" + id )
      .then(( res ) => res.json())
      .then(( character ) => context.commit( "setCharacter", character ))
    }
  }
})
