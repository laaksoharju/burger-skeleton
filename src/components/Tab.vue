<script>
  import menu from '@/components/menu.js';
  
  export default {
    name: 'Tabs',
    data: function() {
      return {
        activetab: 'burgers',
        burgers: menu.burgers,
        drinks: menu.drinks
      }
    },
    methods: {
      addItem: function(item) {
        this.$emit('addedItemToOrder', item); // talking to order page
      }
    }
  }
</script>

<template>
  <div class="wrapper">
  
    <div class="flaps">
      <a class="flap" id="burgersFlap" v-on:click="activetab='burgers'"> BURGERS </a>
      <a class="flap" id="drinksFlap" v-on:click="activetab='drinks'"> DRINKS </a>
      <a class="flap" id="sidesFlap" v-on:click="activetab='sides'"> SIDES </a>
    </div>
  
    <div class="content">
      <div class="contentItem" id="burgersContent" v-if="activetab === 'burgers'">
        <a href="./#/BurgerConstruction">
          <div class="personalisedBurger">
            <p>CREATE YOUR OWN PERSONALISED BURGER!</p>
          </div>
        </a>
        <div v-for="(burgerItems, burgerType) in burgers" :key="burgerType">
          <br>
          <div class="grid-container">
            <div class="categoryName">{{ burgerType }}</div>
            <div class="scrollable">
              <div class="menuItem" v-for="(item, index) in burgerItems" :key="index" @click="addItem(item)">
                <div class="menuPic"><img :src="item.imgSrc" height="70%" width="70%" style="margin-top: 15px;"></div>
                <div class="menuTitle">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="contentItem" id="drinksContent" v-if="activetab === 'drinks'">
        <div v-for="(drinkItems, drinkType) in drinks" :key="drinkType">
          <br>
          <div class="grid-container">
            <div class="categoryName">{{ drinkType }}</div>
            <div class="scrollable">
              <div class="menuItem" v-for="(item, index) in drinkItems" :key="index" @click="addItem(item)">
                <div class="menuPic"><img :src="item.imgSrc" height="70%" width="70%" style="margin-top: 15px;"></div>
                <div class="menuTitle">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="contentItem" id="sidesContent" v-if="activetab === 'sides'">
        <div v-for="(drinkItems, drinkType) in drinks" :key="drinkType">
          <br>
          <div class="grid-container">
            <div class="categoryName">{{ drinkType }}</div>
            <div class="scrollable">
              <div class="menuItem" v-for="(item, index) in drinkItems" :key="index">
                <div class="menuPic"><img :src="item.imgSrc" height="70%" width="70%" style="margin-top: 15px;"></div>
                <div class="menuTitle">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<style>
  .flaps {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 45px;
    justify-content: center;
  }
  
  .flap {
    /* Visual properties */
    height: 45px;
    width: 220px;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    margin-top: 80px;
    /* Text inside*/
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    line-height: 45px;
  }
  
  #burgersFlap {
    order: 0;
    background-color: #ffc500;
  }
  
  #drinksFlap {
    order: 1;
    background-color: black;
  }
  
  #sidesFlap {
    order: 2;
    background-color: #3c40c6;
  }
  
  .content {
    margin-top: 80px;
    margin-bottom: 100px;
  }
  
  .contentItem {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
  }
  
  #burgersContent {
    background-color: #ffc500;
  }
  
  #drinksContent {
    background-color: #000000;
  }
  
  #sidesContent {
    background-color: #3c40c6;
  }

  .personalisedBurger {
    background-color: #485460;
    height: 150px;
    border-radius: 10px;
    padding-left: 15%;
    padding-right: 15%;
    /* Text */
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    line-height: 150px;
  }
  
  .personalisedBurger:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 1px white inset;
  }
  
  .personalisedBurger:active {
    background-color: #2D353C;
  }
  
  .personalisedBurger p {
    display: inline-block;
    vertical-align: middle;
    line-height: 60px;
  }
  
  .grid-container {
    margin-top: 10px;
    display: grid;
    grid-template-rows: 40px 200px;
    grid-template-areas: "categoryName" "burgers";
  }
  
  .categoryName {
    grid-area: categoryName;
    color: white;
    line-height: 40px;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .scrollable {
    grid-area: burgers;
    overflow: auto;
    white-space: nowrap;
    display: grid;
    grid-template-columns: 202px 202px 202px 202px 202px;
    grid-template-areas: "burger1 burger2 burger3 burger4 burger5";
  }
  
  .menuItem:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 1px white inset;
    border-radius: 10px;
  }
  
  .menuItem:active {
    background-color: white;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .menuPic {
    grid-area: menuPic;
  }
  
  .menuPic img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .menuTitle {
    grid-area: menuTitle;
    color: white;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    /* font-weight: bold; */
    /* text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); */
    text-transform: uppercase;
  }
</style>
