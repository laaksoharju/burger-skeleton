<template>
<div class='fixed navbar'>
    <a :href="backAddressProperty" >
      <div class="button" id="backButton"> {{ backTextProperty }} </div>
    </a>
  <h1>{{ titleProperty }}</h1>
</div>
</template>

<script>
  export default {
    props: [
      'backAddressProperty',
      'backTextProperty',

      'titleProperty',
    ]
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  * {
      box-sizing: border-box;
  }

  .fixed {
    position: fixed;
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
  }

  .navbar h1 {
    grid-area: b;
    color: white;
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    font-size: 40px;
    text-transform: uppercase;
    margin-right: 165px;
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

  /* Queries */
  @media only screen and (max-width: 480px) {
    .navbar h1 {
      font-size: 30px;
    }
  }
</style>
