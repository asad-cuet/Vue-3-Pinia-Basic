import { defineStore } from 'pinia'
import {computed,reactive,ref} from 'vue'

export const userAuth2 = defineStore('auth2', () => {
  const isAuthenticated = ref(false)
  const user = ref({})

  const getUser=computed(()=>
    user.value.first_name+' '+user.value.last_name
  )


  function login() {
      isAuthenticated.value=true
      user.value={
          first_name:'Fatematuj',
          last_name:'Zohra',
      }
  }
  function logout() {
      isAuthenticated.value=false
      user.value={}
  }

  return {
    isAuthenticated,user,getUser,login,logout
  }

  },{
    persist: {
      enabled: true
    }
  })