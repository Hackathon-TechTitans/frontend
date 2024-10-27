<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    title: String,
    img: String,
    desc: String,
    btnText: String,
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
        <div class="btn">
            <button>{{ btnText }}</button>
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
    color: black;
    text-decoration: none;
    cursor: default;
}

.title p {
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;
}

.img img {
    height: 120px;
    width: 120px;
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
    transition: transform 0.2s;
}
.btn button:hover {
    transform: scale(1.05);
}

.desc {
    text-align: center;
}
</style>