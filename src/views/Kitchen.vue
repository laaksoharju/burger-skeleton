<template>

<div id="orders">
  <img class="example-panel" src= "@/assets/kitchen2.jpeg">

  <div>
    <h1>{{uiLabels.cook}}</h1>
  </div>
  <div v-for="countIng in countAllIngredients" v-if="countIng.count>0" :key="countAllIngredients.indexOf(countIng)">
    {{countIng.name}}: {{countIng.count}}
  </div>
  <h1>{{ uiLabels.ordersInQueue }}</h1>
  <div>
    <OrderItemToPrepare class="orderitems" v-for="(order, key) in orders" v-if="order.status === 'not-started'" v-on:done="markDone(key)" :order-id="key" :order="order" :ui-labels="uiLabels" :lang="lang" :key="key">
    </OrderItemToPrepare>
  </div>

  <h1>{{ uiLabels.ordersFinished }}</h1>
  {{$store.state.hello}}
  <div>
    <OrderItemToBePickedUp class="orderitems" v-for="(order, key) in orders" v-if="order.status === 'done'" v-on:picked-up="markPickedUp(key)" :order-id="key" :order="order" :lang="lang" :ui-labels="uiLabels" :key="key">
    </OrderItemToBePickedUp>
  </div>
<br>
<hr>

</div>
</template>




<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'
import OrderItemToBePickedUp from '@/components/OrderItemToBePickedUp.vue'
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  name: 'Ordering',
  components: {
    OrderItem,
    OrderItemToPrepare,
    OrderItemToBePickedUp
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            //the ordering system and the kitchen
  data: function(){
    return {
    }
  },
  computed: {
    countBeef100: function() {
      return this.countNumberOfIngredients(2)
    },
    countAllIngredients: function() {
      let ingredientTuples = [];
      for (let i = 0; i < this.ingredients.length; i += 1) {
        ingredientTuples[i] = {};
        ingredientTuples[i].name = this.ingredients[i]['ingredient_' + this.lang];
        ingredientTuples[i].count = this.countNumberOfIngredients(this.ingredients[i].ingredient_id);
        }
      return ingredientTuples;
    }
  },
  methods: {
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    },
    markPickedUp: function (orderid) {
      this.$store.state.socket.emit("orderPickedUp", orderid);
    },
    countNumberOfIngredients: function (id) {
      let counter = 0;
      for (let order in this.orders) {
        let menus = this.orders[order].menus;
        for(let j = 0; j < menus.length; j += 1){
        for (let i = 0; i < menus[j].ingredients.length; i += 1) {
          if (menus[j].ingredients[i].ingredient_id === id && this.orders[order].status !== 'done' && this.orders[order].status !== 'picked-up' ) {
            counter += 1;
          }
        }
      }
    }
      return counter;
    }
  }
}
</script>
<style scoped>
@import 'https://fonts.googleapis.com/css?family=Questrial&display=swap';
#orders {
  font-size: 24pt;
  font-family: 'Questrial', sans-serif;
}

h1 {
  text-transform: uppercase;
  font-size: 2.0em;
/*  border: 5px outset black;
	width: 450px;
  margin: 2px;
  border-radius: 5px;
  background-color: dimgray;
  text-decoration: underline;*/
}
h3{
  text-decoration: underline;
}
.orderitems{
	border: 5px outset lightcoral;
	display: table;
  margin: 2px;
  border-radius: 5px;
  background-color: floralwhite;

}
.example-panel{
  position:fixed;
  z-index:-2;
  left:0;
  top:0;
  opacity: 0.2;
}
</style>
