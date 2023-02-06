<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  data() {
    return {
      store
    }
  },

  created() {
    axios 
      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        this.store.results = response.data.data;
        console.log(this.store.results)
      })
  }

}
</script>

<template>

  <AppHeader/>
  
  <AppMain/>
  
  <AppFooter/>
  
</template>

<style lang="scss">
@import '../src/styles/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
</style>
