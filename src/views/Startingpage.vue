<template>
  <div>


    <button v-on:click="switchLang()">{{ uiLabels.language }}</button>
    <h1>{{uiLabels.welcome}}:<br>{{uiLabels.name}} </h1>
    <div id = "buttonArea">
      <router-link id = "button" to="ordering">{{ uiLabels.goToOrdering }}</router-link>

    </div>
    <br>
    <div id ="buttonArea">

       <router-link id = "button" to="kitchen">{{ uiLabels.goToRandomBurger }}</router-link>

    </div>
    <br>
    <br>
    <hr>

    <div id = "hamburgerGif">
      <img src= "https://media2.giphy.com/media/3o7TKUGccxlaQqdgRO/giphy.gif">
    </div>

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
#buttonArea{
  font-size: 40px;
  border: 5px solid;
	display: table;
  margin: 2px;
  border-radius: 5px;
  background-color: MediumSlateBlue;
  padding: 1em;

}
#button{
  color: white;
}

</style>
