Deps.autorun(function() {
  Meteor.subscribe('todos', Session.get('currentTicket'));
});

Template.todos.todo = function() {
  return Todos.find({}, { sort: { position: 1 }});
};

Template.todos.checkedClass = function() {
  return this.checked ? 'is-checked' : '';
}

Template.todos.events({
  'click .mrt_todo-checkbox' : function(event) {
    Todos.update(this._id, {$set: {checked: !this.checked}});
  },

  'keydown .mrt_new-todo' : function(event){
    if (event.which == 13) {
      var todo = $(event.target);
      var todoContent = todo.val();
      var position = Todos.find({}).count();

      if (todoContent != '') {
        Meteor.call('addTodo', {
          label:    todoContent,
          checked:  false,
          parent:   Session.get('currentTicket'),
          time:     Date.now(),
          position: position
        });
      };

      todo.val('');
    };
  }
});
