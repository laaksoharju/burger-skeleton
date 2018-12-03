<!--
<template>
<div id="title">
<img src="@/assets/sweden.png" align="right"><br><br><br>
<img src="@/assets/united-kingdom.png" align="right">

<div class = "box">
Eating Location
</div>

<div id="grid">
<a class = "eatin" href="./#/OrderPage">
<img class="image_size" src="@/assets/eat_here.png" align="center"><br>
<span>EAT IN</span>
</a>

<a class = "takeout" href="./#/OrderPage">
<img class="image_size" src="@/assets/take_out.png" align="center"><br>
<span>TAKE OUT</span>
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
@import url('https://fonts.googleapis.com/css?family=Roboto');
#title {
font-size:24pt;
font-family: Roboto;
}
.box{
/* Style for "EATING LOC" */
width: 554px;
height: 75px;
text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7);
color: #ffffff;
font-family: Roboto;
font-size: 64px;
font-weight: 700;
text-transform: uppercase;
position: relative;
left: 448px;
}
#grid {
display: grid;
grid-template-columns: 336px 336px;
color: #ffffff;
text-align: center;
}
a {
text-decoration: none;
}
.eatin{
width: 336px;
height: 368px; 
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
border-radius: 5px;
background-color: #192920;
position: relative;
top: 10%;
left: 331px;
grid-column: 1;
grid-row:1;
justify-content: center;
align-items: center;
}
.takeout{
width: 336px;
height: 368px;
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
border-radius: 5px;
background-color: #192920;
position: relative;
top: 10%;
left: 438px;
grid-column: 2;
grid-row:1;

}
.image_size{
/* Style for "Images" */
position: relative;
margin: auto;
margin-top: 15%;

width: 260px;
height: 270px;
box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
border-radius: 5px;
}
</style>
-->
<template>
<div class="cuerpo">
    <div class="flags">
        <img src="@/assets/sweden.png">
        <img src="@/assets/uk.png">
    </div>
    <div class = "title">
        EATING LOCATION
    </div>
    <div class="buttons">
        <a class = "dine_in" href="./#/OrderPage">
            <img class="dineIN" src="@/assets/dine_in.png">
    </a>
        <a class = "take_out" href="./#/OrderPage">
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
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    .cuerpo {
        display: flex;
        flex-direction: column;

        background-color: #2d4739;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    .flags {
        display: flex;

        margin-top: 20px;
        margin-right: 20px;
        align-self: flex-end;
    }
    .title {
        margin-top: 30px;
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