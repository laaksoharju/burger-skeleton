<script>
// import sharedOrder from '@/components/sharedOrder.js';


export default {
  name: 'Footer',
  props: [
    'currentOrder',
    'orderTotal'
  ]
}
</script>

<template>
  <div class="footer">
    <div class="currentOrder">
      <div class="orderItem" v-for="(item, index) of currentOrder" :key="index">
        <img :src="item.imgSrc">
      </div>
    </div>

    <div class="total">
      <span>TOTAL </span>
      <p class="totalValue">
        ${{ orderTotal[0] }}
      </p>
    </div>
  </div>
</template>

<style>
.footer {
  position: fixed;
  bottom: 0;
  /* overflow: hidden; */
  height: 110px;
  width: 100%;
  background-color: #1e272e;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 110px;
  grid-template-rows: 110px;
  grid-template-areas: "a b";
}

.currentOrder {
  grid-area: a;
  /* position: fixed;
  bottom: 10px;
  left: 2%; */
  /* width: 85%; */
  height: 110px;
}

.orderItem {
  display: inline-block;
  height: 110px;
}

.orderItem img {
  max-height: 85%;
  margin: 5% 0 0 5px;
}

.orderItem:hover {
  cursor: pointer;
}

.total { 
  grid-area: b;
  /* position: fixed;
  /* bottom: 10px;
  left: 90%; */
  width: 100%;
  height: 100%;
  /* border-radius: 5px; */
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
