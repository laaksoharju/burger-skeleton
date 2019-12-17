export default {
	methods: {
    groupIngredients(ingredients) {
      let grouped = []
      for (let i = 0; i < ingredients.length; i += 1) {
        let newIngredient = true
        for (let j = 0; j < grouped.length; j += 1) {
          if (ingredients[i].ingredient_id === grouped[j].ing.ingredient_id) {
            grouped[j].count += 1;
            newIngredient = false;
            break;
          }
        }
        if (newIngredient)
          grouped.push({ing: ingredients[i], count: 1})
      }
      return grouped;
    }
  }
}