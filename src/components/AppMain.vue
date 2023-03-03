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
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0')
            .then((res) => {
                this.cards = res.data.data
                this.store.cards = res.data.data
                console.log(res.data.meta)
                this.store.cardsNumber = res.data.meta.current_rows
            })
    }
}
</script>


<template>

    <main>
        <div class="container">
            <div class="cards-number">
                {{ 'Found ' + store.cardsNumber + ' cards' }}
            </div>
            <div class="row">
                <div v-for="(card, i) in store.cards" :key="i" class="col">
                    <Card :imageSrc="card.card_images[0].image_url" :name="card.name" :archetype="card.archetype" />
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>

.cards-number {
    background-color: black;
    padding: 5px;
    color: white;
}

.row {
    row-gap: 20px;
    margin: 0 -10px;
    .col {
        width: calc(100% / 5);
        padding: 0 10px;
    }
}

</style>