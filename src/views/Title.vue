
<template>
  <div id="title">
  <img src="@/assets/sweden.png" align="right"><br><br><br>
  <img src="@/assets/united-kingdom.png" align="right">
  <div class = "box">
  Eating Location
  </div>
  
  
  <div id="grid">
  <a class = "eatin" href="./#/second">
  <img class="image_size" src="@/assets/eat_here.png" align="center"><br>
  EAT IN
  </a>
  <a class = "takeout" href="./#/second">
  <img class="image_size" src="@/assets/take_out.png" align="center"><br>
  TAKE OUT
  </a>
  </div>
  



</div>
</template>
<script>
export default {
  name: 'Title',
  data: function(){
    return true;
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');
	#title {
    font-size:24pt;
    font-family: Roboto;
  }
.box{
    /* Style for "EATING LOC" */
    width: 554px;
    height: 75px;
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7);
    color: #ffffff;
    font-family: Roboto;
    font-size: 64px;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    left: 448px;
    }
#grid {
    display: grid;
    grid-template-columns: 336px 336px;
    color: #ffffff;
    text-align: center;
    }
a {
  text-decoration: none;
}
.eatin{
    width: 336px;
    height: 368px; 
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    background-color: #192920;
    position: relative;
    top: 10%;
    left: 331px;
    grid-column: 1;
    grid-row:1;
    justify-content: center;
    align-items: center;
    }
.takeout{
    width: 336px;
height: 368px;
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
border-radius: 5px;
background-color: #192920;
position: relative;
top: 10%;
left: 438px;
grid-column: 2;
grid-row:1;

    }
.image_size{
/* Style for "Images" */
position: relative;
margin: auto;
margin-top: 15%;

width: 260px;
height: 270px;
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
border-radius: 5px;
}

</style>