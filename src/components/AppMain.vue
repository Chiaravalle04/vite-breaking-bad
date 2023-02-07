<script>
import axios from 'axios';
import AppCards from './AppCards.vue';
import FoundCards from './FoundCards.vue';
import AppLoader from './AppLoader.vue'
import { store } from '../store.js';

export default {
  name: 'AppMain',

  components: {
    AppCards,
    FoundCards,
    AppLoader
  },
  
  data() {
    return {
      store,

    }
  },

  methods: {

    filterCards(event) {
      this.store.archetypesSelect = event.target.value
    }

  },

  computed: {

    filteredCards() {
      if (this.store.archetypesSelect === 'all') {
        return this.store.results
      }
      return this.store.results.filter(feature => feature.archetype === this.store.archetypesSelect)
    }

  },

  created() {

    this.store.loading = true;

    axios 
      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        this.store.results = response.data.data.slice(0, 100);
        console.log(this.store.results)
        this.store.loading = false;
    }),

    axios 
      .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then((response) => {
        this.store.archetypes = response.data
        console.log('arc',this.store.archetypes)
    }) 
  }
}
</script>

<template>

    <main>

        <div class="general-container">

            <div class="header-main d-flex ai-center">

                <select @change="filterCards" name="card-type" id="card-type">
                    <option value="all">All</option>
                    <option :value="store.archetypes[index].archetype_name" v-for="cardsType, index in store.archetypes">
                        {{ store.archetypes[index].archetype_name }}
                    </option>
                </select>

                <FoundCards :filtred="filteredCards"/>

            </div>

            <div class="cards d-flex" v-if="store.loading === false">

                <AppCards :feature="feature" v-for="feature in filteredCards"/>

                <div class="not-found" v-if="filteredCards.length == 0">
                    <p>Nessun risultato</p>
                </div>
                
            </div>

            <AppLoader v-else/>

        </div>

    </main>
  
</template>

<style lang="scss" scoped>
main {
    background-color: $mainColor;
    min-height: calc(100vh - 80px);
    .header-main {
        justify-content: space-between;
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
    }
    .cards {
        width: 100%;
        flex-wrap: wrap;
    }
    .not-found {
        font-weight: bold;
        font-size: 30px;
    }
}
</style>