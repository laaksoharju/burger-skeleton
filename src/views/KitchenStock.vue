<template>

<div id="stock">
  <img class="example-panel" src= "@/assets/kitchen2.jpeg">
  {{$store.state.hello}}

<h1>{{uiLabels.usedingredients}}</h1>

<div id="ingredientsused" v-for="item in ingredients" v-if="item.stock<30" :key="item.ingredient_id">
  {{item["ingredient_"+ lang]}}: {{item.stock}}
  <br>
  add <input v-model.number="num" type="number" id="antalsaker" name="antalsaker"> {{item["ingredient_"+ lang]}} to stock
  <button id="laggtill" v-on:click="addToStock(item, num)">add</button>

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
  name: 'Ordering',
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

  methods: { addToStock: function(item, num){
    this.$store.state.socket.emit('updateStock', {ingredient: item}, item.stock + num)
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
@import 'https://fonts.googleapis.com/css?family=Questrial&display=swap';

#stock{
  font-size: 24pt;
  font-family: 'Questrial', sans-serif;


}
#ingredientsused{
  border: outset firebrick;
  margin: 0.5em;
  display: table;
  background-color: DarkBlue;
  color: floralwhite;
}
</style>
