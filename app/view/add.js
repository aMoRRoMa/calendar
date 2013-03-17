define([
  'backbone',
  'common',
  'mediator/AppMediator'
], function (Backbone, Common, Mediator) {
  var Add = Backbone.View.extend({
    events:{
      'click':'open_modal_wrap'
    },
    open_modal_wrap:function(){
      Mediator.startEvent('modalWrap:open')
    }
  });
  return Add
});