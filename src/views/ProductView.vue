<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import listComponent from '@/components/listComponent.vue';
</script>
<template>
    <HeaderComponent />
    <main>
        <div class="model">
            <div class="product-miniature-div">
                <div v-for="i in ['', '', '', '']" :key="i" class="product-miniature">
                    <img src="/celular.png">
                </div>
            </div>
            <div class="product-img">
                <img src="/celular.png">
            </div>
        </div>
        <div class="model">
            <div class="product-info">
                <h1>Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM</h1>
                <div class="product-info-classification">
                    <p>4.5</p>
                    <div class="product-info-classification-stars">
                        <span v-for="i in ['', '', '', '']" :key="i"
                            class="material-symbols-outlined star-notalive">star</span>
                        <span class="material-symbols-outlined star-notalive">star_half</span>
                    </div>
                    <p class="product-info-classification-itens">(59665)</p>
                </div>
                <div class="price">
                    <span class="old-price">R$ 1899,00</span>
                    <p>R$ 1669,00
                        <span class="promotion">7%OFF</span>
                    </p>
                </div>

                <div class="product-options-div">
                    <p>Cor: <b>Azul-escuro</b></p>
                    <div class="product-options">
                        <div v-for="i in ['', '', '']" :key="i" class="product-option">
                            <img src="/celular.png">
                        </div>
                        <div class="product-option activate">
                            <img src="/celular.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="model table-model">
            <div class="table">
                <div class="stock">
                    <p>Estoque disponivel</p>
                    <span class="stock-quantity">
                        Quantidade:
                        <select>
                            <option>1 unidade</option>
                        </select>
                    </span>
                </div>
                <div class="buy-now">
                    <p>Comprar agora</p>
                </div>
                <div class="add-cart">
                    <p>Adicionar ao carrinho</p>
                </div>
                <div class="gogs-div">
                    <span class="gogs">
                        <span class="material-symbols-outlined">undo</span>
                        <p><b>Devolução gratis.</b> Você tem 30 a partir da data de recebimento.</p>
                    </span>
                    <span class="gogs">
                        <span class="material-symbols-outlined fill">verified_user</span>
                        <p><b>Compra Garantida.</b> receba o produto que está esperando ou devolvemos o dinheiro.</p>
                    </span>
                    <span class="gogs">
                        <span class="material-symbols-outlined fill">workspace_premium</span>
                        <p>12 meses de garantia da fábrica.</p>
                    </span>
                </div>
            </div>

        </div>
        <div class="other">
            <div class="desc">
                <h1>Descrição</h1>
                <pre>Galaxy A15

Tela super viva e brilhante.

A tela Super AMOLED de 6,5 polegadas do Galaxy A15 traz uma nitidez vibrante mesmo sob luz solar
direta com o Vision Booster, rolagem suave e taxa de atualização aprimorada de 90 Hz, além de brilho
melhorado de até 800 nits e conforto durante todo o dia com a luz azul reduzida graças ao Eye
Comfort Shield.

Simplicidade equilibrada.

Projetado para ser complete, o Galaxy A15 exibe sua estética refinada por meio de uma estrutura
intuitiva, uma capa traseira brilhante e um layout de câmera organizado.</pre>
            </div>
            <div class="table other-table" style="gap: 0.25rem !important">
                <h2>Meios de pagamento</h2>
                <p>Catões de crédito</p>
                <div class="options">
                    <img src="@/assets/images/credito.png">
                </div>
                <p>Cartões de débito</p>
                <div class="options">
                    <img src="@/assets/images/debito.png">
                </div>
                <p>Pix</p>
                <div class="options">
                    <img src="@/assets/images/piquiz.png">
                </div>
                <p>Boleto bancário</p>
                <div>
                    <img src="@/assets/images/boleto.png">
                </div>
            </div>
        </div>
        <div class="relationed-div">
            <listComponent title="Produtos relacionados" :itens="[
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', price: '1699.00', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
            ]" />
        </div>
        <div class="more-div">
            <listComponent title="Quem viu este produto também comprou" :itens="[
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', price: '1699.00', to: '/product' },
                { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
            ]" />
        </div>
    </main>
    <FooterComponent />
</template>
<style scoped>
.other {
    display: flex;
    width: 100%;
}

.other-table {
    flex: 1;
    margin: 1rem 0.8rem 0 0 !important;
}

.desc {
    font-family: 'Inter', sans-serif;
    margin: 2rem 0 0 2.5rem;
    flex: 2.55;
}

.desc h1 {
    margin: 1rem 0;
    font-weight: 500;
}

.desc pre {
    margin: 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
}

.relationed-div {
    margin: 1rem 0.8rem;
    border: 1px solid #909090;
}

.more-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 0 0;

    background-color: #D9D9D9;
}

.more-div .card {
    border-top: 3rem solid #D9D9D9;
    background-color: #D9D9D9;
    padding: 0;
}

.card div {
    background-color: white !important;
}

.product-options-div {
    margin-top: 4rem;
}

.product-options-div p {
    margin: 0.75rem 0;
    font-size: 14px;
}

.product-option.active {
    border: 2px solid #1B91BF;
}

.product-option {
    border: 2px dotted #909090;
    display: flex;
    padding: 0.15rem;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
}

.product-option img {
    width: 50px;
    height: 50px;
    object-fit: contain;
}

.product-options {
    display: flex;
    gap: 1rem;
}

.table-model {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.table-model p {
    margin: 0.5rem;
}

.table {
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 1rem 0 0;
    padding: 1rem;
    border: 1px solid #909090;
    border-radius: 4px;
    flex: 1;
    width: 87%;
}

.table h2 {
    font-size: 1.25rem;
    margin: 0;
}

.options {
    display: flex;
    gap: 0.5rem;
}

.options img {
    height: 75px;
    object-fit: contain;
}

.stock {
    display: flex;
    flex-direction: column;
}

.stock p {
    font-weight: 700;
    font-size: 0.75rem;
    margin: 0;
    color: #007505;
}

.gogs {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.gogs p {
    font-size: 0.75rem;
    margin: 0;
}

.gogs-div {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.stock-quantity {
    display: flex;
    align-items: center;
    padding: 0.25rem 0rem;
}

.stock-quantity select {
    cursor: pointer;
    border: none;
    font-weight: 700;
}

.buy-now {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    background-color: #3483FA;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
}

.buy-now:hover {
    box-shadow: 0 0 5px 1px #909090;
}

.buy-now p {
    margin: 0;
}

.add-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    background-color: #D6E6FE;
    color: #1D75FF;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
}

.add-cart:hover {
    box-shadow: 0 0 5px 1px #909090;
}

.add-cart p {
    margin: 0;
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
    font-weight: 600;
}

.price {
    margin-top: 1.5rem;
}

.product-info-classification {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    letter-spacing: 0;
}

.product-info-classification p {
    font-weight: 600;
    font-size: 0.75rem;
    color: #686868;
}

.product-info-classification-stars {
    display: flex;
}

.product-info-classification-stars span {
    letter-spacing: -6px;
}

.product-info-classification span {
    font-weight: 300;
}

.product-info-classification-itens {
    margin-left: 0.25rem;
    font-size: 0.75rem;
    color: #686868;
}

.star-notalive {
    color: #3483FA;
    font-variation-settings:
        'FILL' 1,
        'wght' 200,
        'GRAD' 1000,
        'opsz' 24;
}

.fill {
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 1000,
        'opsz' 24;
}

main {
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 8px;
    max-width: 1200px;
    gap: 0.75rem;
}

.model {
    font-family: 'Inter', sans-serif;
    flex: 1;
    display: flex;
    margin: 2rem 0;
    align-items: start;

}

.product-info h1 {
    margin-top: 1rem !important;
    font-size: 1rem;
    margin: 0;
}

.product-img {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-img img {
    width: 350px;
    height: 400px;
    object-fit: contain;
}

.product-miniature-div {
    display: flex;
    padding: 0.5rem;
    margin: 1rem 0.5rem 2rem 1.5rem;
    flex-direction: column;
    border-right: 1px solid #909090;
    gap: 1rem;
}

.product-miniature {
    border: 1px solid #909090;
    display: flex;
    padding: 0.15rem;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
}

.product-miniature:hover {
    border: 1px solid #1B91BF;
}

.product-miniature-div img {
    width: 50px;
    height: 50px;
    object-fit: contain;
}
</style>