<template>
  <div class="underbar">
    asdfasfs
    <div class="total">
      Total<br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'underbar'
}
</script>

<style>
.underbar{
width: 110%;
overflow: hidden;
height: 110px;
background-color: #1e272e;
bottom: 0;
position:fixed;
z-index: 2;
}
.total{
/* Style for "Total" */
width: 90px;
height: 90px;
border-radius: 5px;
background-color: #416451;
color: #ffffff;
z-index: 3;
}
</style>
