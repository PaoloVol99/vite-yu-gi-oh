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
            required: false
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
    display: flex;
    flex-direction: column;
    gap: 10px;
    .card-img {
        display: block;
    }
    .card-name {
        display: block;
        font-size: 16px;
        text-transform: uppercase;
        color: white;
        font-weight: 600;
        margin-bottom: auto;
        padding: 0 5px;
    }
    .card-archetype {
        display: block;
        font-size: 12px;
        text-transform: uppercase;
        padding: 0 5px;
    }
}

</style>