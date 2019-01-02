'use strict';

var menu = {
  burgers: {
    beef: [{
      title: 'Double Beef',
      imgSrc: require('@/assets/Burgers/Beef/beef1.png'),
      price: 1.52
    }, {
      title: 'Bacon Deli',
      imgSrc: require('@/assets/Burgers/Beef/beef2.png'),
      price: 1.31
    }, {
      title: 'Chili Burger',
      imgSrc: require('@/assets/Burgers/Beef/beef3.png'),
      price: 1.41
    }, {
      title: 'Big Beef',
      imgSrc: require('@/assets/Burgers/Beef/beef4.png'),
      price: 1.19
    }, {
      title: 'Double Meat',
      imgSrc: require('@/assets/Burgers/Beef/beef5.png'),
      price: 1.11
    }],
    chicken: [{
      title: 'Chicken Basic',
      imgSrc: require('@/assets/Burgers/Chicken/chicken1.png'),
      price: 1.44
    }, {
      title: 'Chicken Deli',
      imgSrc: require('@/assets/Burgers/Chicken/chicken2.png'),
      price: 2.01
    }, {
      title: 'Crispy Chicken',
      imgSrc: require('@/assets/Burgers/Chicken/chicken3.png'),
      price: 1.89
    }, {
      title: 'Large Chicken',
      imgSrc: require('@/assets/Burgers/Chicken/chicken4.png'),
      price: 1.13
    }, {
      title: 'Chicken BBQ',
      imgSrc: require('@/assets/Burgers/Chicken/chicken5.png'),
      price: 2.51
    }],
    fish: [{
      title: 'Fish Burger',
      imgSrc: require('@/assets/Burgers/Fish/fish1.png'),
      price: 1.58
    }, {
      title: 'Integral Fish',
      imgSrc: require('@/assets/Burgers/Fish/fish2.png'),
      price: 1.21
    }, {
      title: 'Long Fish',
      imgSrc: require('@/assets/Burgers/Fish/fish3.png'),
      price: 1.54
    }],
    vegetarian: [{
      title: 'Classic Veggie',
      imgSrc: require('@/assets/Burgers/Veggie/veggie1.png'),
      price: 1.99
    }, {
      title: 'Cripsy Veggie',
      imgSrc: require('@/assets/Burgers/Veggie/veggie2.png'),
      price: 1.98
    }, {
      title: 'Typical Veg',
      imgSrc: require('@/assets/Burgers/Veggie/veggie3.png'),
      price: 1.78
    }, {
      title: 'Veggie Cool',
      imgSrc: require('@/assets/Burgers/Veggie/veggie4.png'),
      price: 1.78
    }]
  },
  drinks: {
    water: [
      {
        title: 'Evian',
        imgSrc: require('@/assets/Drinks/Water/evian.png'),
        price: 0.99
      },
      {
        title: 'Fiji',
        imgSrc: require('@/assets/Drinks/Water/fiji.png'),
        price: 2.20
      },
      {
        title: 'Solan de Cabras',
        imgSrc: require('@/assets/Drinks/Water/solan.png'),
        price: 0.57
      },
      {
        title: 'Vichy Catalan',
        imgSrc: require('@/assets/Drinks/Water/vichy.png'),
        price: 0.68
      }
    ],
    sodas: [
      {
        title: 'Coca-Cola',
        imgSrc: require('@/assets/Drinks/Sodas/coke.png'),
        price: 0.99
      },
      {
        title: 'Coca-Cola Zero',
        imgSrc: require('@/assets/Drinks/Sodas/coke-zero.png'),
        price: 0.99
      },
      {
        title: 'Coca-Cola Light',
        imgSrc: require('@/assets/Drinks/Sodas/coke-light.png'),
        price: 0.99
      },
      {
        title: 'Fanta',
        imgSrc: require('@/assets/Drinks/Sodas/fanta.png'),
        price: 0.99
      },
      {
        title: 'Sprite',
        imgSrc: require('@/assets/Drinks/Sodas/sprite.png'),
        price: 0.99
      }
    ],
    beers: [
      {
        title: 'Norrlands',
        imgSrc: require('@/assets/Drinks/Beers/norrlands.png'),
        price: 3.45
      },
      {
        title: 'Falcon',
        imgSrc: require('@/assets/Drinks/Beers/falcon.png'),
        price: 4.12
      },
      {
        title: 'Heineken',
        imgSrc: require('@/assets/Drinks/Beers/heineken.png'),
        price: 3.78
      },
      {
        title: 'Mahou',
        imgSrc: require('@/assets/Drinks/Beers/mahou-gf.png'),
        price: 2.76
      },
      {
        title: 'Estrella Galicia',
        imgSrc: require('@/assets/Drinks/Beers/eg.png'),
        price: 5.51
      }
    ]
  },
  sides: {
    
  }
};

export default menu;