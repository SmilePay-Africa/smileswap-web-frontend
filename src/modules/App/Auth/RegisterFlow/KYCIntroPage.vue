<template>
    <div class="text-center">
      <h1 class="text-5xl header-font font-bold leading-tightest">
        Let’s get to <br>
know you better :)
      </h1>
      <button class="brand-btn w-5/12 mx-auto brand-primary mt-4" @click="$router.push('/register/kyc')">
       Let's go
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
  