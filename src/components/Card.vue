<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        archetype: {
            type: String,
            required: true
        }
    }

}
</script>

<template>

    <div class="card">
        <img class="card-img" :src="imageSrc" alt="">
        <span class="card-name">{{ name }}</span>
        <span class="card-archetype">{{ archetype }}</span>
    </div>

</template>

<style lang="scss" scoped>

.card {
    text-align: center;
    background-color: orange;
    height: 100%;
    .card-img {
        display: block;
    }
    .card-name {
        display: block;
    }
    .card-archetype {
        display: block;
    }
}

</style>