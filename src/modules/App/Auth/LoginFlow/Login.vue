<template>
  <div class="">
    <h5 class="font-semibold text-center">Login</h5>
    <h6
      class="text-center font-regular text-grayText text-[11px]"
      v-text="'Please enter you login details to have access to your account :)'"
    ></h6>
    <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-3 mt-4">
      <div>
        <vField
          name="identifier"
          class="input"
          placeholder="Phone no./email/smiletag"
          type="text"
          rules="required"
        />
        <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
      </div>

      <div>
        <vField name="password" v-slot="{ field }" rules="required">
          <div class="input-field">
            <input
              :type="typePassword ? 'password' : 'text'"
              name="password"
              id="password"
              placeholder="Password"
              v-bind="field"
            />
            <span class="password-iccon" role="button" @click="typePassword = !typePassword">
              <i-icon
                :icon="typePassword ? 'tabler:eye' : 'gridicons:not-visible'"
                class="form-icon"
              />
            </span>
          </div>
        </vField>
        <ErrorMessage name="password" class="text-xs text-error"></ErrorMessage>
      </div>

      <div class="">
        <router-link class="text-[12px] font-semibold text-secondary" to="/forgot-password"
          >Forgot Password?</router-link
        >
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
          Log In
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
      this.$router.push('/login/secret-pin')
    }
  }
}
</script>

<style></style>
