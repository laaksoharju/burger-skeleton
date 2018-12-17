'use strict';

var menu = {
  burgers: {
    beef: [{
      title: 'Double Beef',
      imgSrc: require('@/assets/Burgers/Beef/beef1.png')
    }, {
      title: 'Bacon Deli',
      imgSrc: require('@/assets/Burgers/Beef/beef2.png')
    }, {
      title: 'Chili Burger',
      imgSrc: require('@/assets/Burgers/Beef/beef3.png')
    }, {
      title: 'Big Beef',
      imgSrc: require('@/assets/Burgers/Beef/beef4.png')
    }, {
      title: 'Double Meat',
      imgSrc: require('@/assets/Burgers/Beef/beef5.png')
    }],
    chicken: [{
      title: 'Chicken Basic',
      imgSrc: require('@/assets/Burgers/Chicken/chicken1.png')
    }, {
      title: 'Chicken Deli',
      imgSrc: require('@/assets/Burgers/Chicken/chicken2.png')
    }, {
      title: 'Crispy Chicken',
      imgSrc: require('@/assets/Burgers/Chicken/chicken3.png')
    }, {
      title: 'Large Chicken',
      imgSrc: require('@/assets/Burgers/Chicken/chicken4.png')
    }, {
      title: 'Chicken BBQ',
      imgSrc: require('@/assets/Burgers/Chicken/chicken5.png')
    }],
    fish: [{
      title: 'Fish Burger',
      imgSrc: require('@/assets/Burgers/Fish/fish1.png')
    }, {
      title: 'Integral Fish',
      imgSrc: require('@/assets/Burgers/Fish/fish2.png')
    }, {
      title: 'Long Fish',
      imgSrc: require('@/assets/Burgers/Fish/fish3.png')
    }],
    vegetarian: [{
      title: 'Classic Veggie',
      imgSrc: require('@/assets/Burgers/Veggie/veggie1.png')
    }, {
      title: 'Cripsy Veggie',
      imgSrc: require('@/assets/Burgers/Veggie/veggie2.png')
    }, {
      title: 'Typical Veg',
      imgSrc: require('@/assets/Burgers/Veggie/veggie3.png')
    }, {
      title: 'Veggie Cool',
      imgSrc: require('@/assets/Burgers/Veggie/veggie4.png')
    }]
  },
  drinks: {
    sodas: [
      {
        title: 'Coca-Cola',
        imgSrc: require('@/assets/Drinks/Sodas/coke.png')
      },
      {
        title: 'Coca-Cola Zero',
        imgSrc: require('@/assets/Drinks/Sodas/coke-zero.png')
      },
      {
        title: 'Coca-Cola Light',
        imgSrc: require('@/assets/Drinks/Sodas/coke-light.png')   
      },
      {
        title: 'Fanta',
        imgSrc: require('@/assets/Drinks/Sodas/fanta.png')   
      },
      {
        title: 'Sprite',
        imgSrc: require('@/assets/Drinks/Sodas/sprite.png')   
      }
    ],
    beers: [
      {
        title: 'Norrlands',
        imgSrc: require('@/assets/Drinks/Beers/norrlands.png') 
      },
      {
        title: 'Falcon',
        imgSrc: require('@/assets/Drinks/Beers/falcon.png') 
      },
      {
        title: 'Heineken',
        imgSrc: require('@/assets/Drinks/Beers/heineken.png') 
      },
      {
        title: 'Mahou',
        imgSrc: require('@/assets/Drinks/Beers/mahou-gf.png') 
      },
      {
        title: 'Estrella Galicia',
        imgSrc: require('@/assets/Drinks/Beers/eg.png') 
      }
    ]
  },
  sides: {
    
  }
};

export default menu;