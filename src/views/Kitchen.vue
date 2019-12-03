<template>
<div id="orders">
  <div v-for="countIng in countAllIngredients" v-if="countIng.count>0" :key="countAllIngredients.indexOf(countIng)">
    {{countIng.name}}: {{countIng.count}}
  </div>
  <h1>{{ uiLabels.ordersInQueue }}</h1>
  <div>
    <OrderItemToPrepare v-for="(order, key) in orders" v-if="order.status !== 'done'" v-on:done="markDone(key)" :order-id="key" :order="order" :ui-labels="uiLabels" :lang="lang" :key="key">
    </OrderItemToPrepare>
  </div>

  <h1>{{ uiLabels.ordersFinished }}</h1>
  {{$store.state.hello}}
  <div>
    <OrderItem v-for="(order, key) in orders" v-if="order.status === 'done'" :order-id="key" :order="order" :lang="lang" :ui-labels="uiLabels" :key="key">
    </OrderItem>
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
      let ingredientTuples = []
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
    countNumberOfIngredients: function (id) {
      let counter = 0;
      for (let order in this.orders) {
        for (let i = 0; i < this.orders[order].ingredients.length; i += 1) {
          if (this.orders[order].ingredients[i].ingredient_id === id) {
            counter +=1;
          }
        }
      }
      return counter;
    }
  }
}
</script>
<style scoped>
#orders {
  font-size: 24pt;
}

h1 {
  text-transform: uppercase;
  font-size: 1.4em;
}
</style>
