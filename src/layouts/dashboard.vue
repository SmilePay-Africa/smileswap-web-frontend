<template>
  <div class="">
    <app-header class="lg:block md:block hidden sticky top-0 z-10" />
    <top-header :menu="menu" class="lg:hidden md:hidden sticky top-0 block z-10" />
    <div class="lg:block md:block hidden">
      <app-drawer :menu="menu" />
    </div>
    <div id="main" class="lg:ml-[300px] md:ml-[300px]">
      <div class="pb-28 px-5 mt-6">
        <div v-if="isSubPage" class="flex items-center gap-2 mb-4">
          <span class="back-button bg-gray-100" role="button" @click="$router.go(-1)">
            <i-icon icon="ic:baseline-arrow-back" width="20px" />
          </span>

          <div>
            <small class="font-light text-xs block">Go Back</small>
            <h6 class="mb-0 text-sm font-semibold capitalize" style="font-weight: 500">
              {{ subRouteName }}
            </h6>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import AppDrawer from '@/components/navigation/AppDrawer.vue'
import AppHeader from '@/components/navigation/AppHeader.vue'
import TopHeader from '@/components/navigation/TopHeader.vue'
export default {
  components: { AppDrawer, AppHeader, TopHeader },
  name: 'DashboardLayout',
  data() {
    return {
      menu: [
        {
          title: 'Dashboard',
          icon: 'majesticons:home',
          url: '/vendor/dashboard',
          parent: 'vendor-dashboard'
        },
        {
          title: 'Products',
          icon: 'typcn:th-list',
          url: '/vendor/products',
          parent: 'vendor-products'
        },
        {
          title: 'Orders',
          icon: 'fluent-mdl2:reservation-orders',
          url: '/vendor/orders',
          parent: 'vendor-orders'
        },
        {
          title: 'Transactions',
          icon: 'clarity:list-solid',
          url: '/vendor/transactions',
          parent: 'vendor-transactions'
        },
        {
          title: 'Payouts',
          icon: 'material-symbols:payments',
          url: '/vendor/payouts',
          parent: 'vendor-payouts'
        },
        {
          title: 'Settings',
          icon: 'material-symbols:settings',
          url: '/vendor/settings',
          parent: 'vendor-settings'
        }
      ]
    }
  },

  methods: {
    getUser() {
      this.$auth
        .getProfile()
        .then((res) => {
          console.log(res)
          this.$store.commit('auth/setUser', res.user)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    getAllCategories() {
      this.loading = true
      this.$config
        .getCategories()
        .then((res) => {
          this.categories = res.categories
          this.$store.commit('auth/setCategories', res.categories)
        })
        .catch((err) => {
          return err
        })
        .finally(() => {
          this.loading = false
        })
    },
    getSubCategories() {
      this.loading = true
      this.$config
        .getSubCategories()
        .then((res) => {
          let data = res.sub_categories
          this.$store.commit('auth/setSubCategories', data)
        })
        .catch((err) => {
          return err
        })
        .finally(() => {
          this.loading = false
        })
    },
    getAllTags() {
      this.loading = true
      this.$config
        .getTags()
        .then((res) => {
          let data = res.tags
          this.$store.commit('auth/setTags', data)
        })
        .catch((err) => {
          return err
        })
        .finally(() => {
          this.loading = false
        })
    }
  },

  beforeMount() {
    this.getAllCategories()
    this.getSubCategories()
    this.getAllTags()
    this.getUser()

    // const user = this.$store.getters['auth/getUser']
  },

  created() {
    if (this.user.role === 'vendor') {
      if (this.user.shop === null) {
        this.$router.push('/vendor/create-shop')
      }
    } else if (this.user.role === 'user') {
      this.$router.push('/user')
    }
  },

  computed: {
    routeName() {
      return this.$route.meta.name
    },

    routeParent() {
      return this.$route.meta.header
    },

    user() {
      return this.$store.getters['auth/getUser']
    },

    isSubPage() {
      return this.$route.meta.isSubPage
    },

    subRouteName() {
      return this.$route.meta.subName
    }
  }
}
</script>

<style></style>
