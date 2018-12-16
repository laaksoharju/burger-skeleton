<template>
  <div class="footer">
    <div class="currentOrder">
      <div class="orderItem" v-for="(item, index) of currentOrder" :key="index">
        <img :src="item.imgSrc">
      </div>
    </div>

    <div class="total">
      <span>Total: </span>
      <p class="totalValue">
        ${{ orderTotal }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: [
    'currentOrder',
    'orderTotal'
  ]
}
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  overflow: hidden;
  height: 80px;
  width: 100%;
  background-color: #1e272e;
  z-index: 2;
}

.currentOrder {
  position: fixed;
  bottom: 10px;
  left: 2%;
  width: 85%;
  height: 60px;
  background-color: #416451;
  border: 1px solid black;
  display: inline-block;
  border-radius: 5px;
}

.orderItem {
  width: 50px;
  height: 40px;
  background-color: orange;
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px 0 0 10px;
  display: inline-block;
}

.orderItem img {
  max-height: 90%;
  margin-left: 5px;
}

.orderItem:hover {
  cursor: pointer;
}

.total { 
  position: fixed;
  bottom: 10px;
  left: 90%;
  width: 90px;
  height: 60px;
  border-radius: 5px;
  background-color: #416451;
  color: #ffffff;
  display: inline-block;
}

.totalValue {
  line-height: 30px;
  vertical-align: center;
  text-align: center;
  font-weight: bold;
}
</style>
