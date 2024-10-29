import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const users = ref([])
  const currentUser = ref(null)

  const isLoggedIn = computed(() => currentUser.value !== null)

  function registerUser({
    first_name,
    family_name,
    cpf,
    birthdate_day,
    birthdate_month,
    birthdate_year,
    email,
    phone,
    password,
    password_confirm,
    marketing_communication,
    terms_agreement
  }) {
    if (!terms_agreement) throw new Error('É necessário aceitar os termos para se registrar.')
    if (password !== password_confirm) throw new Error('As senhas não coincidem.')

    const userExists = users.value.some((user) => user.email === email || user.cpf === cpf)
    if (userExists) throw new Error('Usuário com este e-mail ou CPF já existe.')

    const newUser = {
      id: Date.now(),
      first_name,
      family_name,
      cpf,
      birthdate: `${birthdate_day}/${birthdate_month}/${birthdate_year}`,
      email,
      phone,
      password,
      marketing_communication,
      terms_agreement
    }
    users.value.push(newUser)

    salva()
    return newUser
  }

  function loginUser(email, password) {
    const user = users.value.find((user) => user.email === email && user.password === password)
    if (!user) throw new Error('Credenciais inválidas.')

    currentUser.value = user
    salva()
  }

  function logoutUser() {
    currentUser.value = null
    salva()
  }

  function salva() {
    localStorage.setItem('users', JSON.stringify(users.value))
    localStorage.setItem('currentUser', JSON.stringify(currentUser.value))
  }

  function init() {
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]')
    const savedCurrentUser = JSON.parse(localStorage.getItem('currentUser'))

    users.value = savedUsers
    currentUser.value = savedCurrentUser
  }

  init()

  return {
    users,
    currentUser,
    isLoggedIn,
    registerUser,
    loginUser,
    logoutUser
  }
})
