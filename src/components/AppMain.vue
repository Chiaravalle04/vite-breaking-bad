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
      store,

      logo: 'https://toyworldmag.co.uk/wp-content/uploads/2022/03/YU-GI-OH-LOGO-copy-1024x418.png',
    }
  },
}
</script>

<template>

    <main>

        <div class="general-container">

            <div class="header-main d-flex ai-center">

                <select name="card-type" id="card-type">
                    <option value="all">All</option>
                    <option value="monster">Carte Mostro</option>
                    <option value="magic">Carte Magia</option>
                    <option value="trap">Carte Trappola</option>
                </select>

                <div class="found-cards">
                    <p>Carte trovate : {{ store.results.length }}</p>
                </div>

            </div>

            <div class="cards d-flex" v-if="store.results.length == 100">

                <AppCards :feature="feature" v-for="feature in store.results"/>
                
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