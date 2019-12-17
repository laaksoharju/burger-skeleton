'use strict';

// Stuff that is used both in the ordering system and in the kitchen
var sharedVueStuff = {
  data: function () {
    return {
      orders: {},
      ingredients: {},
    }
  },
  computed: {
    // instead of storing the UI Labels locally, for mixing in
    // we store them in the state manager. This has the benefit that
    // label preferences are transferred between different views
    uiLabels: function () {
      return this.$store.state.uiLabels;
    },
    lang: { get: function () {
      return this.$store.state.lang;
     },
     set: function (lang) {
      this.$store.commit('switchLang', lang);
     }
    }
  },
  created: function () {
    this.$store.state.socket.emit('pageLoaded');
    
    this.$store.state.socket.on('initialize', function (data) {
      this.orders = data.orders;
      // HERE WAS THE PROBLEM, the fix is in serve.js
      // whenever the view is mounted, new labels will be sent
      // from the server, thereby overwriting previous ones
      this.$store.commit('setUiLabels', data.uiLabels);
      this.ingredients = data.ingredients;
    }.bind(this));

    this.$store.state.socket.on('switchLang', function (data) {
      this.$store.commit('setUiLabels', data);
    }.bind(this));

    this.$store.state.socket.on('currentQueue', function (data) {
      this.orders = data.orders;
      if (typeof data.ingredients !== 'undefined') {
        this.ingredients = data.ingredients;
      }
    }.bind(this));
  },
  methods: {
    switchLang: function () {
      if (this.lang === "en") {
        this.lang = "sv";
      } else {
        this.lang = "en";
      }
      this.$store.state.socket.emit('switchLang', this.lang);
    }
  }
};

export default sharedVueStuff;