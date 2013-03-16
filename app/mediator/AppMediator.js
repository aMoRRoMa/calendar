define([
  'backbone'
], function (Backbone) {


  var AppMediator = _.clone(Backbone.Events);

  return {
    subscribe   : AppMediator.on,
    unsubscribe : AppMediator.off,
    startEvent  : AppMediator.trigger
  };
});