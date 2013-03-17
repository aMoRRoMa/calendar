define([
  'backbone',
  'common',
  'view/task_view'
], function (Backbone, Common, Task_view) {
  var List = Backbone.View.extend({
    initialize:function(){
      this.collection.on('reset', this.render, this);
      this.collection.on('add', this.add_task, this);
    },
    render:function(){

    },
    add_task:function(model){
      var task_view = new Task_view({
        model:model
      });
      this.$el.append(task_view.render().el);
    }
  });
  return List
});