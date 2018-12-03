<template>
  <div class="tabContainer">

    <div>
      <a v-on:click="activetab='burgers'" class="tab" id="burgersTab">Burgers</a>
      <a v-on:click="activetab='drinks'" class="tab" id="drinksTab">Drinks</a>
      <a v-on:click="activetab='sides'" class="tab" id="sidesTab">Sides</a>
    </div>

    <div class="content">

      <div v-if="activetab === 'burgers'" class="contentTab" id="burgerContent">
        <a href ="./#/create" class="createBox">
          CREATE YOUR OWN PERSONALISED BURGER!
        </a>
        <div class="Beef">
          BEEF
        </div>
      </div>

      <div v-if="activetab === 'drinks'" class="contentTab" id="drinkContent">
        <h1>Drink Content</h1>
      </div>

      <div v-if="activetab === 'sides'" class="contentTab" id="sideContent">
        <h1>Side Content</h1>
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data: function(){
    return{
      activetab: 'burgers'
    }
  } 
}
</script>

<style>
.tabContainer {
  background-color: #ffa801;
  margin: -50px 0 0 10%;
}

.tab {
  overflow: hidden;
  float: left;
  position: relative;
  width: 230px;
  height: 60px;
  cursor: pointer;
  border-radius: 10px 10px 0 0;
  font-family: Roboto;
  font-size: 40px;
  font-weight: 400;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  top: 200px;
  z-index: 1;
}

#burgersTab {
  background-color: #ffa801;
}

#drinksTab {
  background-color: #000000;
}

#sidesTab {
  background-color: #3c40c6;
}

.contentTab {
  font-family: Roboto;
  overflow: scroll; 
  width: 80%;
  margin-top: 250px;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  color: #ffffff;
}

#burgerContent {
  background-color: #ffa801;
}

#drinkContent {
  background-color: #000000;
}

#sideContent {
  background-color: #3c40c6;
}

.Beef {
  width: 139px;
  height: 71px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
