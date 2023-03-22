<script setup>
import { useCounterStore } from '@/stores/counter'
import { userAuth } from '@/stores/auth'
const store = useCounterStore()
const useAuth = userAuth()
</script>

<template>
  <main>
      <h1>Pinia</h1>
      <div v-if="useAuth.isAuthenticated">
        <h3>Logged In</h3>
        <p>User Name={{ useAuth.getUser }}</p>
        <br>
        <button @click="useAuth.logout()">Logout</button>
      </div>
      <div v-else>
          <button @click="useAuth.login()">Login</button>
      </div>
      

      



      <h3>Counter</h3>
      <p>Count={{ store.count }}</p>
      <p>Digit={{ store.digitCount }}</p>
      <p><button @click="store.increment()">Increment</button></p>
      <p><button @click="store.decrement()">Decrement</button></p>
      <p><button @click="store.$reset()">Default Reset</button></p>
      
  </main>
</template>
