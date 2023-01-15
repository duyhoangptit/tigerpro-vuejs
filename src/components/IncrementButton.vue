<template>
  <button @click.prevent="activate">+1</button>
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