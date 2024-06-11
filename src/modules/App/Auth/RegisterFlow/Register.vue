<template>
  <div class="">
    <h5 class="font-semibold text-center">Choose Account Type</h5>
    <h6
      class="text-center font-regular text-grayText text-[11px]"
      v-text="'Please pick an Account type to continue'"
    ></h6>

    <div class="flex flex-col gap-4 mt-5">
      <span class="capitalize flex items-center justify-between px-[18px] py-[16px] border-borderBg border rounded-[10px]" :class="{'bg-borderInput' : item === selectedType}"  v-for="item in ['personal', 'merchant']" :key="item">
        <span class="text-capitalize">
          {{ item }}
        </span>
        <input type="radio" class="accent-primary"  @click="selectType(item)" role="button" :value="selectedType" :name="selectedType">
      </span>
    </div>

    <div class="text-center mt-4">
      <button
      @click="onSubmit"
        class="brand-btn w-full"
        :disabled="isLoading"
        :class="[isLoading ? 'bg-gray400 text-gray600' : 'brand-primary']"
      >
        Continue
      </button>
    </div>
    <div class="mt-4">
      <span class="flex justify-center gap-1 text-[12px]">
        <span class="font-medium text-grayText">Already have an account?</span>
        <router-link class="font-semibold text-secondary" to="/login">Login here</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      typePassword: true,
      selectedType: 'personal'
    }
  },

  methods: {
    onSubmit() {
      this.$router.push('/register/intro-page')
    },

    selectType(item) {
      this.selectedType = item
    }
  }
}
</script>

<style></style>
