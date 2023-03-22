import { defineStore } from 'pinia'

export const userAuth = defineStore('auth', {
    state: () => ({ 
        isAuthenticated: false,
        user:{}
    }),
    getters: {
      getUser: (state) => state.user.first_name+' '+state.user.last_name
    },
    actions: {
      login() {
        this.isAuthenticated=true
        this.user={
            first_name:'Asadul',
            last_name:'Islam',
        }
      },
      logout() {
        this.isAuthenticated=false
        this.user={}
      }
    },
  })