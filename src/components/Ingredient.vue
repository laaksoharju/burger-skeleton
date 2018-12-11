<template>
  <div class="ingredient">
    <label>
      <button v-on:click="incrementCounter">{{ counter }}</button>
      {{item["ingredient_"+ lang]}}, {{item.selling_price}}:-
    </label>
  </div>
</template>
<script>
export default {
  name: 'Ingredient',
  props: {
    item: Object,
    lang: String
  },
    data: function () {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1;
      // sending 'increment' message to parent component or view so that it
      // can catch it with v-on:increment in the component declaration
      this.$emit('increment');
    },
    resetCounter: function () {
      this.counter = 0;
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