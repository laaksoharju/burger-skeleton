<template>
<div class="wrapper">
    <div class="head">
        <h1>ORDER SUMMARY</h1>
    </div>

    <div class="yellowBox">
        <div class="item">
            <div class="quantity">(2)</div>
            <div class="name">Fire Burger</div>
            <div class="price">60.00$</div>
            <div class="ingredients">lettuce, onions, tomatoes, bacon, bread, this, that, one, two, three, four, five...lettuce, onions, tomatoes, bacon, bread, this, that, one, two, three, four, five...lettuce, onions, tomatoes, bacon, bread, this, that, one, two, three, four, five...lettuce, onions, tomatoes, bacon, bread, this, that, one, two, three, four, five...</div>
            <div class="buttons">
                <img id="add" src="@/assets/Add.png" alt="Add a new burger">
                <img id="modify" src="@/assets/Modify.png" alt="Modify this burger">
                <img id="delete" src="@/assets/Delete.png" alt="Delete one burger">
    </div>
    </div>
        <div class="item">
            <div class="quantity">(2)</div>
            <div class="name">Fire Burger</div>
            <div class="price">60.00$</div>
            <div class="ingredients">lettuce, onions, tomatoes, bacon, bread, this, that, one, two, three, four, five...lettuce, onions, tomatoes, bacon, bread, this, that, one, two, three, four, five...lettuce, onions, tomatoes, bacon, bread, this, that, one, two, three, four, five...lettuce, onions, tomatoes, bacon, bread, this, that, one, two, three, four, five...</div>
            <div class="buttons">
                <img id="add" src="@/assets/Add.png" alt="Add a new burger">
                <img id="modify" src="@/assets/Modify.png" alt="Modify this burger">
                <img id="delete" src="@/assets/Delete.png" alt="Delete one burger">
    </div>
    </div>
    </div>

    <div class="total">
        <div class="name">TOTAL</div>
        <div class="amount">180.00$</div>
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
    export default {
        name: 'Summary'
    }
</script>

<style>
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        font-family: Roboto, sans-serif;
        color: white;
    }

    /* THE BODY OF THE PAGE*/
    .wrapper {
        display: grid;
        margin-bottom: 120px;
        grid-row-gap: 20px;
        grid-column-gap: 10px;
        grid-template-areas:    
            "box"
            "total";
    }
    /* HEADER */
    .head {
        position: fixed;
        width: 100%;
        height: 50px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
        background-color: #416451;
    }
    .head h1 {
        text-align: center;
        line-height: 50px;
        text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
        font-size: 40px;
    }

    /* YELLOW CONTAINER WITH THE ORDERS*/
    .yellowBox {
        grid-area: box;
        margin-top: 80px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;

        display: flex;
        flex-direction: column;

        width: 80vw;
        height: auto;
        max-width: 800px;
        border-radius: 5px;
        border: 5px solid rgba(27, 41, 34, 0.64);
        background-color: #ffd23e;
    }
    .yellowBox>* {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .item {
        width: 70vw;
        max-width: 600px;
        height: auto;
        margin-left: auto;
        margin-right: auto;

        display: grid;
        padding: 20px;
        grid-gap: 20px;
        grid-auto-columns: 1fr 3fr 1fr;
        grid-template-areas:    
            "quantity name price"
            "ingredients ingredients buttons";

        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        background-color: #ffa801;
    }
    .item .quantity, .name, .price, .ingredients {
        color: white;
        font-family: Roboto, sans-serif;
        font-size: 30px;
        font-weight: 700;
    }
    .item .quantity {
        grid-area: quantity;
    }
    .item .name {
        grid-area: name;
        text-align: center;
    }
    .item .price {
        grid-area: price;
        text-align: right;
    }
    .item .ingredients {
        grid-area: ingredients;
        font-size: 25px;
        font-weight: 400;
    }
    .item .buttons{
        cursor: pointer;
        text-align: right;
        grid-area: buttons;
    }
    /* TOTAL SECTION */
    .total {
        z-index: -1;
        grid-area: total;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 40px;
        padding: 0px 20px;

        color: white;
        font-family: Roboto, sans-serif;
        font-size: 40px;
        font-weight: 700;

        display: grid;
        grid-template-areas: "a b"; 

        width: 80vw;
        max-width: 800px;

        height: 80px;
        border-radius: 5px;
        border: 5px solid rgba(27, 41, 34, 0.64);
        background-color: #ffd23e;
    }
    .total div {
        line-height: 80px;
        font-size: 40px;
        font-weight: 700;
    }

    .total .name {
        grid-area: a;
        text-align: left;
        margin-left: 50px;
    }
    .total .amount {
        grid-area: b;
        text-align: right;
        margin-right: 50px;
    }

    /* BUTTONS TO MODIFY ORDER OR PAY */
    .modify {    
        position: fixed;
        bottom: 104px;
        left: 50%;
        transform: translate(-50%, 0);
        cursor: pointer;


        grid-area: modify;
        grid-template-rows: auto;
        /* Style for "Rectangle" */
        width: 250px;
        height: 55px;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 1);
        border-radius: 27.5px;
        background-color: #05c46b;
    }
    .modify p {
        text-align: center;
        line-height: 55px;
        color: #ffffff;
        font-family: Roboto, sans-serif;
        font-size: 30px;
        font-weight: 700;
    }

    .pay {
        position: fixed;
        bottom: 28px;
        left: 50%;
        transform: translate(-50%, 0);
        cursor: pointer;
        grid-area: pay;
        width: 250px;
        height: 55px;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 1);
        border-radius: 27.5px;
        background-color: #0c44d1;
    }
    .pay p {
        text-align: center;
        line-height: 55px;
        color: white;
        font-family: Roboto, sans-serif;
        font-size: 30px;
        font-weight: 700;
    }

    /* RESPONSIVE*/
    @media screen and (max-width: 560px) {
        .wrapper {
            margin-bottom: 70px;
        }
        .head h1 {
            font-size: 30px;
        }
        .yellowBox {
            margin-top: 65px;
            padding: 10px;
            grid-row-gap: 10px;
            width: 90vw;
            max-width: 260px;
        }
        .yellowBox>* {
            margin-top: 5px;
            margin-bottom: 5px;
        }
        .item {
            width: 85vw;
            max-width: 240px;
            padding: 10px;

        }
        .item .quantity, .name, .price, .ingredients {
            font-size: 20px;
        }
        .item .ingredients {
            font-size: 18px;
        }
        .total {
            font-size: 20px;
            padding: 0px 10px;
            width: 90vw;
            max-width: 260px;
            height: 30px;
        }
        .total div {
            font-size: 20px;
            line-height: 30px;
        }
        .modify {    
            bottom: 75px;
            width: 150px;
            height: 40px;
        }
        .modify p {
            line-height: 40px;
            font-size: 18px;
        }

        .pay {
            width: 150px;
            height: 40px;
        }
        .pay p {
            line-height: 40px;
            font-size: 18px;
        }
        .buttons img {
            width: 50%;
        }
    }

</style>