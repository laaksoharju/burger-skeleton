<template>
    <div class="container">
        <Navbar2 :backAddressProperty='"./#/OrderPage"' :backTextProperty='"MAIN PAGE"' :titleProperty='"BREAD"'/>
        <div class="boxes">
            <div class="option">HOLA</div>
        </div>

    </div>
</template>

<script>
    import Navbar2 from '@/components/Navbar2.vue';

    export default {
        name: 'BurgerConstruction',
        components: {
            Navbar2
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    .boxes {
        margin-top: 90px;
        margin-bottom: 100px;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(0px, 202px));
        grid-gap: 60px;
        justify-content: center;
    }
    .option {
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
</style>
