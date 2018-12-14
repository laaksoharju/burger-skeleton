<template>
	<div>
		{{order.orderId}}
    <div v-for="(burger, key) in order.burgers" :key="key">
      {{uiLabels.ingredients}}: {{ burger.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
    </div>
	</div>
</template>
<script>
export default {
  name: 'OrderItem',
  props: {
    uiLabels: Object,
    order: Object,
    lang: String
  }
}
</script>
<style scoped>
	
</style>