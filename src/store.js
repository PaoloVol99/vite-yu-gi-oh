import { reactive } from 'vue'

const store = reactive({
    cards: [],
    cardsNumber: 0,
    search: '',
    num: 20
})

export default store