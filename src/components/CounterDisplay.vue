<template>
  Count is {{ count }}
</template>

<script setup>
import { useStore } from 'vuex'
import {computed} from "vue";

const store = useStore()
const count = computed(() => store.state.counter)
</script>