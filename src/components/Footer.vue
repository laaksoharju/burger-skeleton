<template>
  <div class="footer">
    <div class="total">
      Total
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  position:fixed;
  bottom: 0;
  overflow: hidden;
  height: 110px;
  width: 100%;
  background-color: #1e272e;
  z-index: 2;
}

.total { 
  margin: 10px auto 0 auto;
  width: 90px;
  height: 90px;
  border-radius: 5px;
  background-color: #416451;
  color: #ffffff;
}
</style>
