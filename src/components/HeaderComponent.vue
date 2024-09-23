<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <header>
        <nav>
            <div> 
                <RouterLink to="/"><img src="@/assets/images/logo.png" alt="Vue logo" height="50"></RouterLink>
            </div>
        </nav>
        <nav class="search-nav">
            <div class="search-div">
                <input class="search-input" type="text" placeholder="O que você está procurando?">
                <div class="search-icon-div">
                    <img src="@/assets/icons/search.png" height="16px" width="16px">
                </div>
            </div>
        </nav>
        <nav class="account-nav">
            <div>
                <RouterLink>
                    <h3>MINHA CONTA</h3>
                    <p>Entrar/Cadastro</p>
                </RouterLink>
            </div>
        </nav>
    </header>
</template>
<style scoped>
    header {
        background-color: #1B91BF;
        color: black;
        padding: 1rem;
        display: flex;
        gap: 2.5rem;
        justify-content: center;
    }
    nav a {
        color: black;
        font-family: 'Inter', sans-serif;
        text-decoration: none;
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
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        border: none;
        font-family: 'Inter', sans-serif;
        outline: none;
        width: 40vw;
    }
    .search-div {
        display: flex;
        align-items: center;
    }
    .search-nav{
        position: relative;
    }
    .search-icon-div{
        position: absolute;
        display: flex;
        right: 8px;
        padding: 0.5rem;
    }
    .account-nav{
        display: flex;
        align-items: center;
    }
</style>