<template>
    <footer>
      <slot name="firstSlot"></slot>
        <p>{{title}} {{copyright}}</p>
        <slot name="secondSlot"></slot>
    </footer>
</template>

<script>
import { bus } from '../main'

export default {
  name: 'app-footer',
  props: {
    copyright: String,
    title: String
  },
  data () {
    return {

    }
  },
  created () { // life cycle hooks it fires when the component is first created
    bus.$on('titleChanged', (data) => {
      this.title = data
    })
  }
}
</script>

<style scoped>
footer{
    background: lightgreen;
    padding: 6px;
}
p{
    color: blue;
    text-align: center;
}
</style>
