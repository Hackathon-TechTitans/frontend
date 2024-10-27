<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import cardComponent from '@/components/cardComponent.vue';
import listComponent from '@/components/listComponent.vue';
import soloCardComponent from '@/components/soloCardComponent.vue';
import longCardComponent from '@/components/longCardComponent.vue';
import listItensComponent from '@/components/listItensComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
  <HeaderComponent />
  <div class="bg">
    <main>
      <section class="buttons-group" style=" padding-top: 6rem !important;">
        <cardComponent img="/locate.png" title="Insira sua localização" desc="Confira os custos e prazos de entrega"
          btnText="Inserir localização" to="/product" />
        <cardComponent img="/locate.png" title="Insira sua localização" desc="Confira os custos e prazos de entrega"
          btnText="Inserir localização" to="/product" />
        <cardComponent img="/locate.png" title="Insira sua localização" desc="Confira os custos e prazos de entrega"
          btnText="Inserir localização" to="/product" />
        <cardComponent img="/locate.png" title="Insira sua localização" desc="Confira os custos e prazos de entrega"
          btnText="Inserir localização" to="/product" />
        <cardComponent img="/locate.png" title="Insira sua localização" desc="Confira os custos e prazos de entrega"
          btnText="Inserir localização" to="/product" />
      </section>
      <section class="buttons-group">
        <soloCardComponent img="/televisao.png" title="Oferta imperdível"
          desc="Smart Tv Samsung 32'' Hd Tizen T4300 Preto" oldPrice="1899.00" price="1149.00" promotion="0.39"
          to="/product" />
        <listComponent :-more-to="'/product'" :-more-title="'Mostrar todas as ofertas'" :itens="[
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
        ]" />
      </section>
      <section class="buttons-group">
        <longCardComponent img="/televisao.png" title="Oferta imperdível" to="/product" toTitle="Ver mais" />
        <longCardComponent img="/televisao.png" title="Oferta imperdível" to="/product" toTitle="Ver mais" />
      </section>
      <section v-for="a in ['', '', '']" :key="a" class="buttons-group">
        <listComponent :-more-to="'/product'" :-more-title="'Mostrar todas as ofertas'" :itens="[
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', price: '1699.00', to: '/product' },
          { img: '/locate.png', title: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM', oldPrice: '1899.00', price: '1699.00', promotion: '0.07', to: '/product' },
        ]" />
      </section>
      <section class="buttons-group">
        <listItensComponent title="Categorias" :itens="[
          { img: '/locate.png', title: 'Smartphones', to: '/product' },
          { img: '/locate.png', title: 'Smartphones', to: '/product' },
          { img: '/locate.png', title: 'Smartphones', to: '/product' },
          { img: '/locate.png', title: 'Smartphones', to: '/product' },
          { img: '/locate.png', title: 'Smartphones', to: '/product' },
          { img: '/locate.png', title: 'Smartphones', to: '/product' },
          { img: '/locate.png', title: 'Smartphones', to: '/product' },
          { img: '/locate.png', title: 'Smartphones', to: '/product' },
        ]" />
      </section>
    </main>
    <FooterComponent />
  </div>
</template>
<style scoped>
.bg {
  background: linear-gradient(#1B91BF 30%, #d9d9d9 70%);
  height: calc(100% - 86px);
}

.buttons-group {
  display: flex;
  padding: 20px;
  gap: 1rem;
  justify-content: center;
  max-width: 1650px;
}

main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;
  margin: 0 auto;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
}

.buttons-group:last-child {
  margin-bottom: 5rem;
}
</style>