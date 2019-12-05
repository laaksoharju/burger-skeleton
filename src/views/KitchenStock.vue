<template>

<div id="stock">
  <img class="example-panel" src= "@/assets/kitchen2.jpeg">
  {{$store.state.hello}}

<h1>{{uiLabels.usedingredients}}</h1>
<div id="ingredientsused" v-for="countIng in countAllIngredients"
      v-if="countIng.count>0"
      :key="countAllIngredients.indexOf(countIng)">
    {{countIng.name}}: {{countIng.count}}
<br>
add <input type="number" id="antalsaker" name="antalsaker"> {{countIng.name}} to stock
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

    countNumberOfIngredients: function (id) {
      let counter = 0;
      for (let order in this.orders) {
        for (let i = 0; i < this.orders[order].ingredients.length; i += 1) {
          if (this.orders[order].ingredients[i].ingredient_id === id) {
            counter = this.orders[order].ingredients[i].stock;
          }
        }
      }
      return counter;
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
