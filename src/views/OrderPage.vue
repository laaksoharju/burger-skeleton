<template>
  <div id="container">
    <Navbar 
      :displayButtons='true'
      :backAddressProperty='"./#/"' 
      :backTextProperty='"START OVER"' 
      :titleProperty='"CREATE YOUR MENU"' 
      :nextAddressProperty='"./#/OrderSummary"' 
      :nextTextProperty='"FINISH ORDER"'/>
    <Tabs @addedItemToOrder="test" />
    <Footer 
      :currentOrder='currentOrder' 
      :orderTotal='orderTotal' />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Tabs from '@/components/Tab.vue';
import Footer from '@/components/Footer.vue';

// using array because vue live updated array values
var runningTotal = [12.18];

var exampleItem = {
  name: "Bacon Deli",
  imgSrc: require('@/assets/Burgers/Beef/beef2.png')
};

var runningOrder = [ exampleItem, exampleItem ];

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
    test: function(item) {
      
      runningOrder.push({
        name: item.title,
        imgSrc: item.imgSrc
      });

      runningTotal.push(runningTotal[0] + item.price);
      runningTotal.splice(0, 1);

      alert('Order size: ' + runningOrder.length + ' & total = ' + runningTotal[0]);

    }
  }
}


</script>

<style scoped>
</style>
