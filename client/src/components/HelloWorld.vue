<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <template v-for="student in students">
        <div v-for="(val,key) in student" :key="(val,key).id">
          <p>{{key}} - {{val}}</p>
        </div>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      students: [{
        name: 'laurel',
        age: 24
      },
      {
        name: 'kdlt',
        age: 22
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
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
