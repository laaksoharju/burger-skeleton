<template>
	<div >
		<span id= "ordertext"> Order #{{orderId}} </span>
		<div v-for="(menu, key) in order.menus" :key="key">
			<span id="menutext"> {{uiLabels.menu}} {{key+1}}: </span> {{ menu.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
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
#ordertext {
	font-size: 40px;
	font-weight: bolder;
}
#menutext {
	font-weight: bolder;
}


</style>
