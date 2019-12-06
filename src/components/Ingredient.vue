<template>
  <div class="ingredient">
    <label>
      <h3>{{item["ingredient_"+ lang]}}</h3>
      <p>{{item.selling_price}}:-</p>
      <button id="dec" v-on:click="decrementCounter($event)"> - </button>
      {{counter}}
      <button id="inc" v-on:click="incrementCounter($event)"> + </button>
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
    incrementCounter: function (ev) {
      if (ev.target.id === "inc") {
        this.counter += 1;
        // sending 'increment' message to parent component or view so that it
        // can catch it with v-on:increment in the component declaration
        this.$emit('increment');
      }
    },
    decrementCounter: function (ev) {
      if (ev.target.id === "dec" && this.counter>0) {
        this.counter -= 1;
        // sending 'increment' message to parent component or view so that it
        // can catch it with v-on:increment in the component declaration
        this.$emit('decrement');
      }
    },
    resetCounter: function () {
      this.counter = 0;
    }
  }
}
</script>
<style scoped>

</style>
