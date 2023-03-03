<script>
import axios from 'axios'

import Card from './Card.vue'

import store from '../store'

export default {
    components: {
        Card
    },
    data() {
        return {
            cards: [],
            store,
        }
    },
    created() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0')
            .then((res) => {
                this.cards = res.data.data
                this.store.cards = res.data.data
            })
    }
}
</script>


<template>

    <main>
        <div class="container">
            <div class="row">
                <div v-for="(card, i) in store.cards" :key="i" class="col">
                    <Card :imageSrc="card.card_images[0].image_url" :name="card.name" :archetype="card.archetype" />
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>

.row {
    row-gap: 20px;
    margin: 0 -10px;
    .col {
        width: calc(100% / 5);
        padding: 0 10px;
    }
}

</style>