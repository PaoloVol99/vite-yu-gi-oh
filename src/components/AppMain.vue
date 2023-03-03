<script>
import axios from 'axios'

export default {
    created() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0')
            .then((res) => {
                console.log(res)
            })
    }
}
</script>


<template>


</template>

<style lang="scss" scoped>

</style>