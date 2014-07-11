Meteor.publish('tickets', function() {
  return Tickets.find({});
});

Meteor.publish('singleTicket', function(id) {
  return id && Tickets.find(id);
});

Meteor.publish('messages', function() {
  return Messages.find({});
});
