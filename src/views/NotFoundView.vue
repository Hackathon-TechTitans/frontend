<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
<template>
    <HeaderComponent/>
    <main>
       <h1>Pagina não encontrada</h1>
       <RouterLink to="/">Voltar para a página inicial</RouterLink>
    </main>
    <FooterComponent/>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
        height: 70vh;
    }
    h1 {
        font-size: 2rem;
        margin: 0;
    }
    a {
        color: #0080b3;
        text-decoration: underline;
        font-size: 1rem;
        }
</style>
