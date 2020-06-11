import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import myBlogVue from '@/components/myBloog'
import showBlogs from '../components/showBlog.vue'
import addBlog from '../components/addBlog.vue'
import singleBlog from '../components/singleBlog.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showBlogs',
      component: showBlogs
    },
    {
      path: '/add',
      name: 'addBlog',
      component: addBlog
    },
    {
      path: '/blog/:id',
      component: singleBlog
    }
  ],
  mode: 'history'
})
