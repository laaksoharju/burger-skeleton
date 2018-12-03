<template>
  <div id="container">
    <Navbar :titleProperty="navTitle" />
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
  },
  data () {
    return {
      navTitle: 'create your menu'
    }
  }
}
</script>

<style scoped>
#container {
  font-size: 24pt;
  font-family: Roboto;
}
</style>