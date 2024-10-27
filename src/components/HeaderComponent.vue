<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <header>
        <nav>
            <div>
                <RouterLink to="/"><img src="@/assets/icons/logo.svg" alt="Logo" height="50"></RouterLink>
            </div>
        </nav>
        <nav class="search-nav">
            <div class="search-div">
                <input class="search-input" type="text" placeholder="O que você está procurando?">
                <div class="search-icon-div">
                    <span class="material-symbols-outlined" alt="Carrinho" style="font-size: 18px;">search</span>
                </div>
            </div>
            <div class="search-shortcuts-div">
                <RouterLink class="search-shortcuts" to="/category/1">
                    <h3>Categorias</h3>
                </RouterLink>
                <RouterLink class="search-shortcuts" to="/category/2">
                    <h3>Ofertas</h3>
                </RouterLink>
                <RouterLink class="search-shortcuts" to="/category/3">
                    <h3>Vender</h3>
                </RouterLink>
                <RouterLink class="search-shortcuts" to="/category/3">
                    <h3 class="material-symbols-outlined"
                        style="padding: 0 3px;height: 14px;width: 14px;font-size: 14px;">favorite</h3>
                    <h3>Meus Favoritos</h3>
                </RouterLink>
            </div>
        </nav>
        <nav class="account-nav">
            <div>
                <RouterLink class="account-btn" to="/auth/login">
                    <h3>MINHA CONTA</h3>
                    <p>Entrar/Cadastro</p>
                </RouterLink>
            </div>
        </nav>
        <nav class="button-nav">
            <div>
                <RouterLink to="/cart">
                    <span src="@/assets/icons/cart.svg" class="material-symbols-outlined" alt="Carrinho" height="24px"
                        width="24px">notifications</span>
                </RouterLink>
                <RouterLink to="/cart">
                    <span src="@/assets/icons/cart.svg" class="material-symbols-outlined" alt="Carrinho" height="24px"
                        width="24px">shopping_cart</span>
                </RouterLink>
            </div>
        </nav>
    </header>
</template>
<style scoped>
.material-symbols-outlined {
    user-select: none;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

nav div a:hover {
    color: white;
}

header {
    background-color: #1B91BF;
    color: black;
    padding: 1rem;
    display: flex;
    gap: 2.5rem;
    justify-content: space-around;
}

nav a {
    color: black;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    font-size: 1rem;
    user-select: none;
}

nav a h3 {
    margin: 0;
    font-size: 12px;
}

nav a p {
    margin: 0;
    font-size: 12px;
}

.search-input {
    padding: 0.5rem 2.5rem;
    border-radius: 1rem;
    border: none;
    font-family: 'Inter', sans-serif;
    outline: none;
    width: 40vw;
}

.search-input:hover {
    box-shadow: 0 0 0 2px #494949;
}

.search-input:focus {
    box-shadow: 0 0 0 2px #242424;
}

.search-div {
    display: flex;
    align-items: center;
}

.search-nav {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.search-icon-div {
    position: absolute;
    display: flex;
    right: 4px;
    padding: 0.5rem;
}

.search-icon-div span {
    cursor: pointer;
}

.invert-svg {
    filter: invert(100%);
}

.account-nav {
    display: flex;
    align-items: center;
}

.account-btn {
    user-select: none
}

.account-btn:hover {
    color: white;
}

.button-nav {
    display: flex;
    align-items: center;
}

.button-nav div {
    display: flex;
    gap: 2rem;
}

.search-shortcuts-div {
    display: flex;
    gap: 2rem;
    justify-content: center;
}

.search-shortcuts {
    display: flex;
    align-items: center;
}

.search-shortcuts:hover {
    color: white;
}
</style>