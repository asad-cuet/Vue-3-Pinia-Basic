import { defineStore } from 'pinia'
import {computed,ref} from 'vue'

//using another store in this store
import { userAuth2 } from './auth2'




export const useCounterStore2 = defineStore('counter2', ()=> {
  const count = ref(0)

  const digitCount=computed(()=>
    count.value.toString().length
  )



  function increment() {
      if(!isLoggedIn()) return;
      count.value++
  }
  function decrement() {
      if(!isLoggedIn()) return;
      count.value--
  }
  function $reset() {
      if(!isLoggedIn()) return;
      count.value=0
  }

  function isLoggedIn() {
    const useAuth2 = userAuth2()
    return useAuth2.isAuthenticated;
  }


  return {
    count,digitCount,increment,decrement,$reset
  }
    
  },{
    persist: {
      enabled: true
    }
  })
  