<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Input search enter-button="Search" @on-search="handleSearch" style="width: 60%;margin:10px auto" placeholder="Enter something..." />
    <Input v-model="Infor" type="textarea" :readonly="true" :rows="8" style="width: 60%;margin:10px auto" placeholder="Information..." />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'The Star Wars API',
      Infor: ''
    }
  },
  methods: {
    handleSearch (params) {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
