<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <VCatalog/>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VCatalog from './components/VTaskList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VCatalog
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image: '1.img',
          header: 'Header1',
          body: 'body1'
        },
        {
          id: 2,
          image: '2.img',
          header: 'Header2',
          body: 'body2'
        },
        {
          id: 3,
          image: '3.img',
          header: 'Header3',
          body: 'body3'
        },
        {
          id: 4,
          image: '4.img',
          header: 'Header4',
          body: 'body4'
        },
        
      ],
    }
  }
}
</script>

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
