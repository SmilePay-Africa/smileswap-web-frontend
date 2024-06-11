<template>
    <div class="">
        <img src="@/assets/BrandImg/placeholder.jpeg" class="w-16 h-16 mx-auto my-4 rounded-full" alt="">
      <h5 class="font-semibold text-center">Welcome back, Chief</h5>
      <h6
        class="text-center font-regular text-grayText text-[11px]"
        v-text="'Please enter your secret pin to have access to your account :)'"
      ></h6>
      <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-3 mt-6">
        <div>
          <vField name="password" v-slot="{ field }" rules="required">
            <VuePincodeInput
              v-model="pincode"
              input-class="w-12 h-12 text-2xl font-semibold rounded-lg bg-borderBg border-borderBg"
              success-class=""
              spacing-class=""
              :digits="6"
              autofocus
              v-bind="field"
            />
          </vField>
          <ErrorMessage name="password" class="text-xs text-error"></ErrorMessage>
        </div>
  
        <div class="text-center mt-3">
          <button
            class="brand-btn w-full"
            :disabled="isLoading || !meta.valid"
            :class="[
              isLoading
                ? 'bg-gray400 text-gray600'
                : meta.valid
                  ? 'brand-primary'
                  : 'bg-gray400 text-gray600'
            ]"
          >
            Continue
          </button>
        </div>
        <div class="mt-3">
          <span class="flex justify-center gap-1 text-[12px]">
            <span class="font-medium text-grayText">Don't have an account?</span>
            <router-link class="font-semibold text-secondary" to="/register"
              >Register here</router-link
            >
          </span>
        </div>
      </vForm>
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
        this.$router.push('/auth/welcome-screen')
      }
    }
  }
  </script>
  
  <style></style>
  