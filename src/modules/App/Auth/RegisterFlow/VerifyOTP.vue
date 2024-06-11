<template>
  <div class="">
    <h5
      class="font-semibold text-center"
      v-text="`Verify ${type === 'email' ? 'Email Address' : 'Phone Number'} `"
    ></h5>
    <h6
      class="text-center font-regular text-grayText text-[11px]"
      v-text="`Enter OTP sent to your ${type === 'email' ? 'Email Address' : 'Phone no'} :)`"
    ></h6>
    <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-3 mt-6">
      <div>
        <vField name="password" v-slot="{ field }" rules="required">
          <VuePincodeInput
            v-model="pincode"
            input-class="w-12 h-12 text-2xl font-semibold rounded-lg bg-borderBg border-borderBg"
            success-class=""
            spacing-class=""
            :digits="4"
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
          {{ `Verify ${type === 'email' ? 'Email Address' : 'Phone Number'} ` }}
        </button>
      </div>

      <div class="text-center">
        <vue-countdown
          v-if="counting"
          :time="60000"
          @end="onCountdownEnd"
          v-slot="{ minutes, seconds, totalSeconds }"
        >
          <span
            class="text-sm font-medium"
            :class="{ 'tw-text-red-600': totalSeconds <= 10 }"
          >
            {{ '0' + minutes }}:{{ seconds < 10 ? `0${seconds}` : seconds }}
          </span>
        </vue-countdown>
      </div>

      <div class="mt-3" v-if="!counting">
        <span class="flex justify-center gap-1 text-[12px]">
          <span class="font-medium text-grayText">Didn't get OTP?</span>
          <a class="font-semibold text-secondary" role="button" @click="startCountdown">Resend</a>
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
      counting: true
    }
  },

  methods: {
    onSubmit() {
      this.$router.push('/register/kyc-intro')
    },

    startCountdown() {
      this.counting = true
    },

    onCountdownEnd() {
      this.counting = false
    }
  },

  computed: {
    type() {
      return this.$route.query.type
    }
  }
}
</script>

<style></style>
