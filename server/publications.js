Meteor.publish('tickets', function() {
  return Tickets.find({});
});

Meteor.publish('singleTicket', function(id) {
  return id && Tickets.find(id);
});

Meteor.publish('todos', function(id) {
  return id && Todos.find({parent: id});
});
