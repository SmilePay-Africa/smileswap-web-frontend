// Login
import Login from '@/modules/App/Auth/LoginFlow/Login.vue'
import SecretPin from '@/modules/App/Auth/LoginFlow/SecretPin.vue'

import WelcomeScreen from '@/modules/App/Auth/WelcomeScreen.vue'

// Register 
import Register from '@/modules/App/Auth/RegisterFlow/Register.vue'
import SendOTP from '@/modules/App/Auth/RegisterFlow/SendOTP.vue'
import VerifyOTP from '@/modules/App/Auth/RegisterFlow/VerifyOTP.vue'
import IntroPage from '@/modules/App/Auth/RegisterFlow/IntroPage.vue'
import KYCIntroPage from '@/modules/App/Auth/RegisterFlow/KYCIntroPage.vue'
import KYC from '@/modules/App/Auth/kyc.vue'

const routes = [
  // Login Routes 
  {
    path: '/',
    redirect: '/login',
    meta: {
      layout: 'Auth',
      requiresAuth: false
    }
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'Auth',
      requiresAuth: false
    }
  },

  {
    path: '/login/secret-pin',
    name: 'secret-pin',
    component: SecretPin,
    meta: {
      layout: 'Auth',
      requiresAuth: false
    }
  },

  {
    path: '/auth/welcome-screen',
    name: 'welcome-screen',
    component: WelcomeScreen,
    meta: {
      layout: 'Auth',
      requiresAuth: false,
      isInfoPage: true
    }
  },

  // Registration Routes 
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      layout: 'Auth',
      requiresAuth: false
    }
  },

  {
    path: '/register/verify-otp',
    name: 'verify-otp',
    component: VerifyOTP,
    meta: {
      layout: 'Auth',
      requiresAuth: false
    }
  },

  {
    path: '/register/intro-page',
    name: 'intro-page',
    component: IntroPage,
    meta: {
      layout: 'Auth',
      requiresAuth: false,
      isInfoPage: true
    }
  },

  {
    path: '/register/kyc-intro',
    name: 'KYC-intro',
    component: KYCIntroPage,
    meta: {
      layout: 'Auth',
      requiresAuth: false,
      isInfoPage: true
    }
  },

  {
    path: '/register/send-otp',
    name: 'send-otp',
    component: SendOTP,
    meta: {
      layout: 'Auth',
      requiresAuth: false
    }
  },

  {
    path: '/register/kyc',
    name: 'kyc',
    component: KYC,
    meta: {
      layout: 'Auth',
      requiresAuth: false
    }
  },
]

export default routes
