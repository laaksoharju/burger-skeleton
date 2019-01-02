<template>
  <div id="container">
    <Navbar 
      :displayButtons='true'
      :backAddressProperty='"./#/"' 
      :backTextProperty='"START OVER"' 
      :titleProperty='"CREATE YOUR MENU"' 
      :nextAddressProperty='"./#/OrderSummary"' 
      :nextTextProperty='"FINISH ORDER"'/>
    <Tabs/>
    <Footer 
      :currentOrder='currentOrder' 
      :orderTotal='orderTotal' />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Tabs from '@/components/Tab.vue';
import Footer from '@/components/Footer.vue';

var orderTotal = 12.81;

var exampleItem = {
  name: "Bacon Deli",
  imgSrc: require('@/assets/Burgers/Beef/beef2.png')
};

export default {
  name: 'OrderPage',
  components: {
    Navbar,
    Tabs,
    Footer
  },
  data () {
    return {
      currentOrder: [ exampleItem, exampleItem ],
      orderTotal: orderTotal
    }
  }
}
</script>

<style scoped>
</style>
