Meteor.methods({
  // Tickets
  addTicket: function(options) {
    Tickets.insert({
      userId:      options.userId,
      number:      options.number,
      tag:         options.tag,
      description: options.description,
      type:        options.type,
      size:        options.size,
      status:      options.status,
      time:        options.time
    });
  },

  removeTicket : function(ticketId) {
    Tickets.remove(ticketId);
  },

  editTicket : function(ticketId, options) {
    Tickets.update(ticketId, {$set: {
      tag:    options.tag,
      type:   options.type,
      size:   options.size,
      status: options.status
    }});
  },

  // Todos
  addTodo : function(options) {
    Todos.insert({
      label:    options.label,
      checked:  options.status,
      parent:   options.parent,
      time:     options.time,
      position: options.position
    });
  }
});

// User accounts
Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile || {};

  return user;
});
