<template>
    <img alt="Vue logo" src="./../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1 v-bind:id="id">Tiger pro</h1>
    <h1 v-bind:xyz="id">Tiger pro</h1>
    <h1 :abc="id">Tiger pro</h1>

    <form action="/submit">
        <input ref="channelName" v-model="channel.name">
        <button v-on:mouseover="channel.name = 'Ta Duy Hoang FPT'">Change value</button>
    </form>

    <h2 :class="{ color: selected }">Ta Duy Hoang</h2>
    <button @click="selected = true">Change Color</button>
    <input type="text" :disabled="isDisabled">
    <button @click="isDisabled = !isDisabled">Lock/Unlock</button>

    <h1>Todo list</h1>

    <input type="text" v-model="newTask">
    <button @click="addTask()">Add Task</button>

    <div v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.done">
        <span :class="{ done: task.done }">{{ task.content }}</span>
    </div>

    <h2>Format money</h2>
    <div class="money">
        {{ formatMoney }}
    </div>

    <h2>Call api</h2>
    <ul v-if="posts && posts.length">
        <li v-for="(post, index) of posts" :key="index">
            <p><strong>{{ post.title }}</strong></p>
            <p>{{ post.body }}</p>
        </li>
    </ul>

    <ul v-if="errors && errors.length">
        <li v-for="(error, index) of errors" :key="index">
            {{ error.message }}
        </li>
    </ul>

</template>
<script>

import HelloWorld from './HelloWorld.vue'
import {HTTP} from './../http-common';


export default {
  name: 'App',
  props: {

  },
  components: {
    HelloWorld
  },
  data() {
    return {
      newTask: '',
      money: 10000000,
      id: "abc",
      isDisabled: false,
      selected: false,
      channel: {
        name: "vuejs"
      },
      tasks: [
        {content: 'Học vuejs', done: false},
        {content: 'Học flutter', done: false},
        {content: 'Học ios', done: false},
        {content: 'Học MSA', done: false},
      ],
      posts: [],
      errors: []
    }
  },
  methods: {
    addTask: function() {
      this.tasks.push({content: this.newTask, done: false})
    }
  },
  watch: {
    newTask: function(newValue, oldValue) {
      console.log(newValue)
      console.log(oldValue)
    }
  },
  computed: {
    formatMoney: function() {
      let val = (this.money/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
  created() {
    HTTP.get(`posts`)
    .then(response => {
      console.log(response)
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
<style>

.color {
    color: red;
}

.done {
  text-decoration: line-through;
}
</style>