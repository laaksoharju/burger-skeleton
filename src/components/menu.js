'use strict';

var menu = {
  burgers: {
    beef: [{
      title: 'Double Beef',
      imgSrc: require('@/assets/Burgers/Beef/beef1.png'),
      price: 1.50
    }, {
      title: 'Bacon Deli',
      imgSrc: require('@/assets/Burgers/Beef/beef2.png'),
      price: 1.50
    }, {
      title: 'Chili Burger',
      imgSrc: require('@/assets/Burgers/Beef/beef3.png'),
      price: 1.50
    }, {
      title: 'Big Beef',
      imgSrc: require('@/assets/Burgers/Beef/beef4.png'),
      price: 1.50
    }, {
      title: 'Double Meat',
      imgSrc: require('@/assets/Burgers/Beef/beef5.png'),
      price: 1.50
    }],
    chicken: [{
      title: 'Chicken Basic',
      imgSrc: require('@/assets/Burgers/Chicken/chicken1.png'),
      price: 1.50
    }, {
      title: 'Chicken Deli',
      imgSrc: require('@/assets/Burgers/Chicken/chicken2.png'),
      price: 1.50
    }, {
      title: 'Crispy Chicken',
      imgSrc: require('@/assets/Burgers/Chicken/chicken3.png'),
      price: 1.50
    }, {
      title: 'Large Chicken',
      imgSrc: require('@/assets/Burgers/Chicken/chicken4.png'),
      price: 1.50
    }, {
      title: 'Chicken BBQ',
      imgSrc: require('@/assets/Burgers/Chicken/chicken5.png'),
      price: 1.50
    }],
    fish: [{
      title: 'Fish Burger',
      imgSrc: require('@/assets/Burgers/Fish/fish1.png'),
      price: 1.50
    }, {
      title: 'Integral Fish',
      imgSrc: require('@/assets/Burgers/Fish/fish2.png'),
      price: 1.50
    }, {
      title: 'Long Fish',
      imgSrc: require('@/assets/Burgers/Fish/fish3.png'),
      price: 1.50
    }],
    vegetarian: [{
      title: 'Classic Veggie',
      imgSrc: require('@/assets/Burgers/Veggie/veggie1.png'),
      price: 1.50
    }, {
      title: 'Cripsy Veggie',
      imgSrc: require('@/assets/Burgers/Veggie/veggie2.png'),
      price: 1.50
    }, {
      title: 'Typical Veg',
      imgSrc: require('@/assets/Burgers/Veggie/veggie3.png'),
      price: 1.50
    }, {
      title: 'Veggie Cool',
      imgSrc: require('@/assets/Burgers/Veggie/veggie4.png'),
      price: 1.50
    }]
  },
  drinks: {
    water: [
      {
        title: 'Evian',
        imgSrc: require('@/assets/Drinks/Water/evian.png'),
        price: 1.50
      },
      {
        title: 'Fiji',
        imgSrc: require('@/assets/Drinks/Water/fiji.png'),
        price: 1.50
      },
      {
        title: 'Solan de Cabras',
        imgSrc: require('@/assets/Drinks/Water/solan.png'),
        price: 1.50
      },
      {
        title: 'Vichy Catalan',
        imgSrc: require('@/assets/Drinks/Water/vichy.png'),
        price: 1.50
      }
    ],
    sodas: [
      {
        title: 'Coca-Cola',
        imgSrc: require('@/assets/Drinks/Sodas/coke.png'),
        price: 1.50
      },
      {
        title: 'Coca-Cola Zero',
        imgSrc: require('@/assets/Drinks/Sodas/coke-zero.png'),
        price: 1.50
      },
      {
        title: 'Coca-Cola Light',
        imgSrc: require('@/assets/Drinks/Sodas/coke-light.png'),
        price: 1.50  
      },
      {
        title: 'Fanta',
        imgSrc: require('@/assets/Drinks/Sodas/fanta.png'),
        price: 1.50
      },
      {
        title: 'Sprite',
        imgSrc: require('@/assets/Drinks/Sodas/sprite.png'),
        price: 1.50
      }
    ],
    beers: [
      {
        title: 'Norrlands',
        imgSrc: require('@/assets/Drinks/Beers/norrlands.png'),
        price: 1.50
      },
      {
        title: 'Falcon',
        imgSrc: require('@/assets/Drinks/Beers/falcon.png'),
        price: 1.50
      },
      {
        title: 'Heineken',
        imgSrc: require('@/assets/Drinks/Beers/heineken.png'),
        price: 1.50
      },
      {
        title: 'Mahou',
        imgSrc: require('@/assets/Drinks/Beers/mahou-gf.png'),
        price: 1.50
      },
      {
        title: 'Estrella Galicia',
        imgSrc: require('@/assets/Drinks/Beers/eg.png'),
        price: 1.50
      }
    ]
  },
  sides: {
    
  }
};

export default menu;