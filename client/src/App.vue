<template>
  <div id="app">
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)" ></app-header>
    <app-headerBlog></app-headerBlog>
    <img src="./assets/logo.png">
    <!--
    <app-header v-bind:username="username" v-bind:title="title" v-on:changeTitle="updateTitle($event)" ></app-header>
    <img src="./assets/logo.png">
    <app-formHelper>
      <div slot="formHeader">
        <h3>Form's Title</h3>
        <p>This is a Login test Form</p>
      </div>
      <div slot="formFields">
        <input name="username" placeholder="Username" type="text" v-bind:username="username" ref="userRef" required/>
        <input name="password" placeholder="password" type="password"  v-model="password" required/>
       <br>
        <output>{{password}}</output>
      </div>
      <div slot="formControls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </app-formHelper>
    <component v-bind:is="component" v-bind:ninjas="ninjas"></component>
    <app-students v-bind:family="family" v-bind:students="students"></app-students>
    <app-footer v-bind:title="title" v-bind:copyright="copyright">
      <h3 slot="firstSlot">This is just for test</h3>
      <h3 slot="secondSlot">Second slot test</h3>
    </app-footer>
    -->
    <!--
    <app-addBlog></app-addBlog>
  -->
<router-view></router-view>
  </div>
</template>

<script>
import Ninjas from './components/ninjas'
import Header from './components/header'
import Footer from './components/footer'
import Students from './components/students'
import FormHelper from './components/formHelper'
import AddBlog from './components/addBlog'
import ShowBlog from './components/showBlog'
import ListBlog from './components/listBlog'
import HeaderBlog from './components/headerBlog'
// import { bus } from './main'
export default {
  name: 'App',
  components: {
    'app-ninjas': Ninjas,
    'app-header': Header,
    'app-footer': Footer,
    'app-students': Students,
    'app-formHelper': FormHelper,
    'app-addBlog': AddBlog,
    'app-showBlog': ShowBlog,
    'app-listBlog': ListBlog,
    'app-headerBlog': HeaderBlog
  },
  data () {
    return {
      title: 'Ninja Application',
      component: 'app-myBlog',
      copyright: 'Copyright 2020 Vue app',
      family: 'Kebou Um',
      username: 'Yesss',
      password: '',
      ninjas: [
        {name: 'Donatello',
          age: 24,
          show: false
        },
        {name: 'Raphael',
          age: 23,
          show: false
        },
        {name: 'Leonardo',
          age: 25,
          show: false
        },
        {name: 'Michelangelo',
          age: 24,
          show: false
        }
      ],
      students: [
        {name: 'Hadassa',
          surname: 'Um',
          age: 24,
          show: false
        },
        {name: 'Hermine',
          surname: 'Berthe',
          age: 23,
          show: false
        },
        {name: 'Laurel',
          surname: 'Kebou',
          age: 25,
          show: false
        },
        {name: 'Toussaint',
          surname: 'Djeufo',
          age: 24,
          show: false
        }
      ]
    }
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle
    },
    handleSubmit: function () {
      this.username = this.$refs.userRef.value
      // this.password = this.$refs.passRef.value
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
