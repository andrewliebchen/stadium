Meteor.startup(function() {
  // Do this when the server starts
});

Meteor.methods({
  // Stories
  addStory: function(options) {
    Stories.insert({
      name: options.name,
      title: options.title,
      time: options.time
    });
  },

  // Messages
  addMessage : function(options) {
    Messages.insert({
      name: options.name,
      message: options.message,
      time: options.time
    });
  },

  removeMessage : function(messageId) {
    Messages.remove(messageId);
  },

  editMessage : function(messageId, value) {
    Messages.update(messageId, {$set: {message: value}});
  }
});
