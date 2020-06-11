<template>
    <div v-theme:column="'narrow'" id="showBlogVue" >
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search box"/>
        <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <router-link v-bind:to="'/blog/' +blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link> <!-- creating a custom directive and custom filters and dynamic links-->
            <article>{{blog.body | snippet}}</article>
        </div>
   </div>
</template>

<script>
import searchMixin from '../mixins/searchBlog'

export default {
  name: 'showBlogVue',
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  method: {

  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (data) {
        this.blogs = data.body.slice(0, 10)
      })
  },
  computed: {

  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase()
    } // Local filter registration
  },
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8)
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#showBlogVue{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
