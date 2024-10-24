<script setup>

const a = ['', '', '', ''];
</script>
<template>
    <div class="card">

        <div class="title">
            <p>Ofertas <a href="https://adwa.com">Mostrar todas as ofertas</a></p>
        </div>
        <div class="itens">
            <div class="item" v-for="aa in a" :key="aa">
                <div class="img">
                    <img src="@/assets/images/locate.png">
                </div>
                <div class="title">
                    <p>Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM</p>
                </div>
                <div class="price">
                    <span class="old-price">R$ 1899,00</span>
                    <p>R$ 1699,00 <span class="promotion">7%OFF</span></p>
                </div>
            </div>
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
}

.title p {
    font-weight: 700;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
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
.itens {
    display: flex;
    gap: 1rem;
    align-items: center;
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
}

.item:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}
</style>