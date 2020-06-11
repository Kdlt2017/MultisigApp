<template>
    <div id="studentVue">
        <h1>{{family}}</h1>
        <table >
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
            </tr>
            <tr v-for="student in students" :key="student.id">
                <td v-on:click="student.show = !student.show">{{student.name}}</td>
                <td>{{student.surname}}</td>
                <td v-show="student.show">{{student.age}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'studentVue',
  props: {
    family: {
      type: String
    },
    students: {
      type: Array,
      required: true
    }
  },
  data () {

  }
}
</script>

<style scoped>
h1{
    color:rgb(0, 255, 76)
}
#studentVue{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
table, th, td {
    width: 1000px;
  border: 1px solid black;
}
</style>
