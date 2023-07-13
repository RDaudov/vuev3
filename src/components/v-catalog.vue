<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <div class="v-catalog-list">
            <VCatalogItem v-for="item in ITEMS" :key="item.id" :item="item" @fromChild="callFromChild"/>
        </div>
        <button @click="GET_ITEMS">123213</button>
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
            'ITEMS'
        ])
    },
    methods: {
        ...mapActions(['GET_ITEMS']),
        callFromChild(e) {
            console.log(e);
        },
        getData() {
            // fetch('http://localhost:3000/items')
            //     .then(res => res.json())
            //     .then(ss => console.log(ss))
            console.log(this.items)
        }
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