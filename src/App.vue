<template>
  <VTaskList/>
</template>

<script>
import VTaskList from './components/VTaskList.vue'

export default {
  name: 'App',
  components: {
    VTaskList
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
