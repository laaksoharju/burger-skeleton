<template>
  <div id="container">
    <Navbar :titleProperty="navTitle" />
    <Tabs/>
    <Underbar/>
  </div>
</template>

<script>
import Tabs from '@/components/Tab.vue';
import Underbar from '@/components/Underbar.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'OrderPage',
  components:{
    Tabs,
    Underbar,
    Navbar
  },
  data () {
    return {
      navTitle: 'create your menu'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

#container {
  font-size: 24pt;
  font-family: Roboto;
}

.tabs a.tabBurgers {
float: right;
position: relative;
    left: -60%;
overflow: hidden;
  /* Style for "BURGERS" */
width: 230px;
height: 60px;
border-radius: 10px 10px 0 0;
background-color: #ffa801;
font-family: Roboto;
font-size: 40px;
font-weight: 400;
text-transform: uppercase;
position: relative;
top: 170px;
color: #ffffff;
}

.tabs a.tabDrinks {
overflow: hidden;
  /* Style for "black" */
float: right;
    position: relative;
    left: -23%;
width: 230px;
height: 60px;
border-radius: 10px 10px 0 0;
background-color: #000000;
font-family: Roboto;
font-size: 40px;
font-weight: 400;
text-transform: uppercase;
position: relative;
color: #ffffff;
top: 170px;
}


.tabs a.tabSides {
   /* Style for "Yellow" */
float: right;
    position: relative;
    left: 13%;
width: 230px;
height: 60px;
border-radius: 10px 10px 0 0;
background-color: #3c40c6;
font-family: Roboto;
font-size: 40px;
font-weight: 400;
text-transform: uppercase;
position: relative;
top: 170px;
color: #ffffff;
}

/* Style the buttons that are used to open the tab content */
.tab button {
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
}

.tabcontent {
    position:relative;
    top: 231px;
    border-top: none;
    background-color: #ffa801;
}

/* Style the tab content */
.burgerscontent {
 display: none;
width: 1116px;
height: 656px;
border-radius: 10px;
background-color: #ffa801;
}

.drinkscontent{
 display: none;
/* Style for "Tabs backg" */
width: 1116px;
height: 656px;
border-radius: 10px;
background-color: #000000;
}

.sidescontent{
 display: none;
/* Style for "Tabs backg" */
width: 1116px;
height: 656px;
border-radius: 10px;
background-color: #3c40c6;
}
</style>