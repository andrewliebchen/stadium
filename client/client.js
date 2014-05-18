Session.setDefault('editing_message', null);

// Stories
Template.stories.stories = function() {
  return Stories.find({}, { sort: { time: -1 }});
}

Template.storyInput.events({
  'keydown #story_add' : function(event) {
    if (event.which == 13) { // DRY this
      var story = document.getElementById('story_add');

      if (Meteor.user()) {
        var name = Meteor.user().profile.name;
      } else {
        var name = Anonymous
      }

      if(story.value != '') {
        Meteor.call('addStory', {
          name: name,
          title: story.value,
          time: Date.now()
        })
        story.value = '';
      }
    }
  }
});

// Messages
Template.messages.messages = function() {
  return Messages.find({}, { sort: { time: 1 }});
};

Template.messages.editing = function() {
  return Session.equals('editing_message', this._id);
};

Template.messageInput.events({
  'keydown #message_add' : function(event) {
    if (event.which == 13) { // DRY this
      var message = document.getElementById('message_add');

      if (Meteor.user()) {
        var name = Meteor.user().profile.name;
      } else {
        var name = 'Anonymous';
      }

      if (message.value != '') {
        Meteor.call('addMessage', {
          name: name,
          message: message.value,
          time: Date.now()
        });
        message.value = '';
      }
    }
  }
});

Template.messages.events({
  'click .delete' : function(event) {
    event.preventDefault();
    Meteor.call('removeMessage', this._id);
  },

  'click .edit' : function(event) {
    event.preventDefault();
    Session.set('editing_message', this._id);
  },

  'keydown #message_edit' : function(event) {
    if (event.which == 13) {
      var value = String(event.target.value || "");
      Meteor.call('editMessage', this._id, value);
      Session.set('editing_message', null);
    }
  }
});
