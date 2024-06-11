<template>
    <div class="">
      <h5 class="font-semibold text-center" v-text="`Enter ${type === 'email' ? 'Email Address' : 'Phone Number' } `"></h5>
      <h6
        class="text-center font-regular text-grayText text-[11px]"
        v-text="`Enter your ${type === 'email' ? 'Email Address' : 'Phone no' } :) to continue`"
      ></h6>
      <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-3 mt-4">
        <div>
          <vField
            :name="type === 'email' ? 'email' : 'identifier'"
            class="input"
            :placeholder="type === 'email' ? 'Enter Email Address' : 'Enter Valid Phone Number'"
            :type="type === 'email' ? 'email' : 'tel'"
            :rules="type === 'email' ? 'email' : 'required'"
          />
          <ErrorMessage :name="type === 'email' ? 'email' : 'identifier'" class="text-xs text-error"></ErrorMessage>
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
            Send OTP
          </button>
        </div>
        
        <div class="mt-3">
          <span class="flex justify-center gap-1 text-[12px]">
            <span class="font-medium text-grayText" @click="changeType(type === 'email' ? 'phone' : 'email')" role="button">
                {{ type === 'email' ? 'Use Phone Number Instead' : 'Use Email Address Instead' }}
            </span>
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
        typePassword: true,
        type: 'email'
      }
    },
  
    methods: {
      onSubmit(values) {
        let data = JSON.stringify(values)
        this.$router.push(`/register/verify-otp?otp_type=${this.type}&otp_ref=${data}`)
      },

      changeType(e) {
        this.type = e
      }
    }
  }
  </script>
  
  <style></style>
  