<template>
  <!-- Note in this component that it is using another component -->
<div>
  <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>
  <button id = "orderPickedUp" v-on:click="orderPickedUp">
    {{uiLabels.pickedup}}
  </button>
</div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: 'OrderItemToBePickedUp',
  components: { OrderItem },
  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  },
  methods: {
    orderPickedUp: function () {
      // sending 'done' message to parent component or view so that it
      // can catch it with v-on:done in the component declaration
      this.$emit('picked-up');
    },
    cancelOrder: function () {
      // not implemented
    }
  }
}
</script>
<style scoped>
	#orderPickedUp{
    font-size: 30px;
    background-color: indianred;
    font-stretch: expanded;
    color: white;
  }
</style>
