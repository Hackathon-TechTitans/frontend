<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    title: String,
    img: String,
    desc: String,
    promotion: Number,
    price: Number,
    oldPrice: Number,
    to: String,
});

</script>
<template>
    <RouterLink class="card" :to="to">
        <div class="title">
            <p>{{ title }}</p>
        </div>
        <div class="img">
            <img :src="img">
        </div>
        <div class="desc">
            <p>{{ desc }}</p>
        </div>
        <div class="price">
            <span class="old-price">R$ {{ String(oldPrice).replace('.',',') }}</span>
            <p>R$ {{ price }} <span class="promotion">{{ (promotion * 100) }}%OFF</span></p>
        </div>
    </RouterLink>
</template>
<style scoped>
.card {
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s;
    color: black;
    text-decoration: none;
}
.card:hover {
    transform: scale(1.05);
}

.title p {
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;
}

.img img {
    height: 165px;
    width: 240px;
    object-fit: contain;
}

.btn {
    display: flex;
    width: 100%;
}

.btn button {
    cursor: pointer;
    background-color: #d9d9d9;
    border: none;
    padding: 6px 20px;
    border-radius: 2px;
    flex: 1;
}

.old-price {
    font-size: 14px;
    color: #9B9B9B;
    text-decoration: line-through;
}

.promotion {
    font-weight: 700;
    font-size: 14px;
    color: #007505;
}

.price p {
    margin-top: 0;
}

.price {
    width: 100%;
}
</style>