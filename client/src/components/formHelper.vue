<template>
    <form id="formHelper">
        <div id="formHeader">
        <slot name="formHeader"></slot>
        </div>
        <div id="formFields">
        <slot name="formFields"></slot>
        </div>
        <div id="formControls">
        <slot name="formControls"></slot>
        </div>
    </form>
</template>

<script>
export default {
  name: 'formHelper',
  data () {

  }
}
</script>

<style scoped>

</style>
