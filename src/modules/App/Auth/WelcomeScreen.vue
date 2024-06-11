<template>
  <div class="text-center">
    <h1 class="text-6xl header-font font-bold leading-tightest">
      You’re all set! <br />
      Welcome :)
    </h1>
    <button class="brand-btn w-5/12 mx-auto brand-primary mt-4" @click="$router.push('/app/dashboard')">
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
    onSubmit() {
      alert('Submitted')
    }
  }
}
</script>

<style></style>
