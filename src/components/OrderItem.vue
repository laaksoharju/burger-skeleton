<template>
	<div>
		{{order.orderId}}
    <div v-for="(burger, key) in order.burgers" :key="key">
      {{uiLabels.ingredients}}:
      <div v-for="(ing, key2) in groupIngredients(burger.ingredients)" :key="key2">
        {{ ing.count + " x " + ing.ing["ingredient_" + lang] }}
      </div>
    </div>
	</div>
</template>
<script>
import utilityMethods from '@/mixins/utilityMethods.js'

export default {
  name: 'OrderItem',
  props: {
    uiLabels: Object,
    order: Object,
    lang: String
  },
  mixins: [utilityMethods]
}
</script>
<style scoped>
	
</style>