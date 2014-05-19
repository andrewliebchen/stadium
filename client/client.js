Session.setDefault('editingMessage', null);
Session.setDefault('currentStory', null);

Deps.autorun(function() {
  Meteor.subscribe('stories');
  Meteor.subscribe('messages', {story: Session.get('current_story')});
});

// Stories
Template.stories.stories = function() {
  return Stories.find({});
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

Template.stories.events({
  'click .story' : function(event) {
    event.preventDefault();
    return Session.set('currentStory', this._id);
  }
});

// Messages
Template.messages.messages = function() {
  return Messages.find({}, { sort: { time: 1 }});
};

Template.messages.editing = function() {
  return Session.equals('editingMessage', this._id);
};

Template.messages.story = function() {
  var story = Session.get('currentStory');
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
          time: Date.now(),
          parent: Session.get('currentStory')
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
    Session.set('editingMessage', this._id);
  },

  'keydown #message_edit' : function(event) {
    if (event.which == 13) {
      var value = String(event.target.value || "");
      Meteor.call('editMessage', this._id, value);
      Session.set('editingMessage', null);
    }
  }
});
