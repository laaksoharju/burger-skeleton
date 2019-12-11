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
    <button id="btn3" :class="['btn', {'active': category===3}]" v-on:click=" redirect(3)">{{uiLabels.topping}}</button>
    <button id="btn4" :class="['btn', {'active': category===4}]" v-on:click=" redirect(4)">{{uiLabels.sauce}}</button>
    <button id="btn5" :class="['btn', {'active': category===5}]" v-on:click=" redirect(5)">{{uiLabels.sideorders}}</button>
    <button id="btn6" :class="['btn', {'active': category===6}]" v-on:click=" redirect(6)">{{uiLabels.drinks}}</button>
    <button id="btn7" :class="['btn', {'active': category===7}]" v-on:click="checkout()">{{uiLabels.checkout}}</button>

  </div>

  <div class="orderSummary">
    <div id="order-table">
      <h2>{{ uiLabels.yourOrder }}</h2>
      <table style="width:100%">

        <tr v-for="item in chosenIngredientsSet" v-if="item.counter>0" :key="item.ingredient_id">
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

  <div id="price-summary" v-if="chosenIngredients.length>0">

    <table style="width:100%">
      <td>{{uiLabels.total}}</td>
      <td>{{ price }} :-</td>
    </table>
    <div v-if="category!=7">
      <button class="btn" v-on:click="checkout()">{{ uiLabels.checkout }}</button>
    </div>
    <div v-else-if="category==7">
      <button id="pobutton" v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button>
    </div>

  </div>

  <div class=menuDisplay>


    <div id=ingredient-choice>
      <Ingredient ref="ingredient" v-for="item in ingredients" v-on:increment="; IsOkToAdd(item);addToOrder(item)" v-on:decrement=" IsOkToAdd(item);removeFromOrder(item)" v-show="item.category===category" :item="item" :okToAdd="okToAdd" :lang="lang"
        :key="item.ingredient_id">
      </Ingredient>
    </div>

    <!-- reviewsidan på samma sätt som ordersummarysidan -->

    <div id="finalsummary" v-if="this.category == 7">
      <h1> {{uiLabels.review}} </h1>
      <h2>
        <table style="width:100%">
          <tr v-for="item in chosenIngredientsSet" v-if="item.counter>0" :key="item.ingredient_id">
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
    </div>

  </div>
  <div id="buttons">
    <button id="previous-button" v-if="category!==1" v-on:click="previousCategory">{{ uiLabels.previous }}</button>
    <button id="next-button" v-if="category!==7" v-on:click="nextCategory">{{ uiLabels.next }}</button>
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

      okToAdd: true
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
      if (this.okToAdd){
      this.chosenIngredients.push(item);
      this.price += +item.selling_price;
      item.counter += 1;
      this.$emit("increase");
      }

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

    removeFromOrder: function(item) {
      if (item.counter>0){
      this.price += -item.selling_price;
      item.counter -= 1;
      this.chosenIngredients.splice(this.chosenIngredients.indexOf(item), 1);
      this.$emit("decrease");
      }

    },

    placeOrder: function() {
      if (confirm(this.uiLabels.instructions)) {
        var i,
          //Wrap the order in an object
          order = {
            ingredients: this.chosenIngredients,
            price: this.price
          };
        // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)

        this.$store.state.socket.emit('order', {
          order: order
        });
        //set all counters to 0. Notice the use of $refs
        for (i = 0; i < this.$refs.ingredient.length; i += 1) {
          this.$refs.ingredient[i].resetCounter();
        }
        this.price = 0;
        this.chosenIngredients = [];

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
    redirect: function(num) {
      this.category = num;

    },
    highlightButton: function() {
      let btns = document.getElementsByClassName("btn");
      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active");
          current[0].className = "btn";
          this.className += " active";
        });
      }
    },


    checkout: function() {
      let btns = document.getElementsByClassName("btn");
      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active");
          let cobtn = document.getElementById("btn7");
          current[0].className = "btn";
          cobtn.className += " active";
        });
        this.category = 7;

      }
    }
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
    "content side"
    "buttons empty";

  grid-template-columns: 1fr 300px;
  grid-template-rows: 25px auto 1fr 5em;
  grid-gap: 1em;
  height: 100vh;
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
  color:red;
  font-size: 1.3em;
}

#plusknapp{
  color:green;
}

#next-button {
  position: absolute;
  top: 0;
  right: 5em;
  font-size: 1.5em;
  padding: 0.1em 1.8em;
}

#previous-button {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5em;
  padding: 0.1em 1em;
}

.menuDisplay {
  grid-area: content;
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
#pobutton{
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
  position:relative;
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
