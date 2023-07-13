<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <VCatalog/>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VCatalog from './components/v-catalog.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VCatalog
  },
  data() {
    return {
      items: [
      ],
    }
  },
  computed: {
    ...mapGetters(['CART'])
  }
}</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
