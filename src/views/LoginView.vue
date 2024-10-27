<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { RouterLink } from 'vue-router';

</script>
<template>
    <HeaderComponent/>
    <main>
        <div class="label">
        <section class="img">
            <span class="material-symbols-outlined">lock</span>
        </section>
        <section>
            <h3>Já tem uma conta?</h3>
            <p>Informe os dados abaixo para acessá-la</p>
        </section>
        <form>
            <div class="row">
                <input type="email" id="email" name="email" placeholder="E-mail*" required>
            </div>
            <div class="row">
                <input type="password" id="password" name="password" placeholder="Senha*" required>
            </div>
            <div class="checkbox-row">
                <label>
                    <div>
                    <input type="checkbox" id="remember_me" name="remember_me">
                    </div>
                    <p>Lembrar meus dados</p>
                </label>
            </div>
            <button type="submit" class="submit-button">Acessar conta</button>
            <RouterLink to="/auth/forgot-password" class="back-button">Esqueci minha senha</RouterLink>
        </form>
    </div>
    <div class="label">
        <section class="img">
            <span class="material-symbols-outlined">person_add</span>
        </section>
        <section>
            <h3>Novo Cliente</h3>
            <p>Criar uma conta é fácil! Informe seus dados e uma senha para aproveitar todos os beneficios de ter uma conta.</p>
        </section>
        <section class="btn">
            <RouterLink to="/auth/register" class="submit-button">Cadastre-se</RouterLink>
        </section>
    </div>
    </main>
    <FooterComponent/>
</template>

<style scoped>

    main {
        display: flex;
        justify-content: center;
        gap: 8rem;
        flex-wrap: wrap;
    }

    .btn {
        display: flex;
        width: 90%;
    }
    form {
        width: 90%;
    }

    .img {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        margin-bottom: 1rem;
    }

    .img span {
        user-select: none;
        color: black;
        background-color: #1B91BF;
        padding: 2rem;
        font-size: 50px;
        border-radius: 50%;
    }

    .material-symbols-outlined {
        font-variation-settings: 
        'FILL' 0, 
        'wght' 400, 
        'GRAD' 0, 
        'opsz' 24;
    }
    
    .label {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
        margin: 80px 0;
        padding: 20px;
        align-items: center;
        font-family: 'Inter', sans-serif;
        text-align: center;
        background-color: #f8f9fa;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        flex: 1;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin: 5px 0;
        font-family: 'Inter', sans-serif;
        background-color: #fff;
        box-sizing: border-box;
    }

    .row {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        flex-wrap: wrap;
    }

    input[type="checkbox"] {
        width: 20px;
        height: 20px;
    }

    .checkbox-row {
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: center;
        width: 100%;
        margin: 5px 0;
        font-size: 0.9rem;
    }

    .checkbox-row label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .checkbox-row p {
        margin: 0;
        font-size: 13px
    }

    .checkbox-row input[type="checkbox"] {
        cursor: pointer
    }

    .submit-button {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        width: 100%;
        padding: 10px;
        margin-top: 15px;
        background-color: #1B91BF;
        color: black;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-decoration: none;
    }

    .submit-button:hover {
        background-color: #16799f;
    }

    .back-button {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        padding: 10px;
        margin-top: 15px;
        color: black;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        display: block;
    }

    .back-button:hover {
        background-color: #bfbfbf;
    }
    @media (max-width: 600px) {
        .label {
            margin: 60px 20px;
            padding: 15px;
        }

        .row {
            flex-direction: column;
        }
    }
</style>
