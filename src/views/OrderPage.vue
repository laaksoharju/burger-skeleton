<template>
  <div id="container">
    <Navbar :backAppears='1' :backAddressProperty='"./#/"' :backTextProperty='"START OVER"' :titleProperty='"CREATE YOUR MENU"' :nextAppears='1' :nextAddressProperty='"./#/OrderSummary"' :nextTextProperty='"FINISH ORDER"'/>
    <Tabs/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Tabs from '@/components/Tab.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'OrderPage',
  components: {
    Navbar,
    Tabs,
    Footer
  }
}
</script>

<style scoped>
#container {
  font-size: 24pt;
  font-family: Roboto;
}
</style>