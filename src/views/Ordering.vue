<template>
<div id="ordering">
  <img class="example-panel" src="@/assets/kitchen2.jpeg">
  <button v-on:click="switchLang()">{{ uiLabels.language }}</button>


  <div id="huvudmeny">
    <button id="btn1" class="btn active" v-on:click="highlightButton(); redirect1()">{{uiLabels.burger}}</button>
    <button id="btn2" class="btn" v-on:click="highlightButton() ; redirect2()">{{uiLabels.bread}}</button>
    <button id="btn3" class="btn" v-on:click="highlightButton(); redirect3()">{{uiLabels.topping}}</button>
    <button id="btn4" class="btn" v-on:click="highlightButton(); redirect4()">{{uiLabels.sauce}}</button>
  </div>

  <div class="orderSummary">
    <div id="order-table">
      <h1>{{ uiLabels.yourOrder }}</h1>
      <table style="width:100%">
        <tr v-for="item in chosenIngredients">
          <td>{{item["ingredient_"+lang]}}</td>
          <td>{{item.selling_price}}:-</td>
        </tr>
      </table>
      <hr>
    </div>

    <div id="price-summary" v-if="chosenIngredients.length>0">
      <h3>{{uiLabels.total}}</h3>
      {{ price }} :-
    </div>
  </div>


  <h1>{{ uiLabels.ingredients }}</h1>

  <div id=ingredient-choice>
    <Ingredient ref="ingredient" v-for="item in ingredients" v-on:increment="addToOrder(item)" v-on:decrement="removeFromOrder(item)" v-show="item.category===category" :item="item" :lang="lang" :key="item.ingredient_id">
    </Ingredient>
  </div>

  <h1>{{ uiLabels.order }}</h1>
  {{ chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}, {{ price }} kr
  <button v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button>
  <button class="previous-button" v-on:click="previousCategory">{{ uiLabels.previous }}</button>
  <button class="next-button" v-on:click="nextCategory">{{ uiLabels.next }}</button>

  <h1>{{ uiLabels.ordersInQueue }}</h1>
  <div>
    <OrderItem v-for="(order, key) in orders" v-if="order.status !== 'done'" :order-id="key" :order="order" :ui-labels="uiLabels" :lang="lang" :key="key">
    </OrderItem>
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
    }
  },
  created: function() {
    this.$store.state.socket.on('orderNumber', function(data) {
      this.orderNumber = data;
    }.bind(this));
  },
  methods: {
    addToOrder: function(item) {
      this.chosenIngredients.push(item);
      this.price += +item.selling_price;
    },

      removeFromOrder: function(item) {
        this.chosenIngredients.pop(item);
        this.price += -item.selling_price;
      },
    placeOrder: function() {
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
    highlightButton: function() {
      var btns = document.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = "btn";
          this.className += " active";
        });
      }
    },
    redirect1: function() {
      this.category = 1;
    },
    redirect2: function() {
      this.category = 2;
    },
    redirect3: function() {
      this.category = 3;
    },
    redirect4: function() {
      this.category = 4;
    },
  }
}
</script>
<style scoped>
/* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
#ingredient-choice {
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-template-columns: repeat(auto-fill, 10em);
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
  padding: 1em;
  background-color: pink;
  color: black;
}

/*allt nedan gäller menyn "burgare bröd osv"*/
ul {
  margin: 50px 0 30px 0;
  padding: 0;
}

#huvudmeny {
  display: grid;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;
  grid-template-columns: repeat(auto-fill, 10em);
}

#price-summary {
  width: 100%;
  z-index: 2;
  margin:0.5em;
  position: fixed;
  bottom: 1em;
  background-color: pink;
  border: 0.2em dashed black;
}

.btn {
  padding: 2em;
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
  height: 100%;
  /* Full-height: remove this if you want "auto" height */
  width: 15em;
  /* Set the width of the sidebar */
  position: fixed;
  /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1;
  /* Stay on top */
  top: 0;
  /* Stay at the top */
  right: 0;
  border: 0.2em solid black;
  background-color: pink;
  overflow-x: hidden;
  /* Disable horizontal scroll */
}

#order-table {
  width: 100%;
  padding: 1.5em;
}
</style>
