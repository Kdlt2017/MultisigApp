<template>
    <div id="ninjasVue">
      <h1>List of Ninjas</h1>
      <ul>
      <li v-for="ninja in ninjas" :key="ninja.id" v-on:click="ninja.show = !ninja.show">
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.age}}</h3>
      </li>
      </ul>
      <button v-on:click="deleteLast">Delete Ninja</button>
    </div>
</template>

<script>
export default {
  name: 'ninjaVue',
  props: {
    ninjas: {// validation of props
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteLast: function () {
      this.ninjas.pop()
    }
  },
  beforeCreate () {
    alert('beforeCreate') // executes before vue instance is created
  },
  created () {
    alert('created') // executes after data has been observed and events initialized
  },
  beforeMount () {
    alert('beforeMount') // runs before component mount on dom
  },
  mounted () {
    alert('Mounted') // runs when components have been mounted on the dom
  },
  beforeUpdate () {
    alert('beforeUpdate') // runs before any dynamic object is updated on the dom
  },
  updated () {
    alert('updated') // runs after update
  }

}
</script>

<style scoped>
#ninjasVue {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 5px solid blue;
  margin: 10px;
}
/* h1{
  color: black;
  text-align: center;
}
h2{
  color: red;
  text-align: left;
}
h3{
  color: black;
  text-align: right;
} */
</style>
