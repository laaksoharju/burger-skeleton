<template>
  <div class='navbar fixed'>
    <ul>
      <li style="float:left">
        <a href="./#/"><button id="backbutton" class='button'>◁ START OVER</button></a>
      </li>
      <li style="float:right">
        <a href="./#/OrderSummary"><button id="nextbutton" class='button'>FINISH ORDER ▷</button></a>
      </li>
      <li>
        <h1>{{ titleProperty }}</h1>
      </li>
    </ul>
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
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  background-color: #416451;
  text-align: center;
  color: #ffffff;
  font-size: 70px;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  margin-bottom: 100px;
}

.navbar h1 {
  font-size: 40px;
  line-height: 100px;
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