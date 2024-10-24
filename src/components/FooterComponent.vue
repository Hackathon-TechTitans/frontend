<template>
    <footer class="footer">
        <div class="item">
            <p>Deixe-nos ajudar você</p>
            <a href="">Sua conta</a>
            <a href="">Frete e prazo de entrega</a>
            <a href="">Devoluções e reembolsos</a>
            <a href="">Gerencie seu conteudo e dispositivos</a>
            <a href="">Ajuda</a>
            <RouterLink class="diff" to="/"><img src="@/assets/images/logo.svg" alt="Logo" height="50"></RouterLink>
        </div>
        <div class="item">
            <p>Conheça-nos</p>
            <a href="">Sobre a MarketHub</a>
            <a href="">Comunicados à imprensa</a>
            <a href="">Comunidade</a>
            <a href="">Acessibilidades</a>
        </div>
        <div class="item">
            <p>Dúvidas</p>
            <a href="">Entrega</a>
            <a href="">Garantia</a>
            <a href="">Como comprar</a>
            <a href="">Formas de Pagamento</a>
        </div>
        <div class="item">
            <p>Contato</p>
            <a href="">Comprar</a>
            <a href="">Vender</a>
            <a href="">Solução de problemas</a>
            <a href="">Segurança</a>
        </div>
        <div class="last">
            <span class="material-symbols-outlined">verified_user</span>
            <h3>Segurança, do início ao fim</h3>
            <p>Você não gostou do que comprou?
                Devolva! No MarketHub não há
                nada que você não possa fazer,
                porque você está sempre protegido.</p>
        </div>
    </footer>
</template>
<style scoped>
.material-symbols-outlined {
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

.footer {
    font-family: 'Inter', sans-serif;
    display: flex;
    justify-content: center;
    background-color: #1B91BF;
    color: black;
    padding: 20px;
    gap: 3rem;
}

.item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.item p {
    font-weight: bold;
}

.item a {
    color: black;
    text-decoration: none;
}

.item a:hover {
    color: white;
}

.diff {
    margin-top: 1rem;
}

.last {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    text-align: center;
}
.last h3 {
    margin: 0;
}
.last p {
    margin: 0;
}

.last span {
    font-size: 6rem;
}
</style>