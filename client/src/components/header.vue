<template>
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
        <output>user:{{this.username}} pass:{{this.password}}</output>
    </header>
</template>

<script>
import { bus } from '../main'

export default {
  name: 'app-header',
  props: {
    title: {
      type: String
    },
    username: String,
    password: String,
    blog: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  methods: {
    changeTitle: function () {
      // this.$emit('changeTitle', 'New Title')
      // this.title = 'Vue bus'
      // bus.$emit('titleChanged', 'Vue bus')
      bus.$emit('titleChanged', this.blog.title)
    }
  },
  created () {
    bus.$on('titleChanged', (data) => {
      this.title = data
    })
  }
}
</script>

<style scoped>
header{
    background: darkgreen;
    padding: 10px;
}
h1{
    color:red;
    text-align: center;
}
</style>
