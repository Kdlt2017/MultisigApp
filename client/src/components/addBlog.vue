<template>
    <div id="addBlogVue">
        <h2>New BLog Post</h2>
        <form v-if="!submitted">
            <label>Title</label>
            <input type="text" v-model.lazy="blog.title"/>
            <label>Content</label>
            <textarea v-model.trim="blog.content"></textarea>
        <div id="checkbox">
      <label>Ninja</label>
            <input type="checkbox" value="Ninja" v-model="blog.categories"/>
      <label>Precious</label>
            <input type="checkbox" value="Precious" v-model="blog.categories"/>
      <label>Tremendous</label>
            <input type="checkbox" value="Tremendous" v-model="blog.categories"/>
      <label>Astonishing</label>
            <input type="checkbox" value="Astonishing" v-model="blog.categories"/>
    </div>
    <label>Author:</label>
    <select v-model="blog.author">
      <option v-for="author in authors" :key="author.id">
        {{author}}
      </option>
    </select>
              <button v-on:click.prevent="post">Add Post</button>
        </form>
  <div v-if="submitted">
      <h3>Thanks for the new post</h3>
    </div>
        <div id="preview">
      <form>
        <h3>Blog Preview</h3>
        <p>Title:</p>
        <p>{{blog.title}}</p>
        <p>Content:</p>
        <p> {{blog.content}}</p>
        <p>Blog Categories</p>
        <ul>
          <li v-for="category in blog.categories" :key="category.id">
            {{category}}
          </li>
        </ul>
        <p>Author:{{blog.author}}</p>
      </form>
    </div>
    </div>
</template>

<script>
export default {
  name: 'addBlogVue',
  data () {
    return {
      blog: {
        title: '',
        content: '',
        author: '',
        categories: []
      },
      submitted: false,
      authors: ['KDLT', 'The Net Ninja', 'UBHH', 'KJP']
    }
  },
  methods: {
    post: function () {
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function (data) {
        console.log(data)
        this.submitted = true
      })
    }
  }
}
</script>

<style scoped>
#addBlogVue *{
    box-sizing: border-box;
}
#addBlogVue{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkbox input{
  display: inline-block;
  margin-block: 10px;
}
#checkbox label{
  display: inline-block
}
</style>
