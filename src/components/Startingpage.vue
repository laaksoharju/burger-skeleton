<template>
  <div class=containerStart>
    <div>
    <img class="example-panel" src="@/assets/kitchen2.jpeg">
    </div>

    <div id="headyStart">
    <button id="switchlangbutton" v-on:click="bytSprak()">{{ uiLabels.language }}</button>
  </div>

  <div id = "dtext">
    <h3>{{uiLabels.welcome}}:</h3>
    <h2>{{uiLabels.name}} </h2>
  </div>

  <div id="allStartingButtons">
      <button ref="Ordering" class="goToOrderingButton" style="text-decoration:none" v-on:click="startOrder()">{{ uiLabels.goToOrdering }}</button>
      <br>
      <button id = "start-random-button" class="goToOrderingButton" v-on:click="randBurg()">{{uiLabels.goToRandomMenu}}</button>
    </div>

    <br>
    <div id = "hamburgerGif">
      <br>
      <br>
      <img src= "https://media1.giphy.com/media/l0HlNBIgkD759kTPW/giphy.gif?cid=790b761183fc54539593a2dc2a32f4438d0e859ea99de333&rid=giphy.gif" width="150px">
    </div>

    <br>
    <hr>

    <footer id="foot"> A nice website production </footer>

  </div>
</template>


<script>

export default {
  name: 'Startingpage',
  props: {
    uiLabels: Object,
    lang: String,
  },

  data: function() {
    return {
    }
  },

  methods: {
    startOrder: function() {
      //this.category = 1;
      this.$emit('gavidare');
    },
    bytSprak: function() {
      this.$emit('bytsprak');
    },
    randBurg: function() {
      this.$emit('randburg');
    }
  }
}
</script>

<style scoped>

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
#allStartingButtons {
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

.goToOrderingButton{
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
  height:3.3em;
  cursor: pointer;
}

.goToOrderingButton:hover{
  background-color: #ed81a1;
  cursor: pointer;
  letter-spacing: 0.03em;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.15s ease 0s;
<<<<<<< HEAD
}
.extra-info {
  display: none;
  line-height: 30px;
  font-size: 12px;
	position: absolute;
  top: 0;
  left: 50px;
}
.info{
  left:50%;
  right:50%;
  position: absolute;
  display: inline-block;
  align-items:center;
  justify-content:center;
  text-align:center;
}
.info .infotext{
  visibility: hidden;
  width: 30em;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  z-index:1;
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -2.5em;
}
.info:hover .infotext{
  visibility: visible;
=======
>>>>>>> master
}


.example-panel{
  position:fixed;
  z-index:-2;
  left:0;
  top:0;
  opacity: 0.35;
}
</style>
