<template>
  <div class=containerStart>
    <div>
    <img class="example-panel" src="@/assets/kitchen2.jpeg">
    </div>

    <div id="headyStart">
    <button id="switchlangbutton" v-on:click="switchLang()">{{ uiLabels.language }}</button>
  </div>

  <h1 id = "dtext">{{uiLabels.welcome}}:<br>{{uiLabels.name}} </h1>
  <br>

  <div id="allButtons">

    <div class = "buttonArea">
      <router-link style="text-decoration:none" id = "button" to="ordering">{{ uiLabels.goToOrdering }}</router-link>
    </div>

    <br>
    </div>

    <br>

    <div id = "hamburgerGif">
      <br>
      <br>
      <img src= "https://media1.giphy.com/media/l0HlNBIgkD759kTPW/giphy.gif?cid=790b761183fc54539593a2dc2a32f4438d0e859ea99de333&rid=giphy.gif" width="150px">
      <br>
      <h4>*I am hungry / Jag är hungrig </h4>
    </div>

    <br>
    <hr>

    <footer id="foot"> A nice website production </footer>

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

.containerStart {
  font-family: 'Quicksand', sans-serif;
  display: grid;

  grid-template-areas:
    "header"
    "main"
    "foot"
    "footer";

  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-column-gap:1.2em;
  grid-row-gap: 4em;
  height: 60vh;
}

#headyStart {
  grid-area: header;
  position: absolute;
}

#allButtons {
  grid-area: main;
  margin-left: auto;
  margin-right: auto;
}

#hamburgerGif {
  grid-area: foot;
  text-align: center;
}

#foot {
  grid-area: footer;
  bottom: 0.05em;
}


#dtext{
  grid-area: header;
  text-align: center;
  align-items: center;
  font-size: 2em;
}

.buttonArea{
  justify-content: center;
  align-items:center;
  text-align: center;
  font-size: 1.8em;
  border: 0.12em solid;
	display: table;
  margin: 0.08em;
  border-radius: 0.2em;
  background-color: pink;
  padding: 1em;
  width: 14em;
  height:1.6em;


}
#button{
  color: #000000;
  background-color: pink;
  text-align: center;
  align-items: center;
}


#switchlangbutton {
  padding: 0.5em;
  background-color: royalblue;
  color: gold;
  cursor: pointer;
  font-size: 0.9em;
  border: 0.15em solid crimson;
  border-radius: 0.5em;
  text-align: center;
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
