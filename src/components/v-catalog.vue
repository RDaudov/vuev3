<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <div class="v-catalog-list">
            <VCatalogItem v-for="item in ITEMS" :key="item.id" :item="item" @AddToCart="AddToCart" />
        </div>
        <button @click="AddToCart">123213</button>
    </div>
</template>

<script>
import VCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-catalog',
    components: {
        VCatalogItem
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'ITEMS',
            'CART'
        ])
    },
    methods: {
        ...mapActions([
            'GET_ITEMS',
            'ADD_TO_CART'
        ]),
        AddToCart(e) {
            this.ADD_TO_CART(e)
            console.log(this.CART);
        },
    },
    mounted() {
        this.GET_ITEMS()
    }
}
</script>

<style scoped>
.v-catalog {
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: auto;
}

.v-catalog-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(238px, 1fr));
    gap: 15px;
}
</style>