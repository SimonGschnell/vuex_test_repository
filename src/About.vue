<template>
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <Props :propName="value"/>
      <RouterLink to="/">to Home</RouterLink>
    </div>
  </template>
  
  <script>
    import Props from "./Props.vue";
    import {ref} from "vue";

  export default {
    name: "About",
    setup(){
        const value = ref(0)
        return { value}
    },
    components: {
        Props,
    }
  };
  </script>