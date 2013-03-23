define([
  'backbone',
  'common'
], function (Backbone, Common) {
  var Calendar = Backbone.View.extend({
    el:'#calendar',
    initialize:function(){
      var today = new Date()
      console.log(today.getDate())
    }
  });
  return Calendar
});