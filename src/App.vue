<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
let store = useStore();
// we use the computed property to keep the reactivity of the state 
let count = computed(()=> store.state.count);

function printCount(){
  // accessing the state directly from the store
  console.log(store.state.count);
  // accessing the reactive count value from the computed property
  console.log(count.value)
}

/*
console.log(counter); */
</script>

<template>
  <div>
  <h1>this is a test</h1>
  <!-- we can use the store in the component with the $store accessor which lives inside this-->
  <button style="display: block;" @click="{$store.commit('increment'); printCount()} ">increment the counter</button>
  <button style="display: block;" @click="{$store.dispatch({
    type: 'incrementTwice',
    len: 4
  }); printCount()} ">increment the counter TWICE</button>

  <p>{{ count }}</p>
  <p>{{ $store.getters.getDoubleCount }}</p>
</div>
</template>

<style scoped>

</style>
