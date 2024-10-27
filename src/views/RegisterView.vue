<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { RouterLink } from 'vue-router';

</script>
<template>
    <HeaderComponent/>
    <main>
        <section class="img">
            <span class="material-symbols-outlined">person_add</span>
        </section>
        <section>
            <h3>Criar minha conta</h3>
            <p>Informe os dados abaixo para criar sua conta</p>
        </section>
        <form>
            <div class="row">
                <input type="text" id="first_name" name="first_name" placeholder="Nome*" required>
                <input type="text" id="family_name" name="family_name" placeholder="Sobrenome*" required>
            </div>
            <div class="row">
                <input type="text" id="cpf" name="cpf" placeholder="CPF*" required>
                <p class="birthdate">Data de nascimento</p>
                <div class="birthdate-container">
                    <input class="birthdate" type="number" id="birthdate_day" name="birthdate_day" placeholder="Dia*" required>
                    <input class="birthdate" type="number" id="birthdate_month" name="birthdate_month" placeholder="Mês*" required>
                    <input class="birthdate" type="number" id="birthdate_year" name="birthdate_year" placeholder="Ano*" required>
                </div>
            </div>
            <div class="row">
                <input type="email" id="email" name="email" placeholder="E-mail*" required>
            </div>
            <div class="row"> 
                <input type="tel" id="phone" name="phone" placeholder="Telefone*" required>
            </div>
            <div class="row">
                <input type="password" id="password" name="password" placeholder="Senha*" required>
                <input type="password" id="password_confirm" name="password_confirm" placeholder="Confirme a senha*" required>
            </div>
            <div class="checkbox-row">
                <label>
                    <div>
                    <input type="checkbox" id="marketing_communication" name="marketing_communication">
                    </div>
                    <p>Aceito receber comunicação de marketing da MarketHub.</p>
                </label>
            </div>
            <div class="checkbox-row">
                <label>
                    <div>
                    <input type="checkbox" id="terms_agreement" name="terms_agreement" required>
                    </div>
                    <p>Estou ciente e CONCORDO com os termos de aceite e políticas de privacidade da MarketHub.</p>
                </label>
            </div>
            <button type="submit" class="submit-button">Registrar conta</button>
            <RouterLink to="/auth/login" class="back-button">Voltar para o login</RouterLink>
        </form>
    </main>
    <FooterComponent/>
</template>

<style scoped>
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
        font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    
    p.birthdate {
        margin: 0;
        margin-top: 5px;
        font-size: 13px;
        color: rgb(39, 39, 39);
        text-align: center;
        width: 100%;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
        margin: 80px auto;
        padding: 20px;
        align-items: center;
        font-family: 'Inter', sans-serif;
        text-align: center;
        background-color: #f8f9fa;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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

    input:hover {
        border-color: #1B91BF;    
    }
    .row {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        flex-wrap: wrap;
    }

    .birthdate-container {
        display: flex;
        gap: 0.5rem;
        width: 100%;
    }

    input.birthdate {
        flex: 1;
    }

    input[type="checkbox"] {
        width: 20px;
        height: 20px;
    }

    .checkbox-row {
        display: flex;
        align-items: center;
        text-align: left;
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
    }

    .submit-button:hover {
        background-color: #16799f;
    }

    .back-button {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        padding: 10px;
        margin-top: 15px;
        background-color: #d9d9d9;
        color: black;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-decoration: none;
        display: block;
    }

    .back-button:hover {
        background-color: #bfbfbf;
    }
    @media (max-width: 600px) {
        main {
            margin: 60px 20px;
            padding: 15px;
        }

        .row {
            flex-direction: column;
        }
    }
</style>
