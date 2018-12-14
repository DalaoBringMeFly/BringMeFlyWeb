<template>
  <div>
    <Input search enter-button="Search" @on-search="handleSearch" style="width: 60%;margin:10px auto" placeholder="Enter something..." />
    <Input v-model="Infor" type="textarea" :readonly="true" :rows="8" style="width: 60%;margin:10px auto" placeholder="Information..." />
    <br />
    <button name = "test" v-on:click='show = !show'>
    Toggle
    </button>
  </div>
</template>

<script>


</script>

<style scoped>

</style>
