<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import Welcome from './views/welcome.vue';

export default {
  name: 'app',
  components: {
    // Ordering
    Welcome
  }
}
</script>

<style>
body {
  height: 170vh;
  background: #2d4739;;
  background-size: 200% 200%;
  animation: Gradient 20s linear infinite;
}

@keyframes Gradient {
  0% {
    background-position: 10% 10%
  }
  20% {
    background-position: 50% 50%
  }
  40% {
    background-position: 10% 90%
  }
  60% {
    background-position: 90% 90%
  }
  80% {
    background-position: 90% 10%
  }
  100% {
    background-position: 10% 10%
  }
}
</style>
