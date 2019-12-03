<template>
<div id="orders">
  <div>
    <h1>{{uiLabels.cook}}</h1>
  </div>
  <div v-for="countIng in countAllIngredients[0]" v-if="countIng.count>0" :key="countAllIngredients[0].indexOf(countIng)">
    {{countIng.name}}: {{countIng.count}}
  </div>
  <h1>{{ uiLabels.ordersInQueue }}</h1>
  <div>
    <OrderItemToPrepare class="orderitems" v-for="(order, key) in orders" v-if="order.status !== 'done'" v-on:done="markDone(key)" :order-id="key" :order="order" :ui-labels="uiLabels" :lang="lang" :key="key">
    </OrderItemToPrepare>
  </div>

  <h1>{{ uiLabels.ordersFinished }}</h1>
  {{$store.state.hello}}
  <div>
    <OrderItem class="orderitems" v-for="(order, key) in orders" v-if="order.status === 'done'" :order-id="key" :order="order" :lang="lang" :ui-labels="uiLabels" :key="key">
    </OrderItem>
  </div>
<br>
<hr>
<h3>{{uiLabels.usedingredients}}</h3>
<div v-for="countIng in countAllIngredients[1]" v-if="countIng.count>0" :key="countAllIngredients[1].indexOf(countIng)">
  {{countIng.name}}: {{countIng.count}}
</div>
</div>
</template>




<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  name: 'Ordering',
  components: {
    OrderItem,
    OrderItemToPrepare
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            //the ordering system and the kitchen
  data: function(){
    return {
      chosenIngredients: [],
      price: 0
    }
  },
  computed: {
    countBeef100: function() {
      return this.countNumberOfIngredients(2)
    },
    countAllIngredients: function() {
      let ingredientTuples1 = []
      let ingredientTuples2 = []
      for (let i = 0; i < this.ingredients.length; i += 1) {
        ingredientTuples1[i] = {};
        ingredientTuples1[i].name = this.ingredients[i]['ingredient_' + this.lang];
        ingredientTuples1[i].count = this.countNumberOfIngredients(this.ingredients[i].ingredient_id)[0];
        ingredientTuples2[i] = {};
        ingredientTuples2[i].name = this.ingredients[i]['ingredient_' + this.lang];
        ingredientTuples2[i].count = this.countNumberOfIngredients(this.ingredients[i].ingredient_id)[1];
      }
      return [ingredientTuples1,ingredientTuples2];
    }
  },
  methods: {
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    },
    countNumberOfIngredients: function (id) {
      let counter1 = 0;
      let counter2 = 0;
      for (let order in this.orders) {
        for (let i = 0; i < this.orders[order].ingredients.length; i += 1) {
          if (this.orders[order].ingredients[i].ingredient_id === id && this.orders[order].status !== 'done') {
            counter1 +=1;
          }
          if (this.orders[order].ingredients[i].ingredient_id === id) {
            counter2 +=1;
          }
        }
      }
      return [counter1, counter2];
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
  font-size: 1.5em;


}
.orderitems{
	border: 5px outset cornflowerblue;
	display: table;
  margin: 2px;
  border-radius: 5px;
  background-color: floralwhite;
  
}
</style>
