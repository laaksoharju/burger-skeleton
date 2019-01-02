<script>
export default {
  name: 'Footer',
  props: [
    'currentOrder',
    'orderTotal'
  ],
  methods: {
    removeItem: function(itemIndex) {
      this.$emit('removeItemFromOrder', itemIndex); //talking to orderpage
    }
  }
}
</script>

<template>
  <div class="footer">
    <div class="currentOrder">
      <div class="orderItem" v-for="(item, index) of currentOrder" :key="index" @click="removeItem(index)">
        <div class="removeItem">
          <img src="@/assets/redX.png" />
        </div>
        <img :src="item.imgSrc">
        <p>{{ item.title }}</p>
      </div>
    </div>

    <div class="total">
      <span>TOTAL:</span>
      <p class="totalValue">
        ${{ orderTotal[0].toFixed(2) }}
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
  width: 110px;
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

.removeItem {
  position: fixed;
  height: 30px;
  width: 30px;
  z-index: 2;
  margin-left: 79px;
}

.removeItem img {
  max-width: 70%;
  margin-right: 15px;
}

.total { 
  padding: 5px;
  background-color: #416451;
  color: #ffffff;
  display: inline-block;
}

.totalValue {
  line-height: 80px;
  vertical-align: center;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}
</style>
