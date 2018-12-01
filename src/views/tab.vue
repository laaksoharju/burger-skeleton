<template>
<div id="second">
<div class='navbar fixed'>
<a href="./#/first"><button class='backbutton'>◁ START OVER</button></a>
CREATE YOUR MENU
<a href="./#/third"><button class='nextbutton'>FINISH ORDER ▷</button></a>
</div>
<tabbs/>
<underbar/>
</div>
</template>

<script>
import tabbs from './tab1.vue'
import underbar from './underbar.vue'

export default {
  name: 'Second',
  components:{
    tabbs,
    underbar
  },
  data: function(){
    return true;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');
#second{
    font-size:24pt;
    font-family: Roboto;
}


.navbar {
width: auto;
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
background-color: #416451;
text-align: center;
color: #ffffff;
font-size: 70px;
text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
font-weight: 700;
margin-down: 100px;

}
.backbutton {

width: 231px;
height: 60px;
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
border-radius: 100px;
background-color: #ff3f34;
float: left;
font-size: 24px;
color: #ffffff;
font-weight: 700;

}

.nextbutton{

width: 231px;
height: 60px;
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
border-radius: 100px;
background-color: #05c46b;
float: right;
font-size: 24px;
color: #ffffff;
font-weight: 700;
}
.navbar.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 110px;
    z-index: 2;
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