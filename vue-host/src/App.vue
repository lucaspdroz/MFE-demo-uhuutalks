<script setup>
import Header from 'header/Header'
import VueCountdown from 'vue_count/VueCountdown'
</script>

<template>
  <div class="container">
    HOST
    <Header />
    <VueCountdown/>
  </div>
</template>

<script>
export default {
  components: Header,VueCountdown
}
</script>