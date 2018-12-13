<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Input search enter-button="Search" @on-search="handleSearch" style="width: 60%;margin:10px auto" placeholder="Enter something..." />
    <Input v-model="Infor" type="textarea" :readonly="true" :rows="8" style="width: 60%;margin:10px auto" placeholder="Information..." />
    <br />
    
    <button name = "test" v-on:click='show = !show'>
    Toggle
    </button>
  <transition name="fade">
    <p v-if="show" name = "showWord">{{testmsg}}</p>
  </transition>


  </div>
</template>

<script>


//constructor
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'The Star Wars API',
      Infor: '',
      show : true,
      searchWord : '',
      testmsg : 'hello'
    }
  },
  methods: {
    handleSearch (params) {
      this.msg = 'Please waiting for searching...';
      this.testmsg = params;
      searchWord = params;
      //Test with Get      : curl -g 'http://localhost:5656/graphql?query={film(id:1){title}}'
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

.fade-enter-active, .fade-leave-active, {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
