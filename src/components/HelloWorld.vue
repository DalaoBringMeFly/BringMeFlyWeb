<template>
  <div class="hello">
    <div class="container">
  <div class="dot dot-1"></div>
  <div class="dot dot-2"></div>
  <div class="dot dot-3"></div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
    </filter>
  </defs>
</svg>
    <h1>{{ msg }}</h1>
    <br/>
    <RadioGroup v-model="bigKinds">
      <Radio label="film">
        <Icon type="ios-film"></Icon>
        <span>Films</span>
      </Radio>
      <Radio label="person">
        <Icon type="ios-person"></Icon>
        <span>Person</span>
      </Radio>
      <Radio label="planet">
        <Icon type="ios-planet"></Icon>
        <span>Planets</span>
      </Radio>
      <Radio label="species">
        <Icon type="md-outlet"/>
        <span>Species</span>
      </Radio>
      <Radio label="starship">
        <Icon type="md-jet"></Icon>
        <span>Starships</span>
      </Radio>
      <Radio label="vehicle">
        <Icon type="md-pie"/>
        <span>Vehicle</span>
      </Radio>

    </RadioGroup>
    <Input search enter-button="Search" @on-search="handleSearch" style="width: 60%;margin:10px auto"
           placeholder="Enter a number"/>
    <Input v-model="Infor" type="textarea" :readonly="true" :rows="12" style="width: 60%;margin:20px auto"
           placeholder="Information will show here."/>
    <br/>
    <Row style="margin-top: 20px;font-size: 14px">
      <Col span="6" offset="3">
        <h4>What is this?</h4>
        <p>The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data
          source for all the data from the Star Wars canon universe!</p>

        <p>We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with
          software. Then we went and stuck an API on the front so you can access it all!</p>
      </Col>
      <Col span="6">
        <h4>How can I use it?</h4>
        <p>All the data is accessible through our HTTP web API. Consult our documentation if you'd like to get started.</p>

        <p>Helper libraries for popular programming languages are also provided so you can consume swapi in your favourite
          programming language, in a style that suits you.</p>
      </Col>
      <Col span="6">
        <h4>How can I support this?</h4>
        <p>With small donations we can keep swapi running for free, please consider throwing us some beer money to say
          thank you. With every $10 we can keep the site up for another month!</p>
        <a href="http://127.0.0.1:8080/#/about">about us</a>

        <p>This project is open source and you can contribute on GitHub.</p>
      </Col>
    </Row>


  </div>
</template>

<script>
  import {fetch, post} from '../libs/http.js'

  //constructor
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'The Star Wars API',
        Infor: '',
        show: true,
        searchWord: '',
        testmsg: '测试用，最后可删',
        bigKinds: 'person',
        searchKey: '', //搜索用句子
        searchKind: ''
      }
    },
    methods: {

      async handleSearch(params) {

        console.log(params);
        this.msg = 'Please waiting for searching...';

        this.searchWord = params;

        this.searchKey = '/graphql?query={';
        this.searchKey += this.bigKinds.toString();
        this.searchKey += '(id:';
        this.searchKey += this.searchWord.toString();
        this.searchKey += '){';

        if (this.bigKinds === 'film') {
          this.searchKey += 'title,episode_id,opening_crawl,director,release_date,species,starships,vehicles,characters,planets,created,edited}}';
        }
        else if (this.bigKinds === 'person') {
          this.searchKey += 'edited,name,created,gender,skin_color,hair_color,height,eye_color,mass,homeworld,birth_year}}';
        }
        else if (this.bigKinds === 'planet') {
          this.searchKey += 'edited,climate,surface_water,name,diameter,rotation_period,created,terrain,gravity,orbital_period,population}}';
        }
        else if (this.bigKinds === 'species') {
          this.searchKey += 'edited,classification,name,designation,created,eye_colors,people,skin_colors,language,hair_colors,homeworld,average_lifespan,average_height}}';
        }
        else if (this.bigKinds === 'starship') {
          this.searchKey += 'pilots,MGLT,starship_class,hyperdrive_rating}}';
        }
        /*
        else if(this.bigKinds == 'transport'){
          this.searchKey += 'dited,consumables,name,created,cargo_capacity,passengers,max_atmosphering_speed,crew,length,model,cost_in_credits,manufacturer}}';
        }
        */
        else if (this.bigKinds === 'vehicle') {
          this.searchKey += 'vehicle_class,pilots}}';
        }


        this.testmsg = this.searchKey;

        let res = await fetch(this.searchKey);
        console.log(res.data);
        this.Infor = JSON.stringify(res.data.data, null, 4);
        if (this.Infor == null) {
          this.Infor == '404 NOT FOUND!\n Please check your input!';
        }
        /*
        this.serachKind
        for (var p in res.data.data.film){
          this.Infor+='[';
          this.Infor+=p;
          this.Infor+=']';
          this.Infor+='\n';
          this.Infor+='  \"';
          this.Infor+=res.data.data.film[p];
          this.Infor+='\"';
          this.Infor+='\n';
          this.Infor+='\n';
        }
        */
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

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  h4 {
    font-size: 18px;
  }



.container {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  filter: url('#goo');
  animation: rotate-move 2s ease-in-out infinite;
}

.dot {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.dot-3 {
  background-color: #f74d75;
  animation: dot-3-move 2s ease infinite, index 6s ease infinite;
}

.dot-2 {
  background-color: #10beae;
  animation: dot-2-move 2s ease infinite, index 6s -4s ease infinite;
}

.dot-1 {
  background-color: #ffe386;
  animation: dot-1-move 2s ease infinite, index 6s -2s ease infinite;
}

@keyframes dot-3-move {
  20% {transform: scale(1)}
  45% {transform: translateY(-18px) scale(.45)}
  60% {transform: translateY(-90px) scale(.45)}
  80% {transform: translateY(-90px) scale(.45)}
  100% {transform: translateY(0px) scale(1)}
}

@keyframes dot-2-move {
  20% {transform: scale(1)}
  45% {transform: translate(-16px, 12px) scale(.45)}
  60% {transform: translate(-80px, 60px) scale(.45)}
  80% {transform: translate(-80px, 60px) scale(.45)}
  100% {transform: translateY(0px) scale(1)}
}

@keyframes dot-1-move {
  20% {transform: scale(1)}
  45% {transform: translate(16px, 12px) scale(.45)}
  60% {transform: translate(80px, 60px) scale(.45)}
  80% {transform: translate(80px, 60px) scale(.45)}
  100% {transform: translateY(0px) scale(1)}
}

@keyframes rotate-move {
  55% {transform: translate(-50%, -50%) rotate(0deg)}
  80% {transform: translate(-50%, -50%) rotate(360deg)}
  100% {transform: translate(-50%, -50%) rotate(360deg)}
}

@keyframes index {
  0%, 100% {z-index: 3}
  33.3% {z-index: 2}
  66.6% {z-index: 1}
}


</style>
