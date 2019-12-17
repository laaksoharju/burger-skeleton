<template>
<div class="ingredient">
  <div id="allergies">
    <span id="gluten" v-if="item.gluten_free == 1">
      <img src="@/assets/gluten.png" height="20">
    </span>
    <span id="lactose" v-if="item.milk_free == 1">
      <img src="@/assets/dairy.png" height="20">
    </span>
    <span v-if="item.vegan == 1">
      <img src="@/assets/vegan.png" height="20">
    </span>
  </div>
  <h3 id="ing-title">{{item["ingredient_"+ lang]}}</h3>
  <p id="price">{{item.selling_price}}:-</p>
  <div id="addremove">
    <button ref="Ordering" id="dec" v-on:decrease="decrementCounter($event)" v-on:click="decrementCounter($event)"> - </button>
    {{counter}}
    <button ref="Ordering" id="inc" v-on:increase="incrementCounter($event)" v-on:click="incrementCounter($event)"> + </button>
  </div>
</div>
</template>
<script>
export default {
  name: 'Ingredient',
  props: {
    item: Object,
    lang: String,
    okToAdd: Boolean
  },
  data: function() {
    return {
      counter: 0
    };
  },

  methods: {
    incrementCounter: function(ev) {
      this.$emit('increment', this.item.ingredient_id);
      if (this.okToAdd) {
        if (ev.target.id === "inc") {
          this.counter += 1;
          // sending 'increment' message to parent component or view so that it
          // can catch it with v-on:increment in the component declaration
        }
      }
    },

    decrementCounter: function(ev) {
      if (ev.target.id === "dec" && this.counter > 0) {
        this.counter -= 1;
        // sending 'increment' message to parent component or view so that it
        // can catch it with v-on:increment in the component declaration
        this.$emit('decrement');
      }
    },
    resetCounter: function() {
      this.counter = 0;
    }
  }
}
</script>
<style scoped>
.ingredient {
  display: grid;
  position:relative;
  grid-template-areas:
  "allergies"
  "ingredient"
  "price"
  "buttons";

  grid-template-columns: auto;
  grid-template-rows: 5% 40% 25% 30%;

  width: 8em;
  height: 9em;
  hyphens: auto;
}

.vegan{
  grid-area: vegan;
}

#allergies{
  grid-area: allergies;
  position:absolute;
  left:0;
}

#ing-title{
  grid-area: ingredient;
}

#price{
  grid-area: price;
}

#addremove {
  grid-area: buttons;
}
@media (max-width: 600px){
  #addremove{
    font-size:16px;
  }
  #dec{
    font-size: 28px;
  }
  #inc{
    font-size: 28px;
  }
}
</style>
