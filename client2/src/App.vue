<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/login'
import Register from './components/register'
export default {
  name: 'app',
  components: {
    'login': Login,
    'register-form': Register
  },
  data () {
    return {
      component: 'login',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
