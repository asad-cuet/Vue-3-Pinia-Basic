<script setup>
import { useCounterStore2 } from '@/stores/counter2'
import { userAuth2 } from '@/stores/auth2'
const store2 = useCounterStore2()
const useAuth2 = userAuth2()
</script>

<template>
  <main>
      <h1>Composition api Pinia with Persist</h1>
      <div v-if="useAuth2.isAuthenticated">
        <h3>Logged In</h3>
        <p>User Name={{ useAuth2.getUser }}</p>
        <br>
        <button @click="useAuth2.logout()">Logout</button>
      </div>
      <div v-else>
          <button @click="useAuth2.login()">Login</button>
      </div>
      

      



      <h3>Counter</h3>
      <p>Count={{ store2.count }}</p>
      <p>Digit={{ store2.digitCount }}</p>
      <p><button @click="store2.increment()">Increment</button></p>
      <p><button @click="store2.decrement()">Decrement</button></p>
      <p><button @click="store2.$reset()">Manual Reset</button></p>
      
  </main>
</template>
