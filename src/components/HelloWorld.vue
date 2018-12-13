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
import {fetch, post} from '../libs/http.js'

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

    async handleSearch (params) {
      this.msg = 'Please waiting for searching...';
      let res = await fetch('/graphql?query={film(id:3){title,edited}}');
      console.log(res);
      this.Infor = res;
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
