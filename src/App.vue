<template>
  <VTaskList v-bind:items="items" />
  <button @click="click">213</button>
</template>

<script>
import VTaskList from './components/VTaskList'

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
          header: 'Header1',
          description: 'do it1'
        },
        {
          id: 2,
          name: 'Header3',
          description: 'do it2'
        },
        {
          id: 3,
          name: 'Header3',
          description: 'do it3'
        },
        {
          id: 4,
          name: 'Header4',
          description: 'do it4'
        },
        {
          id: 5,
          name: 'Header5',
          description: 'do it5'
        },
      ]
    }
  },
  methods: {
    click() {
      console.log(this.refs);
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
