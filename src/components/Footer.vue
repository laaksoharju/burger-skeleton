<script>
export default {
  name: 'Footer',
  props: [
    'currentOrder',
    'orderTotal'
  ],
  methods: {
    removeItem: function(itemIndex) {
      this.$emit('removeItemFromOrder', itemIndex);
    }
  }
}
</script>

<template>
  <div class="footer">
    <div class="currentOrder">
      <div class="orderItem" v-for="(item, index) of currentOrder" :key="index" @click="removeItem(index)">
        <img :src="item.imgSrc">
        <p>{{ item.title }}</p>
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
  height: 110px;
}

.orderItem {
  display: inline-block;
  height: 110px;
}

.orderItem:hover {
  cursor: pointer;
}

.orderItem img {
  max-height: 75%;
  margin: 5% 10px 0 10px;
}

.orderItem p {
  color: white;
  text-align: center;
  font-size: 12px;
}

.total { 
  width: 100%;
  height: 100%;
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
