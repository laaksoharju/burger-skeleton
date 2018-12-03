<template>
    <!-- <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <title>Create Your Menu</title>
        <link rel="stylesheet" type="text/css" href="main_screen.css">
    </head> -->

    <!-- <body> -->
        <div class="wrapper">
            
            <div class="header">
                <h1>CREATE YOUR MENU</h1>
            </div>
            <div class="tabs">
                <div class="options">
                    hola
                </div>
                <div class="contents">
                    chao
                </div>
            </div>

            <footer class="statusBar">
                <div class="name">TOTAL</div>
            </footer>
        </div>
    <!-- </body> -->
</template>

<script>
  export default {
    name: 'Summary'
  }
</script>

<style>
*{
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    background-color: #2d4739;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    color: #ffffff;
}

/* THE BODY OF THE PAGE*/
.wrapper {
    display: grid;
    /*    margin-bottom: 160px;*/
    /*    grid-row-gap: 20px;*/
    grid-template-areas:    
        "header"
        "tabs"
        "statusBar";
}
/* HEADER */
.header {
    grid-area: header;
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
    background-color: #416451;
}
.header h1 {
    text-align: center;
    line-height: 80px;
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    font-size: 50px;
}

/* YELLOW CONTAINER WITH THE ORDERS*/
.tabs {
    grid-area: tabs;
    margin-top: 161px;
    margin-bottom: 300px;
    margin-left: auto;
    margin-right: auto;

    display: grid;

    width: 1200px;
    height: 216px;
    grid-template-areas:    
        "options"
        "contents";
}
.options {
    grid-area: options;
}
.contents {
    grid-area: contents;
    width: 1116px;
    height: 500px;
    border-radius: 10px;
    background: #ffa801;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;
}

/* TOTAL SECTION */
.statusBar {
    background: #1e272e;
    grid-area: statusBar;
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 110px;
}
</style>