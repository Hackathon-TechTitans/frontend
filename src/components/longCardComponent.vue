<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    title: String,
    img: String,
    to: String,
    toTitle: String,
});

</script>
<template>
    <div class="card">
        <div class="title">
            <p>{{ title }}</p>
            <RouterLink :to="to">{{ toTitle }}</RouterLink>
        </div>
        <div class="img">
            <img :src="img">
        </div>
    </div>
</template>
<style scoped>
.card {
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
}

.title {
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 1rem;
}

.title p {
    font-weight: 550;
    margin: 0;
    padding: 0;
    text-align: center;
}

.title a {
    font-weight: 700;
    cursor: pointer;
    background-color: #66C0F2;
    border: none;
    padding: 6px 20px;
    border-radius: 8px;
    flex: 1;
    transition: transform 0.2s;
    text-align: center;
    color: black;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
}

.title a:hover {
    transform: scale(1.05);
}

.img img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: contain;
    max-height: 100%;
}

.img {
    width: 50%;
    border-left: 1px solid #d9d9d9;
    height: 100%;
}

</style>