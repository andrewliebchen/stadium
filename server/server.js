Meteor.methods({
  // Tickets
  addTicket: function(options) {
    Tickets.insert({
      userId:      options.userId,
      number:      options.number,
      title:       options.title,
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
      title:  options.title,
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
  }
});

// User accounts
Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile || {};

  return user;
});
