<script>
import axios from 'axios';
import AppCards from './AppCards.vue'
import { store } from '../store.js';

export default {
  name: 'AppMain',

  components: {
    AppCards
  },
  
  data() {
    return {
      store,

      logo: 'https://toyworldmag.co.uk/wp-content/uploads/2022/03/YU-GI-OH-LOGO-copy-1024x418.png',
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

                <div class="found-cards">
                    <p>Carte trovate : {{ filteredCards.length }}</p>
                </div>

            </div>

            <div class="cards d-flex" v-if="store.loading === false">

                <AppCards :feature="feature" v-for="feature in filteredCards"/>

                <div class="not-found" v-if="filteredCards.length == 0">
                    <p>Nessun risultato</p>
                </div>
                
            </div>

            <div id="loader" v-else>
                <img :src="logo" alt="Yu-Gi-Oh Logo">
                <div class="circle"></div>
            </div>

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
        .found-cards {
            color: $secondColor;
            font-weight: bold;
            font-size: 20px;
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
    #loader {
        height: calc(100vh - 150px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
            width: 30%;
        }
        .circle {
            border: 6px solid $secondColor;
            border-top: 6px solid transparent;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    }
}
</style>