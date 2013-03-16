require.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    'selectbox':{
      deps: [
        'jquery'
      ]
    },
    UI:{
      deps: [
        'jquery'
      ]
    }
  },
  paths: {
    jquery: 'lib/jquery/jquery.min',
    selectbox: 'lib/jquery/jquery.selectbox.min',
    UI: 'lib/jquery/jquery-ui-1.10.1.custom.min',
    underscore: 'lib/lodash/lodash.min',
    backbone: 'lib/backbone/backbone',
    text: 'lib/require/text'
  }
});

require([
  'router/router'
], function(App) {
  /**
   * Initializing Main Application
   */
  App.initialize();
});