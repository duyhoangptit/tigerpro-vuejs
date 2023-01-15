<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="name">
    <input type="checkbox" v-model="accept"> Yes
    <div>{{ name }}</div>

    <div v-show="isShow">
      <h1>Demo show/hide div</h1>
    </div>
    <button @click="isShow != isShow">Show/Hide</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: "Ta Duy Hoang",
      accept: true,
      isShow: true
    }
  },
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
