<template>
  <div class="container">
    <button @click.prevent="activate">+1</button>
  </div>
</template>

<script>

import store from './../store/store'

export default {
  methods: {
    activate () {
      store.commit('INCREMENT_COUNT')
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    background-color: red;
    display: flex;
    flex-direction: column;

    button {
      color: blue;
    }
  }
</style>