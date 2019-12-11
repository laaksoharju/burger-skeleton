<template>
	<div >
		Order #{{orderId}}
		<div v-for="(menu, key) in order.menus" :key="key">
			{{order.type}} {{uiLabels.ingredients}}: {{ menu.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
	</div>
</div>
</template>
<script>
export default {
  name: 'OrderItem',
  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  }
}
</script>
<style scoped>

</style>
