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