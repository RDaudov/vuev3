<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <VCatalog/>
  <VCart v-if="CART.length"/>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VCatalog from './components/v-catalog.vue'
import VCart from './components/v-cart.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VCatalog,
    VCart
  },
  data() {
    return {
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
