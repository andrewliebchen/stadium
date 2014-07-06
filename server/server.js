Meteor.publish('tickets', function() {
  return Tickets.find({});
});

Meteor.publish('messages', function(ticket) {
  if (ticket == null) {
    return Messages.find({});
  } else {
    return Messages.find({ticket: ticket});
  }
});

Meteor.publish('users', function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId});
  } else {
    this.ready();
  }
});

Meteor.methods({
  // Tickets
  addTicket: function(options) {
    Tickets.insert({
      userId:      options.userId,
      title:       options.title,
      description: options.description,
      type:        options.type,
      size:        options.size,
      status:      options.status,
      time:        options.time
    });
  },

  removeTicket : function(ticketId) {
    Stories.remove(ticketId);
  },

  editTicket : function(ticketId, options) {
    Stories.update(ticketId, {$set: {
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
      parent:  options.parent
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
  if (options.profile) {
    user.profile = options.profile;
  }

  user.profile.github = {};
  user.profile.github.accessToken = user.services.github.accessToken;
  user.profile.github.email = user.services.github.email;
  user.profile.github.username = user.services.github.username;
  user.profile.github.avatar_url = user.services.github.avatar_url;

  return user;
});
