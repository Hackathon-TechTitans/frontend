<script setup>
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const props = defineProps({
    title: String,
    MoreTo: String,
    MoreTitle: String,
    itens: Array,
});

const itensPerSlide = 5;

const currentSlide = ref(0);

const totalSlides = computed(() => Math.ceil(props.itens.length / itensPerSlide));
const visibleItems = computed(() => {
    const items = props.itens.slice(currentSlide.value * itensPerSlide, (currentSlide.value + 1) * itensPerSlide);

    if(props.itens.length > itensPerSlide) {
    while (items.length < itensPerSlide) {
        items.push({});
    }
    }   
    return items;
});

function nextSlide() {
    if (currentSlide.value < totalSlides.value - 1) {
        currentSlide.value++;
    }
};

function prevSlide() {
    if (currentSlide.value > 0) {
        currentSlide.value--;
    }
};
</script>

<template>
    <div class="card">
        <div class="title">
            <p>Ofertas <RouterLink :href="MoreTo">{{ MoreTitle }}</RouterLink></p>
        </div>
        <div class="carousel" v-if="props.itens.length > 5">
            <button @click="prevSlide" :class="(currentSlide > 0)? 'arrow left' : 'arrow arrow-empty'"><span class="material-symbols-outlined">chevron_left</span></button>
            <div class="itens">
                <RouterLink class="item" v-for="(item, index) in visibleItems" :key="index" :class="{ 'empty-item': item.title == null }" :to="item.to">
                    <div class="img">
                        <img :src="item.img" />
                    </div>
                    <div class="title">
                        <p>{{ item.title }}</p>
                    </div>
                    <div class="price">
                        <span class="old-price" v-if="item.promotion">R$ {{ String(item.oldPrice).replace('.',',') }}</span>
                        <p>R$ {{ item.price }} <span v-if="item.promotion" class="promotion">{{ (item.promotion * 100).toFixed(0) }}%OFF</span></p>
                    </div>
                </RouterLink>
            </div>
            <button @click="nextSlide" :class="(currentSlide < totalSlides - 1)? 'arrow' : 'arrow arrow-empty'" class="arrow right"><span class="material-symbols-outlined">chevron_right</span></button>
        </div>
        <div class="itens" v-else>
            <RouterLink class="item" v-for="(item, index) in visibleItems" :key="index" :class="{ 'empty-item': item.title == null }" :to="item.to">
                    <div class="img">
                        <img :src="item.img" />
                    </div>
                    <div class="title">
                        <p>{{ item.title }}</p>
                    </div>
                    <div class="price">
                        <span class="old-price" v-if="item.promotion">R$ {{ String(item.oldPrice).replace('.',',') }}</span>
                        <p>R$ {{ item.price }} <span v-if="item.promotion" class="promotion">{{ (item.promotion * 100).toFixed(0) }}%OFF</span></p>
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
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

.title p {
    font-weight: 700;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
    align-items: flex-end;
}

.img {
    display: flex;
    justify-content: center;
}

.img img {
    height: 220px;
    width: 175px;
    object-fit: contain;
}

.title p a {
    color: #0095CF;
    font-size: 14px;
}

.title p a:hover {
    color: #0169a1;
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

.carousel {
    display: flex;
    align-items: center;
}

.itens {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    flex: 1;
}

.price p {
    margin-top: 0;
}

.item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 5px;
    cursor: pointer;
    transition: transform 0.2s;
    border-radius: 8px;
    text-decoration: none;
    color: black;
}

.item:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.arrow {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0 10px;
    position: relative;
}

.arrow:hover {
    color: #0169a1;
}
.arrow span {
    font-size: 24px;
    padding: 8px;
    background-color: black;
    color: white;
    border-radius: 50%;

}
.empty-item {
    opacity: 0;
    background-color: #f5f5f5;
    box-shadow: none !important;
    cursor: default;
}
.arrow-empty span {
    cursor: default;
    color: #f5f5f5 !important;
    opacity: 0;
}

.arrow.right {
    right: -55px;
}

.arrow.left {
    left: -55px;
}
</style>
