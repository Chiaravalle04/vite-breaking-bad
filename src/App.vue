<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store
    }
  },

  created() {
    
  }

}
</script>

<template>

  <AppHeader/>
  
  <AppMain/>
  
</template>

<style lang="scss">
@import '../src/styles/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
</style>
