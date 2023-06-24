<template>
    <div class="v-tasklist">
        <h1>Tasklist</h1>
        <div class="v-tasklist-items">
            <VTaskListItem v-for="item in items" :key="item.id" :item="item" @fromChild="callFromChild"/>
        </div>
        <button @click="getData">123213</button>
    </div>
</template>

<script>
import VTaskListItem from './VTaskListItem.vue'

export default {
    name: 'v-tasklist',
    components: {
        VTaskListItem
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    image: '1.jpg',
                    name: 'Header1',
                    price: '100'
                },
                {
                    id: 2,
                    image: '2.jpg',
                    name: 'Header3',
                    price: '200'
                },
                {
                    id: 3,
                    image: '3.jpg',
                    name: 'Header3',
                    price: '300'
                },
                {
                    id: 4,
                    image: '4.jpg',
                    name: 'Header4',
                    price: '400'
                },
                {
                    id: 5,
                    image: '5.jpg',
                    name: 'Header5',
                    price: '500'
                },
            ]
        }
    },
    methods: {
        callFromChild(e) {
            console.log(e);
        },
        getData() {
            fetch('http://localhost:3000/items')
            .then(res => res.json())
            .then(ss=> console.log(ss))
        }
    }
}
</script>

<style scoped>
.v-tasklist {
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: auto;
}

.v-tasklist-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(238px, 1fr));
    gap: 15px;
}
</style>