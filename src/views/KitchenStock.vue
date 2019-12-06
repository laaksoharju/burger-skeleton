<template>

<div id="stock">
  <img class="example-panel" src= "@/assets/kitchen2.jpeg">
  {{$store.state.hello}}

<h1>{{uiLabels.usedingredients}}</h1>

<div id="ingredientsused" v-for="item in ingredients" v-if="item.stock<30">
{{item["ingredient_"+ lang]}}: {{item.stock}}
<br>
add <input type="number" id="antalsaker" name="antalsaker"> {{item["ingredient_"+ lang]}} to stock
<input type="button" id="laggtill" name="laggtill" value="add">

</div>
</div>
</template>


<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'
import Ingredient from '@/components/Ingredient.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  name: 'KitchenStock',
  components: {
    OrderItem,
    OrderItemToPrepare,
    Ingredient
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
    },

  methods: {
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
