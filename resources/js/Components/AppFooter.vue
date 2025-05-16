<template>
    <div class="subscribe">
      <input 
        type="email" 
        placeholder="Email"
        v-model="email"
        :class="{ 'input-error': error }"
        @keypress.enter="validateEmail"
      >
      <button @click="validateEmail">OK</button>
      <div class="form-message" :class="messageType">{{ message }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        message: '',
        messageType: '',
        error: false
      }
    },
    methods: {
      validateEmail() {
        this.resetForm()
        
        if (!this.email || !this.isValidEmail(this.email)) {
          this.showError("Пожалуйста, введите корректный email адрес")
          return
        }
  
        this.showSuccess("Спасибо за подписку!")
        this.email = ""
      },
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
      },
      showError(msg) {
        this.error = true
        this.message = msg
        this.messageType = 'error'
      },
      showSuccess(msg) {
        this.message = msg
        this.messageType = 'success'
        setTimeout(this.resetForm, 3000)
      },
      resetForm() {
        this.error = false
        this.message = ''
        this.messageType = ''
      }
    }
  }
  </script>