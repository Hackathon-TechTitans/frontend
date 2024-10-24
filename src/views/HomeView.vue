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
        <cardComponent />
        <cardComponent />
        <cardComponent />
        <cardComponent />
        <cardComponent />
      </section>
      <section class="buttons-group">
        <soloCardComponent />
        <listComponent />
      </section>
      <section class="buttons-group">
        <longCardComponent />
        <longCardComponent />
      </section>
      <section class="buttons-group">
        <listComponent />
      </section>
      <section class="buttons-group">
        <listComponent />
      </section>
      <section class="buttons-group">
        <listComponent />
      </section>
      <section class="buttons-group">
        <listItensComponent />
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