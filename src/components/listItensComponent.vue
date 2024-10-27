<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    title: String,
    itens: Array,
})

</script>
<template>
    <div class="card">
        <div class="title">
            <h3>Categorias</h3>
        </div>
        <div class="itens">
            <RouterLink class="item" v-for="item in itens" :key="item" :to="item.to">
                <div class="img">
                    <img :src="item.img">
                </div>
                <div class="title">
                    <p>{{ item.title }}</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped>
.card {
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    border-radius: 10px;
    padding: 25px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.title p {
    padding: 0 15px;
}

.img {
    background-color: #D9D9D999;
    display: flex;
}

.img img {
    height: 100px;
    aspect-ratio: 1 / 1;
    object-fit: contain;
}

.itens {
    display: flex;
    gap: 1rem 2rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #A9A9A9;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    color: black;
    text-decoration: none;
}
.item:hover {
    transform: scale(1.05);
}
</style>