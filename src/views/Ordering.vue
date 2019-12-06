<template>
<div id="ordering" class=container>
  <img class="example-panel" src="@/assets/kitchen2.jpeg">

  <div id="huvudmeny">
    <button v-on:click="switchLang()">{{ uiLabels.language }}</button>
    <button id="btn1" class="btn active" v-on:click="highlightButton(); redirect1()">{{uiLabels.burger}}</button>
    <button id="btn2" class="btn" v-on:click="highlightButton() ; redirect2()">{{uiLabels.bread}}</button>
    <button id="btn3" class="btn" v-on:click="highlightButton(); redirect3()">{{uiLabels.topping}}</button>
    <button id="btn4" class="btn" v-on:click="highlightButton(); redirect4()">{{uiLabels.sauce}}</button>
  </div>
  <div class="orderSummary">
    <div id="order-table">
      <h2>{{ uiLabels.yourOrder }}</h2>
      <table style="width:100%">
        <tr v-for="item in chosenIngredients">
          <td>
            {{item.counter}}
          </td>
          <td>{{item["ingredient_"+lang]}}</td>
          <td>{{item.selling_price}}:-</td>
        </tr>
      </table>
    </div>
  </div>

  <div id="price-summary" v-if="chosenIngredients.length>0">
    <table style="width:100%">
      <td>{{uiLabels.total}}</td>
      <td>{{ price }} :-</td>
    </table>
    <button v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button>
  </div>

  <div class=menuDisplay>
    <h1>{{ uiLabels.ingredients }}</h1>

    <div id=ingredient-choice>
      <Ingredient ref="ingredient" v-for="item in ingredients" v-on:increment="addToOrder(item);removeDuplicates()" v-on:decrement="removeFromOrder(item)" v-show="item.category===category" :item="item" :lang="lang" :key="item.ingredient_id">
      </Ingredient>
    </div>

  </div>
  <div id="buttons">
    <button id="previous-button" v-if="category!==1" v-on:click="previousCategory">{{ uiLabels.previous }}</button>
    <button id="next-button" v-if="category!==4" v-on:click="nextCategory">{{ uiLabels.next }}</button>
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
    removeDuplicates: function() {
      this.chosenIngredients = [ ...new Set(this.chosenIngredients) ]
    },
    addToOrder: function(item) {
      this.chosenIngredients.push(item);
      this.price += +item.selling_price;
      item.counter+=1;
    },

    removeFromOrder: function(item) {
      this.chosenIngredients.pop(item);
      this.price += -item.selling_price;
      item.counter-=1;
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
      for (var item in ingredients){
        item.counter=0;
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
.container {
  display: grid;

  grid-template-areas:
    "header header"
    "content side"
    "buttons empty";

  grid-template-columns: 1fr 200px;
  grid-template-rows: auto 1fr 5em;
  grid-gap: 1em;
  height: 100vh;
}

#buttons {
  grid-area: buttons;
  position: relative;
  font-size: 5em;
}

#next-button {
  position: absolute;
  top: 0;
  right: 5em;
}

.menuDisplay {
  grid-area: content;
}

#ingredient-choice {
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-template-columns: repeat(auto-fill, 10em);
  text-align: center;
  font-size: 18px;
  overflow-y: scroll;
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
  grid-area: header;
  display: grid;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;
  grid-template-columns: repeat(auto-fill, 10em);
}

#price-summary {
  z-index: 2;
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
  overflow-y: scroll;
}

#order-table {
  width: 100%;
  position: relative;
}
</style>
