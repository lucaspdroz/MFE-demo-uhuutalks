<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown'
import Header from './components/Header'
</script>

<template>
  <Header />
  <vue-countdown
    :time="2 * 24 * 60 * 60 * 1000"
    v-slot="{ days, hours, minutes, seconds }"
  >
    Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes,
    {{ seconds }} seconds.
  </vue-countdown>
</template>

<script></script>

<style lang="scss" scoped></style>
