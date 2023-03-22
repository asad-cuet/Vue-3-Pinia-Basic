import { defineStore } from 'pinia'

//using another store in this store
import { userAuth } from './auth'




export const useCounterStore = defineStore('counter', {
    state: () => ({ 
        count: 0
    }),
    getters: {
      digitCount: (state) => state.count.toString().length,
    },
    actions: {
       increment() {
        if(!this.isLoggedIn()) return;
        this.count++
      },
      decrement() {
        if(!this.isLoggedIn()) return;
        this.count--
      },
      isLoggedIn() {
        const useAuth = userAuth()
        return useAuth.isAuthenticated;
      }
    },
  })
  