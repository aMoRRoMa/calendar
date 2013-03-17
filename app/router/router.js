define([
  'backbone',
  'common',
  'mediator/AppMediator',
  'collection/tasks',
  'view/calendar',
  'view/task_list',
  'view/modal'
], function (Backbone, Common, Mediator, Collection, Calendar, TaskList, Modal) {
  var Router = Backbone.Router.extend({
    routes:{
      '':'index'
    }
  });

  var initialize = function(){
    var task_collection = new Collection();
    var calendar = new Calendar();
    var task_list = new TaskList({
      collection:task_collection
    });
    var modal = new Modal({
      collection:task_collection
    });

    var app_router = new Router();
    app_router.on('route:index', function(){
      var now_date = new Date()
      Mediator.startEvent('start', now_date)
    })

    Backbone.history.start();
  };
  return {
    initialize:initialize
  }
});