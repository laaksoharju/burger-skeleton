<template>
    <div>
        <Navbar :titleProperty='"ORDER SUMMARY"'/>

        <div class="boxes">
            <div class="item">
                <div class="top">
                    <img src="@/assets/minus.png" id="minus" width="30px" height="30px">

                    <div id="name">
                        <h2>BURGER'S NAME</h2>
                        <h3>(QUANTITY)</h3>
                    </div>

                    <img src="@/assets/plus.png" id="plus" width="30px" height="30px">
                </div>

                <div class="middle">
                    <p>The list of ingredients should be here:</p>
                    <p>- First the bread with a menu in case you want to change it</p>
                    <p>- Then all the ingredients as a list...</p>
                    <p>The list of ingredients should be here:</p>
                    <p>- First the bread with a menu in case you want to change it</p>
                    <p>- Then all the ingredients as a list...</p>
                    <p>The list of ingredients should be here:</p>
                    <p>- First the bread with a menu in case you want to change it</p>
                    <p>- Then all the ingredients as a list...</p>
                    
                </div>

                <div class="bottom">
                    BURGER'S PRICE
                </div>
            </div>
        </div>

        <a href="./#/OrderPage">
            <div class="modify">
                <p>MODIFY</p>
            </div>

        </a>
        <a href="./#/OrderCompleted">
            <div class="pay">
                <p>PAY</p>
            </div>
        </a>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Summary',
    components: {
      Navbar
    }
}
</script>

<style>
    h1, h2, h3, h4, h5, p {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        background-color: #2D4739;
        font-family: Roboto, sans-serif;
    }

    h2 {
        font-size: 20px;
        font-weight: bold;
    }

    h3 {
        font-size: 20px;
        font-weight: normal;
    }

    .boxes {
        margin-top: 90px;
        margin-bottom: 100px;
        margin-left: auto;
        margin-right: auto;
        width: 90%;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(0px, 279.52px));
        grid-gap: 20px;
        justify-content: center;
    }

    /* Boxes is the group of boxes, formed by items */
    .item {
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

        background-color: #FFA801;
        /* The colour depends, all the options are, i think we'd need JS for this:
        Gray: #485460
        Black: #000000
        Purple: #3C40C6 */
    }

    /* Items are divided into three parts: top, middle and bottom */
    .item .top {
        display: flex;
        justify-content: space-between;
        height: 58px;
        border-radius: 5px 5px 0px 0px;

        background-color: #EF9D00;
        /* Options:
        Gray: #333C45
        Black: #171717
        Purple: #303398
        */

    }

    #minus {
        cursor: pointer;
        margin-left: 10px;
        margin-top: 14px;

        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
    }

    #name {
        margin-top: 8px;
        margin-left: -10px;
        margin-right: -10px;
        color: white;
        font-size: 20px;
        text-align: center;
    }

    #plus {
        cursor: pointer;
        margin-right: 10px;
        margin-top: 14px;

        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
    }

    .item .middle {
        overflow: auto;
        height: 187px;
        padding: 5px 10px;
    }

    .item .bottom {
        height: 38px;
        border-radius: 0px 0px 5px 5px;

        color: white;
        line-height: 38px;
        font-size: 30px;
        font-weight: bold;
        text-align: center;

        background-color: #EF9D00;
        /* Options:
        Gray: #333C45
        Black: #171717
        Purple: #303398
        */
    }

    /* Modify and Pay buttons */
    .modify {
        cursor: pointer;
        bottom: 40px;
        position: fixed;
        width: 100%;
        height: 40px;
        background-color: #05C46B;
    }

    .pay {
        cursor: pointer;
        bottom: 0px;
        position: fixed;
        width: 100%;
        height: 40px;
        background-color: #0C44D1;
    }

    .pay p, .modify p {
        text-align: center;
        line-height: 40px;
        color: white;
        font-size: 20px;
    }
</style>