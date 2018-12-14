<template>
  <div class="hello">
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


</style>
