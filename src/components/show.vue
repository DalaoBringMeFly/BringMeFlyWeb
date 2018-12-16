<template>
  <div id="show">
    <p> What you want to see? Be careful </p>
    <div><canvas width="640" height="480" /></div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  data(){
    return{

    }
  method:{

  }

  }

}
</script>

<style>


body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #000;
}

body {
  min-height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 20%, #002a2a, #000);
}

div {
  padding: 0px 10px 20px;
  border-radius: 40px;
  box-shadow: 0 0 50px 50px #000;
  background: #000;
}

p{
  font-size: 20px;
}


</style>
