<template>
<div id="stock">
  <img class="example-panel" src="@/assets/kitchen2.jpeg">
  {{$store.state.hello}}

  <h1 class="labels">{{uiLabels.usedingredients}}</h1>

  <div class="labels">{{uiLabels.burger}}</div>
  <div class="ingredientsused" v-for="item in ingredients" v-if="item.category == 1" :key="item.ingredient_id">
    {{item["ingredient_"+ lang]}}: {{item.stock}}
    <br>
    add <input v-model.number="num[item.ingredient_id]" type="number" id="antalsaker" name="antalsaker">
    {{item["ingredient_"+ lang]}} to stock
    <button id="addbutton" v-on:click="addToStock(item);clearField(item.ingredient_id)">add</button>
  </div>

  <br>
  <div class="labels">{{uiLabels.bread}}</div>
  <div class="ingredientsused" v-for="item in ingredients" v-if="item.category == 2" :key="item.ingredient_id">
    {{item["ingredient_"+ lang]}}: {{item.stock}}
    <br>
    add <input v-model.number="num[item.ingredient_id]" type="number" id="antalsaker" name="antalsaker">
    {{item["ingredient_"+ lang]}} to stock
    <button id="addbutton" v-on:click="addToStock(item);clearField(item.ingredient_id)">add</button>
  </div>

  <br>
  <div class="labels">{{uiLabels.topping}}</div>
  <div class="ingredientsused" v-for="item in ingredients" v-if="item.category == 3" :key="item.ingredient_id">
    {{item["ingredient_"+ lang]}}: {{item.stock}}
    <br>
    add <input v-model.number="num[item.ingredient_id]" type="number" id="antalsaker" name="antalsaker">
    {{item["ingredient_"+ lang]}} to stock
    <button id="addbutton" v-on:click="addToStock(item);clearField(item.ingredient_id)">add</button>
  </div>

  <br>
  <div class="labels">{{uiLabels.sauce}}</div>
  <div class="ingredientsused" v-for="item in ingredients" v-if="item.category == 4" :key="item.ingredient_id">
    {{item["ingredient_"+ lang]}}: {{item.stock}}
    <br>
    add <input v-model.number="num[item.ingredient_id]" type="number" id="antalsaker" name="antalsaker">
    {{item["ingredient_"+ lang]}} to stock
    <button id="addbutton" v-on:click="addToStock(item);clearField(item.ingredient_id)">add</button>
  </div>

  <br>
  <div class="labels">{{uiLabels.sides}}</div>
  <div class="ingredientsused" v-for="item in ingredients" v-if="item.category == 5" :key="item.ingredient_id">
    {{item["ingredient_"+ lang]}}: {{item.stock}}
    <br>
    add <input v-model.number="num[item.ingredient_id]" type="number" id="antalsaker" name="antalsaker">
    {{item["ingredient_"+ lang]}} to stock
    <button id="addbutton" v-on:click="addToStock(item);clearField(item.ingredient_id)">add</button>
  </div>

  <br>
  <div class="labels">{{uiLabels.drinks}}</div>
  <div class="ingredientsused" v-for="item in ingredients" v-if="item.category == 6" :key="item.ingredient_id">
    {{item["ingredient_"+ lang]}}: {{item.stock}}
    <br>
    add <input v-model.number="num[item.ingredient_id]" type="number" id="antalsaker" name="antalsaker">
    {{item["ingredient_"+ lang]}} to stock
    <button id="addbutton" v-on:click="addToStock(item);clearField(item.ingredient_id)">add</button>
  </div>





</div>
</template>


<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'
import Ingredient from '@/components/Ingredient.vue'
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'KitchenStock',
  components: {
    OrderItem,
    OrderItemToPrepare,
    Ingredient
  },
  mixins: [sharedVueStuff],
  data: function() {
    return {
      chosenIngredients: [],
      price: 0,
      num: {}
    }
  },
  computed: {

  },

  methods: {

    addToStock: function(item) {
      this.$store.state.socket.emit('updateStock', {
        ingredient: item
      }, item.stock + this.num[item.ingredient_id])
    },

    clearField: function(id) {
      this.num[id] = null;
    },



  }

}
</script>
<style scoped>
.example-panel {
  position: fixed;
  z-index: -2;
  left: 0;
  top: 0;
  opacity: 0.2;
}

@import 'https://fonts.googleapis.com/css?family=Questrial&display=swap';

#stock {
  font-size: 1em;
  font-family: 'Questrial', sans-serif;


}

.ingredientsused {
  border: 0.3em outset lightcoral;
  margin: 0.5em;
  display: table;
  background-color: floralwhite;

}

#addbutton {
  font-size: 1.5em;
  background-color: indianred;
  font-stretch: expanded;
  color: white;
}

.labels {
  font-size: 3em;
  font-weight: bold;
}
</style>
