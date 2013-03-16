define([
  'backbone',
  'common',
  'mediator/AppMediator'
], function (Backbone, Common, Mediator) {
  var Router = Backbone.Router.extend({
    routes:{

    }
  });

  var initialize = function(){

    Backbone.history.start({error: function(){alert("ok")}});
  };
  return {
    initialize:initialize
  }
});