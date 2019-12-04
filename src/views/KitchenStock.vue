<template>

<div id="stock">
  <img class="example-panel" src= "@/assets/kitchen2.jpeg">
  {{$store.state.hello}}

<h1>{{uiLabels.usedingredients}}</h1>
<div id="ingredientsused" v-for="countIng in countAllIngredients[1]" v-if="countIng.count>0" :key="countAllIngredients[1].indexOf(countIng)">
  {{countIng.name}}: {{countIng.count}}
<br>
add {{countIng.name}}
<input type="number" id="antalsaker" name="antalsaker">
<input type="button" id="laggtill" name="laggtill" value="add">
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
          if (this.orders[order].ingredients[i].ingredient_id === id && this.orders[order].status !== 'done' && this.orders[order].ingredients[i].category !== 6 ) {
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
.example-panel{
  position:fixed;
  z-index:-2;
  left:0;
  top:0;
  opacity: 0.2;
}
#ingredientsused{
  border: outset firebrick;
  margin: 0.5em;
  display: table;
}
</style>
