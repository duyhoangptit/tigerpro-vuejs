<template>
  <h3>Increment:</h3>
  <increment></increment>
  <h3>Counter:</h3>
  <counter></counter>
</template>

<script>
import Counter from './CounterDisplay.vue'
import Increment from './IncrementButton.vue'

export default {
  components: {
    Counter,
    Increment
  }
}
</script>
<style>
</style>