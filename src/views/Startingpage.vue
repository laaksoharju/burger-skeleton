<template>
  <div>
    <button v-on:click="switchLang()">{{ uiLabels.language }}</button>
    <router-link to="ordering">{{ uiLabels.placeOrder }}</router-link>
  </div>
</template>
<script>


//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/mixins/sharedVueStuff.js'

/* instead of defining a Vue instance, export default allows the only 
necessary Vue instance (found in main.js) to import your data and methods */
export default {
  name: 'StartingPage',
  components: {
  },
  mixins: [sharedVueStuff], // include stuff that is used in both 
                            // the ordering system and the kitchen
  data: function() { //Not that data is a function!
    return {
      chosenIngredients: [],
      price: 0,
      orderNumber: "",
      category: 1
    }
  },
  created: function () {
    this.$store.state.socket.on('orderNumber', function (data) {
      this.orderNumber = data;
    }.bind(this));
  },
  methods: {
  }
}
</script>
<style scoped>

</style>