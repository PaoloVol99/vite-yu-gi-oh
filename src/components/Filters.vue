<script>
import store from '../store'
export default {
    data() {
        return {
            store
        }
    },
    methods: {

    }

}
</script>

<template>
    <div class="form-wrapper">
        <input v-model="store.search" @keyup.enter="$emit('onSearch')" type="text" placeholder="Cerca una carta...">
        <select v-model="store.num" @change="$emit('OnChange')" name="num" id="num">
            <option value="none">scegli quante carte visualizzare</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>

.form-wrapper {
    background-color: black;
    padding: 5px;
    color: white;
    display: flex;
    justify-content: center;
    gap: 10px;

    input, 
    select {
        padding: 5px;
        border: none;
        border-radius: 5px;
    }
}

</style>