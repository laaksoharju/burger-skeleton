<template>
  <div class='navbar fixed'>
      <a href="./#/"><img src="@/assets/Back.png" alt="Back"></a>
    <div class="">
      <h1>{{ titleProperty }}</h1>
    </div>
      <a href="./#/OrderSummary"><img src="@/assets/Next.png" alt="Next"></a>
    <!-- <ul>
      <li style="float:left">
        <a href="./#/"><button id="backbutton" class='button'>◁ START OVER</button></a>
        <a href="./#/"><img src="@/assets/Back.png" alt="Back"></a>

      </li>
      <li style="float:right">
        <a href="./#/OrderSummary"><button id="nextbutton" class='button'>FINISH ORDER ▷</button></a>
        <a href="./#/OrderSummary"><img src="@/assets/Next.png" alt="Next"></a>

      </li>
      <li>
        <h1>{{ titleProperty }}</h1>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  props: [
    'titleProperty'
  ]
}
</script>

<style>



.navbar a{
  display: inline-block;
  height: 80px;
}

.navbar img{
  max-width: 100%;
  max-height: 100%;
  margin:10px 20px;
}

.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100px;
  z-index: 2;
}


.navbar {
  width: auto;
  height: 80px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  background-color: #416451;
  text-align: center;
  color: #ffffff;
  font-size: 70px;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}


.navbar h1 {
  font-size: 50px;
  line-height: 80px;
  text-transform: uppercase;
}

.navbar ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}


.button {
  width: 231px;
  height: 60px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
}

#backbutton {
  background-color: #ff3f34;
}

#nextbutton {
  background-color: #05c46b;
}
</style>
