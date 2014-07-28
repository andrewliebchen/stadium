Deps.autorun(function() {
  Meteor.subscribe('todos', Session.get('currentTicket'));
});

Template.todos.todo = function() {
  return Todos.find({});
};

Template.todos.events({
  'keydown .mrt_new-todo' : function(event){
    if (event.which == 13) {
      var todo = $(event.target);
      var todoContent = todo.val();

      if (todoContent != '') {
        Meteor.call('addTodo', {
          label:   todoContent,
          checked: false,
          parent:  Session.get('currentTicket'),
          time:    Date.now()
        });
      };

      todo.val('');
    };
  }
});
