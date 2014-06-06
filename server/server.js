Meteor.startup(function() {
  // Do this when the server starts
});

Meteor.publish('stories', function() {
  return Stories.find({});
});

Meteor.publish('messages', function (story) {
  if (story == null) {
    return Messages.find({});
  } else {
    return Messages.find({story: story});
  }
});

Meteor.methods({
  // Stories
  addStory: function(options) {
    Stories.insert({
      userId: options.userId,
      title:  options.title,
      type:   options.type,
      size:   options.size,
      status: options.status,
      time:   options.time
    });
  },

  removeStory : function(storyId) {
    Stories.remove(storyId);
  },

  editStory : function(storyId, options) {
    Stories.update(storyId, {$set: {
      title:  options.title,
      type:   options.type,
      size:   options.size,
      status: options.status
    }});
  },

  // Messages
  addMessage : function(options) {
    Messages.insert({
      name: options.name,
      message: options.message,
      time: options.time,
      story: options.story
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

  return user;
});
