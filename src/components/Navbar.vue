<template>
  <div class='fixed navbar'>
    <div style="width: 165px; height: 40px">
      <a :href="backAddressProperty" v-if="backAppears">
        <div class="button" id="backButton"> {{ backTextProperty }} </div>
      </a>
    </div>
    
    <h1>{{ titleProperty }}</h1>
    
    <div style="width: 165px; height: 40px">
      <a :href="nextAddressProperty" v-if="nextAppears">
        <div class="button" id="nextButton"> {{ nextTextProperty }} </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'backAppears',
      'backAddressProperty',
      'backTextProperty',
  
      'titleProperty',
  
      'nextAppears',
      'nextAddressProperty',
      'nextTextProperty'
    ]
  }
</script>

<style>
  a {
    text-decoration: none;
  }
  
  .fixed {
    position: fixed;
    /* NOT NECESSARY BECAUSE THE WIDTH IS 100% */
    /* left: 0;
        right: 0; */
    top: 0;
    z-index: 2;
  }
  
  .navbar {
    display: grid;
    grid-template-areas: "a b c";
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16);
    background-color: #416451;
    margin-bottom: 100px;
  }
  
  .navbar h1 {
    grid-area: b;
    margin-left: -15px;
    margin-right: -15px;
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    font-size: 40px;
    text-transform: uppercase;
  }
  
  .button {
    width: 150px;
    height: 40px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    align-self: center;

    /* Text content */
    color: white;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    line-height: 40px;
  }
  
  #backButton {
    grid-area: a;
    margin-left: 15px;
    background-color: #ff3f34;
  }
  
  #nextButton {
    margin-right: 15px;
    background-color: #05c46b;
  }
</style>
