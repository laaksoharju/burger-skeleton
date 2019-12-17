<template>
  <div class="ingredient">
      <button id="inc" v-on:click="incrementCounter($event)"> + </button>
      {{ itemCount }}
      <button id="dec" v-on:click="decrementCounter($event)"> - </button>
      {{item["ingredient_"+ lang]}}, {{item.selling_price}}:-
  </div>
</template>
<script>
export default {
  name: 'Ingredient',
  props: {
    item: Object,
    lang: String,
    itemCount: Number
  },
    data: function () {
    return {
    };
  },
  methods: {
    incrementCounter: function (ev) {
      if (ev.target.id === "inc") {
        // sending 'increment' message to parent component or view so that it
        // can catch it with v-on:increment in the component declaration
        this.$emit('increment');
      }
    },
    decrementCounter: function (ev) {
      if (ev.target.id === "dec") {
        // sending 'increment' message to parent component or view so that it
        // can catch it with v-on:increment in the component declaration
        this.$emit('decrement');
      }
    },
    resetCounter: function () {
    },
    getImage: function (image) {
      if (image !== "") {
        let img = require('../assets/' + image);
        return img;
      }
      else
        return require('../assets/exampleImage.jpg');
    }
  }
}
</script>
<style scoped>
  .ingredient {
    font-weight: bold;
  }
</style>