<template>
  <div id="container">
    <Navbar 
      :displayButtons='true'
      :backAddressProperty='"./#/"' 
      :backTextProperty='"START OVER"' 
      :titleProperty='"CREATE YOUR MENU"' 
      :nextAddressProperty='"./#/OrderSummary"' 
      :nextTextProperty='"FINISH ORDER"'
      />
    <Tabs @addedItemToOrder="addItem" />
    <Footer 
      :currentOrder='currentOrder' 
      :orderTotal='orderTotal' 
      @removeItemFromOrder="removeItem"
      />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Tabs from '@/components/Tab.vue';
import Footer from '@/components/Footer.vue';

// using array because vue live updated array values
var runningTotal = [ 0.00 ];
var runningOrder = [];

export default {
  name: 'OrderPage',
  components: {
    Navbar,
    Tabs,
    Footer
  },
  data () {
    return {
      currentOrder: runningOrder,
      orderTotal: runningTotal
    }
  },
  methods: {
    addItem: function(item) {
      // add order to order list
      runningOrder.push({
        title: item.title,
        imgSrc: item.imgSrc
      });

      // update total price, have to use an array unfortunately
      runningTotal.push(runningTotal[0] + item.price);
      runningTotal.splice(0, 1);
    },
    removeItem: function(itemIndex) {
      runningOrder.splice(itemIndex, 1);
    }
  }
}
</script>

<style scoped>
</style>
