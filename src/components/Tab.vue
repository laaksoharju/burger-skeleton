<script>
  export default {
    name: 'Tabs',
    data: function() {
      return {
        activetab: 'burgers'
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
        <br>
        <hr class="divider">
        <div class="grid-container">
          <div class="categoryName">BEEF</div>
          <div class="scrollable">
            <div class="burger1">
              <div class="burgerPic"><img src="@/assets/Burgers/Beef/beef1.png"></div>
              <div class="burgerTitle">Double Beef</div>
            </div>
            <div class="burger2">
              <div class="burgerPic"><img src="@/assets/Burgers/Beef/beef2.png"></div>
              <div class="burgerTitle">Bacon Deli</div>
            </div>
            <div class="burger3">
              <div class="burgerPic"><img src="@/assets/Burgers/Beef/beef3.png"></div>
              <div class="burgerTitle">Chili Burger</div>
            </div>
            <div class="burger4">
              <div class="burgerPic"><img src="@/assets/Burgers/Beef/beef4.png"></div>
              <div class="burgerTitle">Big Beef</div>
            </div>
            <div class="burger5">
              <div class="burgerPic"><img src="@/assets/Burgers/Beef/beef5.png"></div>
              <div class="burgerTitle">Double Meat</div>
            </div>
          </div>
        </div>
        <br>
        <hr class="divider">
        <div class="grid-container">
          <div class="categoryName">CHICKEN</div>
          <div class="scrollable">
            <div class="burger1">
              <div class="burgerPic"><img src="@/assets/Burgers/Chicken/chicken1.png"></div>
              <div class="burgerTitle">Chicken Basic</div>
            </div>
            <div class="burger2">
              <div class="burgerPic"><img src="@/assets/Burgers/Chicken/chicken2.png"></div>
              <div class="burgerTitle">Chicken Deli</div>
            </div>
            <div class="burger3">
              <div class="burgerPic"><img src="@/assets/Burgers/Chicken/chicken3.png"></div>
              <div class="burgerTitle">Crispy Chicken</div>
            </div>
            <div class="burger4">
              <div class="burgerPic"><img src="@/assets/Burgers/Chicken/chicken4.png"></div>
              <div class="burgerTitle">Large Chicken</div>
            </div>
            <div class="burger5">
              <div class="burgerPic"><img src="@/assets/Burgers/Chicken/chicken5.png"></div>
              <div class="burgerTitle">Chicken BBQ</div>
            </div>
          </div>
        </div>
        <br>
        <hr class="divider">
        <div class="grid-container">
          <div class="categoryName">FISH</div>
          <div class="scrollable">
            <div class="burger1">
              <div class="burgerPic"><img src="@/assets/Burgers/Fish/fish1.png"></div>
              <div class="burgerTitle">Fish Burger</div>
            </div>
            <div class="burger2">
              <div class="burgerPic"><img src="@/assets/Burgers/Fish/fish2.png"></div>
              <div class="burgerTitle">Integral Fish</div>
            </div>
            <div class="burger3">
              <div class="burgerPic"><img src="@/assets/Burgers/Fish/fish3.png"></div>
              <div class="burgerTitle">Long Fish</div>
            </div>
          </div>
        </div>
        <br>
        <hr class="divider">
        <div class="grid-container">
          <div class="categoryName">VEGETARIAN</div>
          <div class="scrollable">
            <div class="burger1">
              <div class="burgerPic"><img src="@/assets/Burgers/Veggie/veggie1.png"></div>
              <div class="burgerTitle">Classic Veggie</div>
            </div>
            <div class="burger2">
              <div class="burgerPic"><img src="@/assets/Burgers/Veggie/veggie2.png"></div>
              <div class="burgerTitle">Pink Veggie</div>
            </div>
            <div class="burger3">
              <div class="burgerPic"><img src="@/assets/Burgers/Veggie/veggie3.png"></div>
              <div class="burgerTitle">Crispy Veggie</div>
            </div>
            <div class="burger4">
              <div class="burgerPic"><img src="@/assets/Burgers/Veggie/veggie4.png"></div>
              <div class="burgerTitle">Typical Veg</div>
            </div>
            <div class="burger5">
              <div class="burgerPic"><img src="@/assets/Burgers/Veggie/veggie5.png"></div>
              <div class="burgerTitle">Veggie Cool</div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="contentItem" id="drinksContent" v-if="activetab === 'drinks'">
        <div>Drink Content</div>
      </div>
  
      <div class="contentItem" id="sidesContent" v-if="activetab === 'sides'">
        <div>Side Content</div>
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
    margin-top: 90px;
    /* Text inside*/
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    line-height: 45px;
  }
  
  #burgersFlap {
    order: 0;
    background-color: #ffa801;
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
    margin-top: 90px;
    margin-bottom: 110px;
  }
  
  .contentItem {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
  }
  
  #burgersContent {
    background-color: #ffa801;
  }
  
  #drinksContent {
    background-color: #000000;
  }
  
  #sidesContent {
    background-color: #3c40c6;
  }

  /* CONTENT INSIDE TABS, THIS COULD BE MINIMISED BUT MY BRAIN CANT COME WITH SOMETHING */
    hr.divider {
    overflow: visible;
    /* For IE */
    height: 30px;
    border-style: solid;
    border-color: white;
    border-width: 1px 0 0 0;
  }
  
  .personalisedBurger {
    background-color: #485460;
    height: 202px;
    border-radius: 10px;
    padding-left: 15%;
    padding-right: 15%;

    /* Text */
    color: white;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    line-height: 202px;
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
    grid-template-rows: 40px 180px;
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

    -webkit-column-gap: 30px;
    /* Chrome, Safari, Opera */
    -moz-column-gap: 30px;
    /* Firefox */
    column-gap: 30px;
  }
  
  .burger1 {
    display: grid;
    grid-template-rows: 140px 40px;
    grid-template-areas: "burgerPic" "burgerTitle";
    grid-area: burger1;
  }
  
  .burger1:hover {
    cursor: pointer;
    width: 202px;
    height: 180px;
    box-shadow: 0px 0px 0px 1px white inset;
    border-radius: 10px;
  }
  
  .burger1:active {
    background-color: white;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .burger2 {
    cursor: pointer;
    display: grid;
    grid-template-rows: 140px 40px;
    grid-template-areas: "burgerPic" "burgerTitle";
    grid-area: burger2;
  }
  
  .burger2:hover {
    cursor: pointer;
    width: 202px;
    height: 180px;
    box-shadow: 0px 0px 0px 1px white inset;
    border-radius: 10px;
  }
  
  .burger2:active {
    background-color: white;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .burger3 {
    cursor: pointer;
    display: grid;
    grid-template-rows: 140px 40px;
    grid-template-areas: "burgerPic" "burgerTitle";
    grid-area: burger3;
  }
  
  .burger3:hover {
    cursor: pointer;
    width: 202px;
    height: 180px;
    box-shadow: 0px 0px 0px 1px white inset;
    border-radius: 10px;
  }
  
  .burger3:active {
    background-color: white;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .burger4 {
    cursor: pointer;
    display: grid;
    grid-template-rows: 140px 40px;
    grid-template-areas: "burgerPic" "burgerTitle";
    grid-area: burger4;
  }
  
  .burger4:hover {
    cursor: pointer;
    width: 202px;
    height: 180px;
    box-shadow: 0px 0px 0px 1px white inset;
    border-radius: 10px;
  }
  
  .burger4:active {
    background-color: white;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .burger5 {
    cursor: pointer;
    display: grid;
    grid-template-rows: 140px 40px;
    grid-template-areas: "burgerPic" "burgerTitle";
    grid-area: burger5;
  }
  
  .burger5:hover {
    cursor: pointer;
    width: 202px;
    height: 180px;
    box-shadow: 0px 0px 0px 1px white inset;
    border-radius: 10px;
  }
  
  .burger5:active {
    background-color: white;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .burgerPic {
    grid-area: burgerPic;
  }
  
  .burgerPic img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 100%;
  }
  
  .burgerTitle {
    grid-area: burgerTitle;
    color: white;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    /* font-weight: bold; */
    /* text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); */
    text-transform: uppercase;
  }
</style>
