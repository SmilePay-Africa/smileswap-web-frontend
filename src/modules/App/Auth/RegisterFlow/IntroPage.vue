<template>
    <div class="text-center">
      <h1 class="text-5xl header-font font-bold leading-tightest">
        We’re almost done with your signup, just stay with us a little longer :)
      </h1>
      <button class="brand-btn w-5/12 mx-auto brand-primary mt-4" @click="$router.push('/register/send-otp')">
        Continue
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: false,
        typePassword: true
      }
    },
  
    methods: {
      
    }
  }
  </script>
  
  <style></style>
  