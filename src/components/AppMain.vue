<script>
import axios from 'axios'

import Card from './Card.vue'

export default {
    components: {
        Card
    },
    data() {
        return {
            cards: [],
        }
    },
    created() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0')
            .then((res) => {
                this.cards = res.data.data
            })
    }
}
</script>


<template>

    <main>
        <div class="container">
            <div class="row">
                <div v-for="(card, i) in cards" :key="i" class="col">
                    <Card :imageSrc="card.card_images[0].image_url" :name="card.name" :archetype="card.archetype" />
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>

.col {
    width: calc(100% / 5);
}

</style>