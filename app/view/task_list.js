define([
  'backbone',
  'common',
  'view/list',
  'view/add'
], function (Backbone, Common, List, Add) {
  var TaskList = Backbone.View.extend({
    el:'#task_list',
    initialize:function(){
      this.render()
    },
    render:function(){
      var _this = this;

      var list = new List({
        el:_this.$el.find('#list'),
        collection:_this.collection
      })

      var add_task = new Add({
        el:_this.$el.find('#add_task'),
        collection:_this.collection
      })

    }
  });
  return TaskList
});