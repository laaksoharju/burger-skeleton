<template>
  <div class="ingredient">
     <h3>{{item["ingredient_"+ lang]}}</h3>
      <p>{{item.selling_price}}:-</p>
      <div id="addremove">
        <button ref = "Ordering "id="dec" v-on:decrease="decrementCounter($event)" v-on:click="decrementCounter($event)"> - </button>
        {{item.counter}}
        <button ref = "Ordering" id="inc" v-on:increase="incrementCounter($event)" v-on:click="incrementCounter($event)"> + </button>
      </div>
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
      this.$emit('increment');
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
  grid-template-rows: 40% 40% 20%;

}
</style>
