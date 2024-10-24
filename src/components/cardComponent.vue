<template>
    <div class="card">
        <div class="title">
            <p>Insira sua localização</p>
        </div>
        <div class="img">
            <img src="@/assets/images/locate.png">
        </div>
        <div class="desc">
            <p>Confira os custos e prazos de entrega</p>
        </div>
        <div class="btn">
            <button>inserir localização</button>
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
</style>