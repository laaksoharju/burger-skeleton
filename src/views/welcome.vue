<template>
  <div>
    <h1>Welcome to Burger Heavon</h1>
    <h3>Here are a list of links</h3> 
    <router-link to="first">Link to first page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style>
  h1, h3 {
    color: white;
  }
</style>