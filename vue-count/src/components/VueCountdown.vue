<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown'
</script>

<template>
  <img src="../assets/Vue3.png" alt="">
  <vue-countdown
    :time="2 * 24 * 60 * 60 * 1000"
    v-slot="{ days, hours, minutes, seconds }"
  >
    Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes,
    {{ seconds }} seconds.
  </vue-countdown>
</template>

<script>

export default {
  components: VueCountdown
}
</script>