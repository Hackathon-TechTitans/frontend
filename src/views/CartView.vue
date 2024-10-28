<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>
<template>
    <HeaderComponent />
    <main>
        <section class="left-side">
            <div class="header">
                <div>
                    <span class="material-symbols-outlined">shopping_basket</span>
                    <span>Produto</span>
                </div>
                <button>
                    <span class="material-symbols-outlined">delete</span>
                    <span>Remover Todos os itens</span>
                </button>
            </div>

            <div class="product" v-for="i in ['', '', '']" :key="i">
                <div class="product-img">
                    <img src="/celular.png" alt="Product Image">
                </div>
                <div class="product-title">
                    <p>Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM</p>
                </div>
                <div class="product-quantity">
                    <span>Quantidade</span>
                    <div>
                        <span class="material-symbols-outlined product-quantity-arrow">chevron_left</span>
                        <span>1</span>
                        <span class="material-symbols-outlined product-quantity-arrow">chevron_right</span>
                    </div>
                </div>
                <div class="metric">
                    <div>
                        <p>Preço à vista:</p>
                        <span>R$ 1.499,00</span>
                    </div>
                    <button>
                        <span class="material-symbols-outlined">delete</span>
                        <span>Remover</span>
                    </button>
                </div>
            </div>
            <div class="discount">
                <div class="discount-input">
                    <input type="text" placeholder="Cupom de desconto">
                    <button>Aplicar Cupom</button>
                </div>
            </div>
        </section>

        <section class="right-side">
            <div class="rol">
                <div class="rol-title">
                    <span class="material-symbols-outlined unfill">description</span>
                    <p>Resumo</p>
                </div>
                <div>
                    <div class="col">
                        <p>Valor dos produtos: </p><span>R$ 4497</span>
                    </div>
                    <div class="col">
                        <p>Frete: </p><span>R$ 24</span>
                    </div>
                    <div class="col">
                        <p>Total </p><span>R$ 4521</span>
                    </div>
                </div>
            </div>
            <div class="rol">
                <div class="rol-title">
                    <span class="material-symbols-outlined unfill">local_shipping</span>
                    <p>Entrega</p>
                </div>
                <div class="col2">
                    <p>Selecione seu endereço:</p>
                    <select>
                        <option value="1">Rua 1, 123</option>
                        <option value="2">Rua 2, 456</option>
                    </select>
                    <button>Novo endereço</button>
                </div>
            </div>
            <div class="perso">
                <button>Ir para pagamento</button>
                <RouterLink>Continuar comprando</RouterLink>
            </div>
        </section>
    </main>
    <FooterComponent />
</template>
<style scoped>
.discount {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;

}

.discount-input {
    margin-top: 2rem;
    background-color: white;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    border-radius: 8px;
    border: 1px solid rgb(0, 0, 0, 0.4);
}

.discount-input input {
    padding: 0.5rem;
    border: 1px solid #909090;
    border-radius: 5px;
    min-width: 200px;
}

.discount-input button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #1B91BF;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.discount-input button:hover {
    background-color: #0077b6;
}

.rol {
    margin: 1rem 0;
    width: 85%;
    gap: 1rem;
}

.rol-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid #909090;
}

.col {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #909090;
    gap: 1rem;
}

.col p {
    margin: 0;
    font-weight: 400;
    color: rgb(0, 0, 0, 0.7);
    font-size: 14px
}

.col span {
    font-weight: 600;
    font-size: 14px;
}

.col2 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    border-bottom: 1px solid #909090;
}

.col2 p {
    margin: 0;
    font-weight: 400;
    color: rgb(0, 0, 0, 0.7);
    font-size: 14px;
    text-align: left;
}

.col2 select {
    padding: 0.4rem 0.5rem;
    cursor: pointer;
    border-radius: 6px;
    border: none;
    border-right: 5px solid white;
}

.col2 select:hover {
    box-shadow: 0 0 5px 1px #909090;
}

.col2 select:focus {
    box-shadow: 0 0 5px 1px #1B91BF;
    outline: none;
}

.col2 button {
    cursor: pointer;
    background: none;
    border: none;
    color: rgb(0, 0, 0, 0.7);
    text-align: left;
}

.col2 button:hover {
    color: #1B91BF;
}

.perso {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    border: 1px solid rgb(0, 0, 0, 0.3);
    padding: 1rem 2rem;
    border-radius: 8px;
    background-color: white;
    width: calc(85% - 4rem);
}

.perso button {
    cursor: pointer;
    background-color: #1B91BF;
    color: white;
    padding: 0.7rem;
    border: none;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 500;
}

.perso button:hover {
    background-color: #0077b6;
}

.perso a {
    cursor: pointer;
    color: #1B91BF;
    padding: 0.7rem;
    border: none;
    text-decoration: none;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 500;
}

.perso a:hover {
    color: #04344e;
}

button {
    user-select: none;
}

.metric {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    gap: 1rem;
    padding: 0.5rem;
}

.metric button {
    display: flex;
    align-items: center;
    background: none;
    color: #8B1A10;
    padding: 0.3rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

.metric button:hover {
    color: #420006;
}

.metric div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.1rem;
}

.metric div span {
    font-weight: 600;
}

.metric p {
    margin: 0;
    font-weight: 200;
    font-size: 13px;
}

.material-symbols-outlined {
    user-select: none;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

.unfill {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

.product-quantity {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 0.5rem;
}

.product-quantity div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.product-quantity-arrow {
    cursor: pointer;
}

.product-quantity-arrow:hover {
    color: #1B91BF;
}

.header {
    font-family: 'Inter', sans-serif;
    display: flex;
    padding: 0 0.5rem 0.5rem 0.5rem;
    border-bottom: 1px solid #909090;
    justify-content: space-between;
}

.header div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
}

.header button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #970000;
    color: white;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

.header button:hover {
    background-color: #6b0000;
}

.header button:active {
    background-color: #4d0000;
}

main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px 100px;
}

.left-side {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 3rem 3rem 3rem;
    font-family: 'Inter', sans-serif;
    flex: 2;
}

.right-side {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: 0;
    align-items: center;
    font-family: 'Inter', sans-serif;
    text-align: center;
    border-left: 1px solid #909090;
    flex: 1;
    gap: 1.5rem;
}

.product {
    overflow: hidden;
    margin: 1.2rem 0;
    border: 1.5px solid rgb(0, 0, 0, 0.5);
    border-radius: 8px;
    font-size: 12px;
    gap: 1rem;
    display: flex;
    justify-content: space-between;
}

.product-title {
    margin: 20px 0;
    font-weight: 600;
}

.product-img {
    display: flex;
    user-select: none;
}

.product-img img {
    height: 120px;
    width: 120px;
    object-fit: contain;
}
</style>
