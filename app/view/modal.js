define([
  'backbone',
  'common',
  'mediator/AppMediator',
  'model/task_model'
], function (Backbone, Common, Mediator, Model) {
  var Modal = Backbone.View.extend({
    el:'#modal_wrap',
    initialize:function(){
      Mediator.subscribe('modalWrap:open', this.open, this);
      Mediator.subscribe('modalWrap:close', this.close, this);
      this.render()
    },
    render:function(){
      var _this = this;
      this.$el.find('a.close').on('click', function(){
        Mediator.startEvent('modalWrap:close')
      })
      this.$el.find('input').on('keypress', function(e){
        if(e.keyCode == 13){
          if($(this).attr('value')!=''){
            var value = $(this).attr('value');
            var task = new Model({
              name:value
            });
            _this.collection.add(task);
            Mediator.startEvent('modalWrap:close')
          }
          else{
            alert('Сначала введите название!')
          }
        }
      })
    },
    open:function(){
      this.$el.show()
    },
    close:function(){
      this.$el.find('input').attr('value', '');
      this.$el.hide()
    }
  });
  return Modal
});