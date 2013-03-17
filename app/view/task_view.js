define([
  'backbone',
  'common'
], function (Backbone, Common) {
  var Task = Backbone.View.extend({
    template: _.template('<span><%= name%></span><a id="destroy" style="display: none">×</a>'),
    tagName:'li',
    render:function(){
      var _this = this;
      _this.$el.html(_this.template(_this.model.toJSON()));
      _this.$el.on('mouseover', function(){
        _this.$el.find('#destroy').show()
      });
      _this.$el.on('mouseout', function(){
        _this.$el.find('#destroy').hide()
      });
      _this.$el.find('#destroy').on('click', function(){
        _this.model.destroy({success:function(){
          _this.remove()
        }})
      })
      return _this
    }
  });
  return Task
});