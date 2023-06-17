<template>
    <button @click="toggle(1)">1</button>
    <button @click="toggle(2)">2</button>
    <button @click="toggle(3)">3</button>
    <CycleEl v-if="Istoggle == 1">123</CycleEl>
    <CycleEl v-else-if="Istoggle == 2">456</CycleEl>
    <CycleEl v-else-if="Istoggle == 3">789</CycleEl>
    
</template>

<script>
export default {
    data() {
        return {
            Istoggle: 1,
        }
    },
    methods: {
        toggle(n) {
            this.Istoggle = n;
        },
    },
    mounted() {
        
        console.log(this.$);
    }
};
</script>

<style></style>