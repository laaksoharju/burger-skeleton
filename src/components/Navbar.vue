<template>
  <div class='fixed navbar'>

      <a :href="backAddressProperty" v-if="displayButtons" >
        <div class="button" id="backButton"> {{ backTextProperty }} </div>
      </a>

      <h1>{{ titleProperty }}</h1>

      <a :href="nextAddressProperty" v-if="displayButtons">
        <div class="button" id="nextButton"> {{ nextTextProperty }} </div>
      </a>
      
  </div>
</template>

<script>
  export default {
    props: [
      'displayButtons',

      'backAddressProperty',
      'backTextProperty',

      'titleProperty',

      'nextAddressProperty',
      'nextTextProperty'
    ]
  }
</script>

<style>
  a {
    text-decoration: none;
  }
  * {
      box-sizing: border-box;
  }

  .fixed {
    position: fixed;
    /* NOT NECESSARY BECAUSE THE WIDTH IS 100% */
    /* left: 0;
          right: 0; */
    top: 0;
    z-index: 2;
  }
  .blank{
    grid-area: c;
    width: 150px;
    height: 40px;
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
  }

  .navbar h1 {
    grid-area: b;
    color: white;
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
    grid-area: c;
    margin-right: 15px;
    background-color: #05c46b;
  }


  /* Queries */
  @media only screen and (max-width: 480px) {
    .navbar h1 {
      font-size: 30px;
    }
  }
</style>
