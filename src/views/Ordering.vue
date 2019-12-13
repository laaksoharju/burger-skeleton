<template>
<div id="ordering" class=container>
  <img class="example-panel" src="@/assets/kitchen2.jpeg">
  <div id="heady">
    <button id="switchlangbutton" v-on:click="switchLang()">
      {{ uiLabels.language }}
    </button>
    <div id="cancelbutton">
      <router-link tag="button" class="btn" to="/">{{uiLabels.cancelOrder}}</router-link>
    </div>
  </div>

  <div id="huvudmeny">

    <!--skapar en array med klasser,använder vue istället. btn är en sträng. googla conditional class vue -->
    <button id="btn1" :class="['btn', {'active': category===1}]" v-on:click="redirect(1)">{{uiLabels.burger}}</button>
    <button id="btn2" :class="['btn', {'active': category===2}]" v-on:click="redirect(2)">{{uiLabels.bread}}</button>
    <button id="btn3" :class="['btn', {'active': category===3}]" v-on:click="redirect(3)">{{uiLabels.topping}}</button>
    <button id="btn4" :class="['btn', {'active': category===4}]" v-on:click="redirect(4)">{{uiLabels.sauce}}</button>
    <button id="btn5" :class="['btn', {'active': category===5}]" v-on:click="redirect(5)">{{uiLabels.sideorders}}</button>
    <button id="btn6" :class="['btn', {'active': category===6}]" v-on:click="redirect(6)">{{uiLabels.drinks}}</button>
    <button id="btn7" :class="['btn', {'active': category===7}]" v-on:click="redirect(7)">{{uiLabels.checkout}}</button>

  </div>

  <div class="limittext" v-if= "category != 5 && category != 6 && category != 7" >
    {{uiLabels.choose}} max {{maxIngredients()}} </div>
  <div class="limittext" v-else-if= "category == 5 || category == 6" >
    {{uiLabels.noMaxLimit}} </div>


  <div class="orderSummary">
    <div id="order-table">
      <h2>{{ uiLabels.yourOrder }}</h2>
      <table style="width:100%">
       <h3>{{uiLabels.burger}}</h3>
        <tr v-for="item in chosenIngredientsSet" v-if="item.counter>0 && item.ingredient_id<54" :key="item.ingredient_id">
          <td> <button class="plusMinus" id="minusknapp" v-on:click="IsOkToAdd(item);removeFromOrder(item)"> - </button></td>
          <td>
            {{item.counter}}
          </td>
          <td> <button class="plusMinus" id="plusknapp" v-on:click="IsOkToAdd(item);addToOrder(item)"> + </button></td>
          <td>{{item["ingredient_"+lang]}}</td>
          <td id="price">{{item.selling_price * item.counter}}:-</td>
        </tr>
        <br>

        <h3>{{uiLabels.sides}}</h3>
        <tr v-for="item in chosenIngredientsSet" v-if="item.counter>0 && item.ingredient_id>53&& item.ingredient_id<57" :key="item.ingredient_id">
          <td> <button class="plusMinus" id="minusknapp" v-on:click="IsOkToAdd(item);removeFromOrder(item)"> - </button></td>
          <td>
            {{item.counter}}
          </td>
          <td> <button class="plusMinus" id="plusknapp" v-on:click="IsOkToAdd(item);addToOrder(item)"> + </button></td>
          <td>{{item["ingredient_"+lang]}}</td>
          <td id="price">{{item.selling_price * item.counter}}:-</td>
        </tr>
        <br>

        <h3>{{uiLabels.drinks}}</h3>
        <tr v-for="item in chosenIngredientsSet" v-if="item.counter>0 && item.ingredient_id>56" :key="item.ingredient_id">

          <td> <button class="plusMinus" id="minusknapp" v-on:click="IsOkToAdd(item);removeFromOrder(item)"> - </button></td>
          <td>
            {{item.counter}}
          </td>
          <td> <button class="plusMinus" id="plusknapp" v-on:click="IsOkToAdd(item);addToOrder(item)"> + </button></td>
          <td>{{item["ingredient_"+lang]}}</td>
          <td id="price">{{item.selling_price * item.counter}}:-</td>
        </tr>

      </table>
    </div>
  </div>

  <div id="price-summary">

    <table style="width:100%">
      <td>{{uiLabels.total}}</td>
      <td>{{ price }} :-</td>
    </table>
    <div v-if="category!=7">
      <button class="btn" v-on:click="redirect(7)">{{ uiLabels.checkout }}</button>
    </div>
    <div v-else-if="category==7">
      <button id="pobutton" v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button>
    </div>

  </div>

  <div class="menuDisplay">

    <div id="ingredient-choice">
      <Ingredient ref="ingredient" v-for="item in ingredients" v-on:increment="; IsOkToAdd(item);addToOrder(item)" v-on:decrement=" IsOkToAdd(item);removeFromOrder(item)" v-show="item.category===category" :item="item" :okToAdd="okToAdd" :lang="lang"
        :key="item.ingredient_id">

      </Ingredient>
    </div>

    <!-- reviewsidan på samma sätt som ordersummarysidan -->

    <div id="finalsummary" v-if="this.category == 7">
      <h1> {{uiLabels.review}} </h1>
      <h2>
        <table style="width:100%">
          <tr v-for="item in chosenIngredientsSet" :key="item.ingredient_id">
            <td>
              {{item.counter}}
            </td>
            <td>
              x
            </td>
            <td>{{item["ingredient_"+lang]}}</td>
            <td id="price">{{item.selling_price * item.counter}}:-</td>
          </tr>
        </table>
      </h2>
      <div v-if="chosenIngredients.length>0">
      <button v-on:click="addMenu()">{{uiLabels.done}}</button>
    </div>
      <div >
        <table id="order-summary" style="width:100%">
          <tr id="tablerow"  v-for="(menu,key) in currentOrder.menus" :key="key">
        <td id="menunr">{{uiLabels.menu}} {{key+1}}</td>
        <div v-for="(item,key2) in menu.ingredients" :key="key2">
          <td id="ing-display">{{item["ingredient_"+lang]}}</td>
        </div>
        <td id="editbtn"><button v-on:click="changeMenu(menu)">{{uiLabels.edit}}</button> </td>
      </tr>
      </table>
      </div>
    </div>

  </div>
  <div id="buttons">
    <button  class = "random-button" title:uiLabels.randomBurgerTitle v-if="category == 1" v-on:click = "randomBurger(ingredients)">{{uiLabels.goToRandomMenu}}</button>
    <button  class ="random-button2" v-if="category == 7 && randomBurgerBool()==true" v-on:click = "randomBurger(ingredients)">{{uiLabels.goToRandomMenu2}}</button>
    <button class="previous-button" v-if="category!==1" v-on:click="previousCategory"><span>{{ uiLabels.previous }}</span></button>
    <button class="next-button" v-if="category!==7" v-on:click="nextCategory"><span>{{ uiLabels.next }}</span></button>
  </div>

  <div id="footer">
    <img src="@/assets/gluten.png" height="20"> - {{uiLabels.glutenFree}}
    <img src="@/assets/dairy.png" height="20"> - {{uiLabels.dairyFree}}
    <img src="@/assets/vegan.png" height="20"> - {{uiLabels.vegan}}
  </div>

</div>
</template>
<script>
//import the components that are used in the template, the name that you
//use for importing will be used in the template above and also below in
//components
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'
/* instead of defining a Vue instance, export default allows the only
necessary Vue instance (found in main.js) to import your data and methods */
export default {
  name: 'Ordering',
  components: {
    Ingredient,
    OrderItem
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
  // the ordering system and the kitchen

  data: function() { //Not that data is a function!
    return {
      chosenIngredients: [],
      price: 0,
      category: 1,
      orderNumber: "",
      okToAdd: true,
      addedToMenu: false,
      randomBurgerBoolean: false,
      currentOrder: {
        menus: []
      }

    }

  },

  computed: {
    chosenIngredientsSet: function() {
      return [...new Set(this.chosenIngredients)]
    }
  },

  created: function() {
    this.$store.state.socket.on('orderNumber', function(data) {
      this.orderNumber = data;

    }.bind(this));
  },
  methods: {
    addToOrder: function(item) {
      if (this.okToAdd) {
        this.chosenIngredients.push(item);
        this.price += +item.selling_price;
        item.counter += 1;
        this.$emit("increase");
      }
    },

    changeMenu: function(menu) {
      this.chosenIngredients =[];
      for (let i = 0; i < menu.ingredients.length; i += 1){
        this.chosenIngredients.push(menu.ingredients[i]);
      }
      this.currentOrder.menus.splice(this.currentOrder.menus.indexOf(menu), 1);
    },

    addMenu: function() {
      this.randomBurgerBoolean = false;
      this.addedToMenu = true;
      this.currentOrder.menus.push({
        ingredients: this.chosenIngredients.splice(0),
        price: this.price,

      });
      for (let i = 0; i < this.chosenIngredients.length; i += 1) {
        this.chosenIngredients[i].counter=0;
      }
      this.chosenIngredients = [];
    },

    IsOkToAdd: function(item) {
      var i;
      let chosen = 0;
      this.okToAdd = true;
      let cat = item.category
      let lim;
      if (cat == 1) {
        lim = 2;
      }
      if (cat == 2) {
        lim = 1;
      }
      if (cat == 3) {
        lim = 4;
      }
      if (cat == 4) {
        lim = 2;
      }
      for (i = 0; i < this.chosenIngredients.length; i += 1) {
        if (this.chosenIngredients[i].category == cat) {
          chosen += 1;
        }
      }
      if (chosen >= lim) {
        this.okToAdd = false
      }
      return this.okToAdd;
    },

    maxIngredients: function() {
      let cat = this.category
      let max = 0;
      if (cat == 1) {
        max = 2;
      }
      if (cat == 2) {
        max = 1;
      }
      if (cat == 3) {
        max = 4;
      }
      if (cat == 4) {
        max = 2;
      }
      return max;

    },

    removeFromOrder: function(item) {
      if (item.counter > 0) {
        this.price += -item.selling_price;
        item.counter -= 1;
        this.chosenIngredients.splice(this.chosenIngredients.indexOf(item), 1);
        this.$emit("decrease");
      }

    },

    placeOrder: function() {
      if(this.addedToMenu == false ){
        alert("You cannot order nothing!\n Please add your order first!")
      }
      else if(this.chosenIngredients != []){
        alert("You have unfinished business...")
      }
      else if (confirm(this.uiLabels.instructions)) {
        /*
        for (i = 0; i < this.$refs.ingredient.length; i += 1) {
          this.$refs.ingredient[i].resetCounter();
        }*/
        this.$store.state.socket.emit('order', this.currentOrder);
        this.currentOrder = {
          menus: []
        };
        this.category = 1;
        this.price = 0;
      }

    },
    nextCategory: function() {
      this.category += 1;
      var btns = document.getElementsByClassName("btn");
      for (var i = btns.length - 1; i >= 0; i--)
        if (btns[i].className === "btn active") {
          btns[i].className = "btn";
          btns[i + 1].className += " active";
        }
    },
    previousCategory: function() {
      this.category -= 1;
      var btns = document.getElementsByClassName("btn");
      for (var i = 1; i < btns.length; i++)
        if (btns[i].className === "btn active") {
          btns[i].className = "btn";
          btns[i - 1].className += " active";
        }
      },


    randomBurger: function(ingredients){
      this.chosenIngredients = [];
      this.price = 0;

      this.randomBurgerBoolean = true;
      let burgmax = 9;
      let toppingmax = 34;
      let saucemax = 48;
      let breadmax = 52;
      let sidesmax = 55;
      let drinkmax = 60;


    for (let i = 0; i  < 2; i++){
      let randburg =   Math.floor(Math.random() * (burgmax));
      if (this.IsOkToAdd(ingredients[randburg])){
        this.addToOrder(ingredients[randburg])
    }}

    let randbread =   Math.floor(Math.random() * (breadmax-saucemax)) + saucemax;
    if(this.IsOkToAdd(ingredients[randbread])){
    this.addToOrder(ingredients[randbread])
  }
    for (let i = 0; i < 4; i++){
      let randtopping =   Math.floor(Math.random() * (toppingmax-burgmax)) + burgmax;
      if (this.IsOkToAdd(ingredients[randtopping])){
      this.addToOrder(ingredients[randtopping])
    }}

    for (let i = 0; i < 2; i++){
      let randsauce =   Math.floor(Math.random() * (saucemax-toppingmax)) + toppingmax;
      if (this.IsOkToAdd(ingredients[randsauce])){
        this.addToOrder(ingredients[randsauce])
    }}

    let randsides =   Math.floor(Math.random() * (sidesmax-breadmax)) + breadmax;
    this.addToOrder(ingredients[randsides])
    let randdrink =   Math.floor(Math.random() * (drinkmax-sidesmax)) + sidesmax;
    this.addToOrder(ingredients[randdrink])
      this.category =7;

},

randomBurgerBool: function(){
  if (this.randomBurgerBoolean == true ){
    return true
  }
  else if (this.randomBurgerBoolean == false){
    return false
  }
},


    redirect: function(num) {
      this.category = num;

    },

  }

}
</script>
<style scoped>
@import "https://fonts.googleapis.com/css?family=Quicksand&display=swap";

/* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
.container {
  font-family: 'Quicksand', sans-serif;
  display: grid;

  grid-template-areas:
    "header header"
    "nav nav"
    "chooseMax side"
    "content side"
    "buttons empty"
    "footer footer";

  grid-template-columns: 1fr 300px;

  grid-template-rows: 25px auto auto 1fr 5em;
  grid-gap: 1em;
  height: 100vh;
}


.limittext{
  grid-area: chooseMax;
  font-size: 20px;
  font-weight: bold;
}

#footer {
  grid-area: footer;
}

#menunr{
  font-weight:bold;
  vertical-align: top;
}

#order-summary{
   border-collapse: collapse;
}

#tablerow{
  border-bottom: solid 1px black;
}

#editbtn{
  text-align: right;
}

#price {
  text-align: right;
}

#buttons {
  grid-area: buttons;
  position: relative;
}

.plusMinus {
  background-color: pink;
  border: none;
  color: red;
  font-size: 1.3em;
}

#plusknapp {
  color: green;
}
/*PREVIOUS BUTTON*/
.previous-button {
  border-radius: 4px;

  border: none;

  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  position:absolute;
  left:0;
}

.previous-button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.previous-button span:after {
  content: '\00ab';
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
  transition: 0.5s;
}

.previous-button:hover span {
  padding-right: 25px;
}
.previous-button:hover span:after {
  opacity: 1;
  right: 0;
}

/*NEXT BUTTON*/
.next-button {
  border-radius: 4px;

  border: none;

  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  position:absolute;
  right:0px;
}

.next-button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.next-button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
  transition: 0.5s;
}

.next-button:hover span {
  padding-right: 25px;
}

.next-button:hover span:after {
  opacity: 1;
  right: 0;
}


.random-button2 {
  position:absolute;
  top:0;
  right:5em;
  font-size:1.5em;
  padding: 0.1em 1.8em;
  background:url("../assets/randomBackground.png") repeat scroll left top;

}


.random-button2 {
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ed3330;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.3s ease 0s;
}
.random-button2:hover{
  cursor:pointer;
  background: #434343;
  letter-spacing: 1px;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
  transition: all 0.4s ease 0s;
  }
.random-button {
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #ed3330;
padding: 20px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.3s ease 0s;
}
.random-button:hover {
cursor:pointer;
background: #434343;
letter-spacing: 1px;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}


.menuDisplay {
  grid-area: content;
  overflow-y: scroll;
}

#ingredient-choice {
  display: grid;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;
  grid-template-columns: repeat(auto-fill, 9em);
  text-align: center;
  font-size: 18px;
  overflow-y: scroll;
}

#finalsummary {
  width: 100%;
  position: relative;
}

#pobutton {
  padding: 0.5em;
  background-color: darkgreen;
  color: white;
  cursor: pointer;
  font-size: 18px;
  border-radius: 0.5em;
  text-align: center;
}

.example-panel {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -2;
  opacity: 0.2;
}

.ingredient {
  border: 0.2em solid black;
  padding: 0.3em;
  background-color: pink;
  color: black;
}

/*allt nedan gäller menyn "burgare bröd osv"*/
ul {
  margin: 50px 0 30px 0;
  padding: 0;
}

#heady {
  grid-area: header;
}

#huvudmeny {
  grid-area: nav;
  position: relative;
  display: grid;
  grid-column-gap: 0.2em;
  grid-row-gap: 0.4em;
  grid-template-columns: repeat(auto-fill, 8em);
  justify-content: start;
}

#cancelbutton {
  position: absolute;
  top: 0;
  right: 0;
}

#switchlangbutton {
  padding: 0.5em;
  background-color: royalblue;
  color: gold;
  cursor: pointer;
  font-size: 15px;
  border: 2px solid crimson;
  border-radius: 0.5em;
  text-align: center;
}

#cancelbutton {
  position: absolute;
  top: 0;
  right: 0;

}

#price-summary {
  z-index: 1;
  width: inherit;
  position: fixed;
  bottom: 0.5em;
  right: 0.5em;
  padding: 1em;

  background-color: pink;
  border: 0.2em dashed black;
}

.btn {
  padding: 0.5em;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
  border-radius: 0.5em;
  text-align: center;
}

/* Style the active class, and buttons on mouse-over */
.active,
.btn:hover {
  background-color: #bfbfbf;

}

.orderSummary {
  grid-area: side;
  border: 0.2em solid black;
  background-color: pink;
  padding: 1em;
  overflow-y: scroll;
}


#order-table {
  width: 100%;
  position: relative;
}

</style>
