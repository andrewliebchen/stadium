Meteor.publish('tickets', function() {
  return Tickets.find({});
});

Meteor.publish('singleTicket', function(id) {
  return id && Tickets.find(id);
});

Meteor.publish('messages', function() {
  return Messages.find({});
});

Meteor.publish('todos', function(id) {
  return id && Todos.find({parent: id});
});

Meteor.publish('usersData', function() {
  return Meteor.users.find({});
});
