<template>
  <div class="">
    <h5 class="font-semibold text-center">KYC Teir 1</h5>
    <h6
      class="text-center font-regular text-grayText text-[11px]"
      v-text="'Complete the following steps to continue'"
    ></h6>

    <div class="flex flex-col gap-4 mt-5">
      <span
        class="capitalize flex items-center justify-between px-[18px] py-[16px] border-borderBg border rounded-[10px]"
        v-for="(item, i) in verifications"
        :key="i"
        role="button"
      >
        <span class="flex items-center gap-2">
          <i-icon :icon="item.icon" />
          <span class="text-capitalize text-sm">
            {{ item.label }}
          </span>
        </span>
        <i-icon icon="uis:angle-right-b" class="text-grayText"/>
      </span>
    </div>

    <div class="text-center mt-6">
      <button
        @click="onSubmit"
        class="brand-btn w-full"
        :disabled="isLoading"
        :class="[isLoading ? 'bg-gray400 text-gray600' : 'brand-primary']"
      >
        Continue
      </button>
    </div>

    <!-- Modals for Verifications  -->
     
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      typePassword: true,
      selectedType: 'personal',
      verifications: [
        { label: 'BVN verification', icon: 'material-symbols-light:shield-outline' },
        { label: 'Complete Bio Data', icon: 'tdesign:user-1' },
        { label: 'Authentication', icon: 'uil:key-skeleton' }
      ]
    }
  },

  methods: {
    onSubmit() {
      this.$router.push('/auth/welcome-screen')
    },

    selectType(item) {
      this.selectedType = item
    }
  }
}
</script>

<style></style>
