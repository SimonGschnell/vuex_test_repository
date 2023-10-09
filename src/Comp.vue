<script setup>

import { useMouse} from './mouse';
const {x,y} = useMouse();

</script>

<template>
    <p>{{ x + " - " + y }}</p>
    <slot></slot>

</template>

<style scoped>

</style>