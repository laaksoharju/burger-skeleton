<template>
  <div>
    <div>
    <img class="example-panel" src= "https://newevolutiondesigns.com/images/freebies/white-wallpaper-18.jpg">
    </div>

    <button v-on:click="switchLang()">{{ uiLabels.language }}</button>
    <h1 id = "dtext">{{uiLabels.welcome}}:<br>{{uiLabels.name}} </h1>
    <div id = "buttonArea">
      <router-link id = "button" to="ordering">{{ uiLabels.goToOrdering }}</router-link>

    </div>
    <br>
    <div id ="buttonArea">

       <router-link id = "button" to="kitchen">{{ uiLabels.goToRandomBurger }}</router-link>

    </div>
    <br>
    <div id ="buttonArea">

       <router-link id = "button" to="ordering/sides">{{ uiLabels.goToSides }}</router-link>

    </div>
    <br>
    <br>
    <hr>
    <hr>
    <div id = "hamburgerGif">
      <img src= "https://media1.giphy.com/media/l0HlNBIgkD759kTPW/giphy.gif?cid=790b761183fc54539593a2dc2a32f4438d0e859ea99de333&rid=giphy.gif">
      <br>
      <h4>*I am hungry / Jag är hungrig </h4>
    </div>
    <br>
    <hr>
    <footer> A nice website production </footer>
  </div>

</template>
<script>
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'
/* instead of defining a Vue instance, export default allows the only
necessary Vue instance (found in main.js) to import your data and methods */
export default {
  name: 'StartingPage',
  components: {
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            // the ordering system and the kitchen
  data: function() { //Not that data is a function!
    return {
      chosenIngredients: [],
      price: 0,
      orderNumber: "",
      category: 1
    }
  },
  created: function () {
    this.$store.state.socket.on('orderNumber', function (data) {
      this.orderNumber = data;
    }.bind(this));
  },
  methods: {
  }
}
</script>
<style scoped>

#dtext{

}

#buttonArea{
  /* padding-left:350px; */


  min-height: 100vh;
  align-items:center;
  font-size: 40px;
  border: 5px solid;
	display: table;
  margin: 2px;
  border-radius: 5px;
  background-color: coral;
  padding: 1em;

}
#button{
  color: white;

}
.button:hover{
  color: red;

}

.example-panel{
  position:fixed;
  z-index:-2;
  left:0;
  top:0;
  opacity: 0.35;
}

</style>
