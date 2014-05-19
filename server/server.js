Meteor.startup(function() {
  // Do this when the server starts
});

Meteor.publish('stories', function() {
  return Stories.find({});
});

Meteor.publish('messages', function() {
  return Messages.find({});
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

  removeStory : function(storyId) {
    Stories.remove(storyId);
  },

  editStory : function(storyId, value) {
    Stories.update(storyId, {$set: {title: value}});
  },

  // Messages
  addMessage : function(options) {
    Messages.insert({
      name: options.name,
      message: options.message,
      time: options.time,
      parent: options.parent
    });
  },

  removeMessage : function(messageId) {
    Messages.remove(messageId);
  },

  editMessage : function(messageId, value) {
    Messages.update(messageId, {$set: {message: value}});
  }
});
