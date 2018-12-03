<template>
<<<<<<< HEAD
<div class="wrapper">
=======
  <div class="container">
>>>>>>> d907f45c74c089f46522fd051d839ccebf35ce96
    <div class="flags">
      <img src="@/assets/sweden.png">
      <img src="@/assets/uk.png">
    </div>
    <div class="title">
      EATING LOCATION
    </div>
    <div class="buttons">
      <a class="dine_in" href="./#/OrderPage">
        <img class="dineIN" src="@/assets/dine_in.png">
      </a>
      <a class="take_out" href="./#/OrderPage">
        <img class="takeOUT" src="@/assets/take_out.png">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage'
}
</script>

<style scoped>
<<<<<<< HEAD
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    .wrapper {
        display: flex;
        flex-direction: column;
=======
.container {
  display: flex;
  flex-direction: column;
  background-color: #2d4739;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
>>>>>>> d907f45c74c089f46522fd051d839ccebf35ce96

.flags {
  display: flex;
  margin-top: 10px;
  margin-right: 10px;
  align-self: flex-end;
}

.title {
  margin-top: 20px;
  align-self: center;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.7);
}

.buttons {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  align-self: center;
  align-items: center;
  justify-content: center;
}

/*    Responsiveness*/
@media screen and (max-width: 760px), screen and (max-height: 420px) {
  .flags {
    margin-top: 5px;
    margin-right: 5px;
  }
  .flags img {
    width: 90px;
    height: 67px;
  }

  .title {
    margin-top: 10px;
    font-size: 50px;
  }

  .buttons {
    margin-top: 12px;
    flex-direction: column;
  }

  .buttons img {
    width: 154px;
    height: 168px;
  }
}
@media screen and (orientation: landscape) {
  .buttons {
    margin-top: 12px;
    flex-direction: row;
  }
}

/*iPhone 5/5S/SE*/
@media screen and (max-width: 320px) and (max-height: 568px), (max-width: 568px) and (max-height: 320px){
  .title {
    font-size: 40px;
  }
}
</style>
