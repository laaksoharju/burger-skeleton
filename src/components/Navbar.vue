<template>
  <div class='navbar fixed'>
    <a href="./#/"><div id="backbutton"class="button" ><p>START OVER</p></div></a>
    <h1>{{ titleProperty }}</h1>
    <a href="./#/OrderSummary"><div id="nextbutton" class='button'><p>FINISH ORDER</p></div></a>
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

a {
  text-decoration: none;
}


.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  z-index: 2;
}

.navbar {

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16);
  background-color: #416451;
  margin-bottom: 100px;
}

.navbar h1 {
  margin-left: -15px;
    margin-right: -15px;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  font-size: 40px;
  line-height: 60px;
  text-transform: uppercase;
}

.navbar .button {
  color: white;
  width: 150px;
  height: 40px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  align-self: center;
}
.button p{
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  font-weight: bold;
}

#backbutton {
  margin-left: 15px;
  background-color: #ff3f34;
}

#nextbutton {
  margin-right: 15px;
  background-color: #05c46b;
}
</style>
