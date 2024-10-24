<template>
    <div class="card">
        <div class="title">
            <p>Oferta imperdível</p>
        </div>
        <div class="img">
            <img src="@/assets/images/televisao.png">
        </div>
        <div class="desc">
            <p>Confira os custos e prazos de entrega</p>
        </div>
        <div class="price">
            <span class="old-price">R$ 1899,00</span>
            <p>R$ 1699,00 <span class="promotion">7%OFF</span></p>
        </div>
    </div>
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
</style>