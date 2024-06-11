<template>
  <div >
    <div class="flex flex-col justify-center h-screen" >
      <div class="h-[60px] md:grid grid-container lg:grid hidden">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        class="border-t border-b border-dashed border-borderBg lg:px-[60px] md:px-[60px] lg:py-0 md:py-0 px-6 py-6"
        style="height: calc(100vh - 120px)"
      >
        <div
          class="lg:border-dashed md:border-dashed border-none  border-borderBg border-l border-r h-full content flex items-center justify-center"
        >
          <div :class="isInfoPage ? 'lg:w-6/12 md:7/12 w-11/12' : 'lg:w-4/12 md:4/12 w-full'">
            <img src="@/assets/BrandImg/logo.svg" class="mx-auto mb-3 w-32" alt="" v-if="!isInfoPage"/>
            <div :class="isInfoPage ? '' : 'border border-borderBg border-dashed rounded-xl py-6 px-8'">
              <slot />
            </div>

            <span class="text-[13px] flex justify-center mt-2 items-end font-semibold" v-if="!isInfoPage">
              Terms of Use
              <i-icon icon="ph:dot-bold" />
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
      <div class="h-[60px]  md:grid grid-container lg:grid hidden">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.name
    },
    isInfoPage(){
      return this.$route.meta.isInfoPage
    }
  }
}
</script>

<style>
.grid-container {
  grid-template-columns: 60px 250px auto 250px 60px;
}

.grid-container div:not(:last-child) {
  border-right: 1px dashed var(---border-color);
}

.content {
  box-shadow: 4px 7px 134px 39px rgba(0, 0, 0, 0.03);
  -webkit-box-shadow: 4px 7px 134px 39px rgba(0, 0, 0, 0.03);
  -moz-box-shadow: 4px 7px 134px 39px rgba(0, 0, 0, 0.03);
}

@media (max-width: 540px) {
  .content {
    box-shadow: unset;
  -webkit-box-shadow: unset;
  -moz-box-shadow: unset;
  }
}
</style>
