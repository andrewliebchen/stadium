Meteor.startup(function() {
  // Do this when the server starts
});

Meteor.methods({
  removeMessage : function(messageId) {
    Messages.remove(messageId);
  },

  editMessage : function(messageId, value) {
    Messages.update(messageId, {$set: {message: value}});
  }
});
