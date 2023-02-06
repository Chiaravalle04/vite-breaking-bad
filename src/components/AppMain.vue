<script>
import AppCards from './AppCards.vue'
import { store } from '../store.js';

export default {
  name: 'AppMain',

  components: {
    AppCards
  },
  
  data() {
    return {
      store
    }
  },
}
</script>

<template>

    <main>

        <div class="general-container">

            <select name="card-type" id="card-type">
                <option value="all">All</option>
                <option value="monster">Carte Mostro</option>
                <option value="magic">Carte Magia</option>
                <option value="trap">Carte Trappola</option>
            </select>

            <div class="cards d-flex">

                <AppCards :feature="feature" v-for="feature in store.results"/>
                
            </div>

        </div>

    </main>
  
</template>

<style lang="scss" scoped>
main {
    background-color: $mainColor;
    select {
        width: 150px;
        height: 30px;
        margin: 20px 0;
        background-color: $secondColor;
        color: $colorText;
        font-weight: bold;
        border-radius: 10px;
        &:focus {
            outline: none;
        }   
    }
    .cards {
        width: 100%;
        flex-wrap: wrap;
    }
}
</style>