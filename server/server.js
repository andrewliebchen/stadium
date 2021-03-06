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

  // Messages
  addMessage : function(options) {
    Messages.insert({
      name:    options.name,
      message: options.message,
      time:    options.time,
      parent:  options.parent,
      fromId:  options.fromId
    });
  },

  removeMessage : function(messageId) {
    Messages.remove(messageId);
  },

  editMessage : function(messageId, value) {
    Messages.update(messageId, {$set: {message: value}});
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
