<template>
    <div class="wrap">
        <img :src="require('../assets/images/' + item.image) " alt="image" class="image">
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
        <button @click="AddToCart"> Add to cart</button>
    </div>
  
</template>

<script>
export default {
    name: "v-catalog-item",
    props: {
        item: {
            default() {
                return {}
            }
        }
    },
    data() {
        return{}
    },
    computed: {},
    methods: {
        AddToCart() {
            this.$emit('AddToCart', this.item)
        }
    }

}
</script>

<style scoped>
    .wrap{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 1px solid grey;
        border-radius: 5px;
        box-shadow: 5px 5px 10px grey;
        flex-basis: 30%;
        padding: 10px 5px;
        height: 300px;
    }

    .image {
        overflow: auto;
        width: 100%;
    }
</style>