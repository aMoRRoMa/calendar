define([
  'backbone',
  'common',
  'model/task_model'
], function (Backbone, Common, Model) {
  var Collection = Backbone.Collection.extend({
    model:Model,
    url:'/tasks.json'
  });
  return Collection
});