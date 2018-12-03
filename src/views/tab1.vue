<template>
<div id="tabs" class="container">
  
    <div class="tabs">
        <a v-on:click="activetab=1" id ="tabBurgers">Burgers</a>
        <a v-on:click="activetab=2" id ="tabDrinks">Drinks</a>
        <a v-on:click="activetab=3" id ="tabSides">Sides</a>
    </div>

    <div class="content">
        <div v-if="activetab === 1" id="contentBurgers">
            <a href ="./#/create" class="createBox">
            CREATE YOUR<br>
            OWN<br>
            PERSONALISED<br>
            BURGER!
            </a>
            <div class="Beef">
            BEEF
            </div>
           Enables the generation of debug tables.
The output file can be still be set by using the -o option.

Well, as everyone said, use -S option. If you use -save-temps option, you can also get preprocessed file(.i), assembly file(.s) and object file(*.o). (get each of them by using -E, -S, and -c.)
Enables the generation of debug tables.
The output file can be still be set by using the -o option.

Well, as everyone said, use -S option. If you use -save-temps option, you can also get preprocessed file(.i), assembly file(.s) and object file(*.o). (get each of them by using -E, -S, and -c.)
Enables the generation of debug tables.
The output file can be still be set by using the -o option.

Well, as everyone said, use -S option. If you use -save-temps option, you can also get preprocessed file(.i), assembly file(.s) and object file(*.o). (get each of them by using -E, -S, and -c.)
Enables the generation of debug tables.
The output file can be still be set by using the -o option.

Well, as everyone said, use -S option. If you use -save-temps option, you can also get preprocessed file(.i), assembly file(.s) and object file(*.o). (get each of them by using -E, -S, and -c.)
Enables the generation of debug tables.
The output file can be still be set by using the -o option.

Well, as everyone said, use -S option. If you use -save-temps option, you can also get preprocessed file(.i), assembly file(.s) and object file(*.o). (get each of them by using -E, -S, and -c.)
Enables the generation of debug tables.
The output file can be still be set by using the -o option.

Well, as everyone said, use -S option. If you use -save-temps option, you can also get preprocessed file(.i), assembly file(.s) and object file(*.o). (get each of them by using -E, -S, and -c.)

        </div>
        <div v-if="activetab === 2" id="contentDrinks">
            Content for tab two
        </div>
        <div v-if="activetab === 3" id="contentSides">
            Content for tab three
        </div>
    </div>
  
</div>
</template>

<script>
export default{
   name: 'tabbs',
    data: function(){
        return{
        activetab: 1
        }
    } 
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
/* RESET */

/*
.tabs {
    overflow: hidden;
  margin-left: 20px;
    margin-bottom: -2px; 
}

.tabs ul {
    list-style-type: none;
    margin-left: 20px;
}

.tabs a{
    float: left;
    cursor: pointer;
    width: 230px;
    height: 60px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}
.tabs a:last-child { 
    border-right: 1px solid #ccc;
}

.tabs a:hover {
    background-color: #ccc;
    color: #fff;
}

.tabs a.active {
    background-color: #ffa801;
    border-bottom: 2px solid #fff;
    cursor: default;
}

*/

.content{
color: #ffffff;
}


.createBox{
/* Style for "Create you" */
width: 202px;
height: 202px;
margin-top: 93px;
margin-left:70px;
padding-left:10px;
text-align:center;
line-height: 30px;
box-shadow: 0 1px 10px #000000;
border-radius: 10px;
background-color: #485460;
font-size: 25px;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
}

.Beef{
/* Style for "BEEF" */
width: 139px;
height: 71px;
color: #ffffff;
font-family: Roboto;
font-size: 60px;
font-weight: 700;
text-transform: uppercase;
margin-left: 64px;
margin-top: 50px;
}

#tabBurgers {
overflow: hidden;
float: right;
position: relative;
left: -60%;
width: 230px;
height: 60px;
cursor: pointer;
border-radius: 10px 10px 0 0;
background-color: #ffa801;
font-family: Roboto;
font-size: 40px;
font-weight: 400;
text-transform: uppercase;
color: #ffffff;
text-align: center;
top:200px;
z-index: 1;

}

#tabDrinks {

overflow: hidden;
float: right;
position: relative;
left: -28%;
width: 230px;
height: 60px;
cursor: pointer;
border-radius: 10px 10px 0 0;
background-color: #000000;
font-family: Roboto;
font-size: 40px;
font-weight: 400;
text-transform: uppercase;
color: #ffffff;
text-align: center;
top:200px;
z-index: 1;
}


#tabSides {

overflow: hidden;
float: right;
position: relative;
left: 4%;
width: 230px;
height: 60px;
cursor: pointer;
border-radius: 10px 10px 0 0;
background-color: #3c40c6;
font-family: Roboto;
font-size: 40px;
font-weight: 400;
text-transform: uppercase;
color: #ffffff;
text-align: center;
top:200px;
z-index: 1;

}


#contentBurgers{
/* Style for "Tabs backg" */
font-family: Roboto;
margin-top: 250px;
margin-left: 162px;
overflow: scroll; 
width: 1116px;
height: 656px;
border-radius: 10px;
background-color: #ffa801;
position:absolute;
z-index: 1;
color: #ffffff;

}


#contentDrinks{
/* Style for "Tabs backg" */
font-family: Roboto;
margin-top: 250px;
margin-left: 162px;
overflow: scroll; 
width: 1116px;
height: 656px;
border-radius: 10px;
background-color: #000000;
position: absolute;
z-index: 1;
color: #ffffff;

}
#contentSides{
/* Style for "Tabs backg" */

font-family: Roboto;
margin-top: 250px;
margin-left: 162px;
overflow: scroll; 
width: 1116px;
height: 656px;
border-radius: 10px;
background-color: #3c40c6;
position: absolute;
z-index: 1;
color: #ffffff;
}

</style>