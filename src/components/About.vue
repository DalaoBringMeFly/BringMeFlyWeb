<template>
  <div class="container">
    <h1 id="title">SWAPI</h1>
    <h2> The Star Wars API</h2>

    <div class="body">
      <div class="left-body">
        <h3>Statistics</h3>
        <ul>
          <li>People: 87</li>
          <li>Planets: 61</li>
          <li>Films: 7</li>
          <li>Species : 37</li>
          <li>Vehicles: 39</li>
          <li>Starships: 37</li>
        </ul>
      </div>

      <div class="middle-body">
        <h3>What is this?</h3>
        <p>
          The Star Wars API is the world's first quantified and programmatically-formatted set of Star Wars data.
        </p>
        <p>
          After hours of watching films and trawling through content online, we present to you all the People, Films, Species, Starships, Vehicles and Planets from Star Wars.
        </p>
        <p>
          We've formatted this data in JSON and exposed it to you in a RESTish implementation that allows you to programmatically collect and measure the data.
        </p>
        <h3>What can you use this for?</h3>
        <p>
          Comparing the data from Star Wars has never been easier. Here are some examples using the Python helper library
        </p>
        <p>
          <i>List the planets in order of size:</i>
        </p>
        <div class="card">
          <p>
            import swapi
          </p>
          <p>
            for planet in swapi.get_all("planets").order_by("diameter"):
          </p>
          <p class="tab1">
            print(planet.name)
          </p>
        </div>
        <p>
          <i>View the people who have piloted more than one starship:</i>
        </p>
        <div class="card">
          <p>
            import swapi
          </p>
          <p>
            for people in swapi.get_all("people").iter():
          </p>
          <p class="tab1">
            if len(people.starships) > 1:
          </p>
          <p class="tab2">
            print(people.name)
          </p>
        </div>
        <p>
          <i>Discover if Jar Jar Binks ruined a film just by being in it:</i>
        </p>
        <div class="card">
          <p>
            import swapi
          </p>
          <p>
            pm = swapi.get_film(4)
          </p>
          <p>
            jj = swapi.get_person(36)
          </p>
          <p>
            for c in pm.get_characters().iter():
          </p>
          <p class="tab1">
            if c.name == jj.name:
          </p>
          <p class="tab2">
            print("Why George, why.")
          </p>
        </div>
      </div>

      <div class="right-body">
        <h3>Donate</h3>
        <p>
          With small donations we can keep swapi running for free, please consider throwing us some beer money to say thank you. With every $10 we can keep the site up for another month!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #FFE300;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  padding: 5px;
  color: #C8C8C8;
}
a {
  color: #42b983;
}

#title{
  padding-top: 32px;
}

.container{
  width: 100%;
  height: 100%;
  background: #1C1E22;
}

.body{
  height: 100%;
  background: #272B30;
  color: #C8C8C8;
  display: flex;
  text-align:left;
}

.left-body{
  width: 30%;
  padding-left: 20px;
}

.middle-body{
  width: 100%;
  margin-left: -5%;
}

.right-body{
  width: 20%;
}

.card{
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  border-radius: 5px;
  padding-left: 5%;
}

.card p{
  color: #272B30;
}

.tab1{
  margin-left: 25px;
}
.tab2{
  margin-left: 50px;
}
</style>
