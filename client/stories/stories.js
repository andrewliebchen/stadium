Session.setDefault('addingStory', false);
Session.setDefault('currentStory', null);
Session.setDefault('editingStory', null);

Deps.autorun(function() {
  Meteor.subscribe('stories');
});

Template.storyNew.isAdding = function() {
  return Session.equals('addingStory', true) ? 'is-adding' : '';
}

Template.stories.stories = function() {
  return Stories.find({}, { sort: { time: -1 } });
}

Template.stories.selected = function() {
  return Session.equals('currentStory', this._id) ? 'is-selected' : '';
}

Template.stories.editing = function() {
  return Session.equals('editingStory', this._id);
};

Template.storyNew.events({
  'click #new_story_toggle' : function(event) {
    event.preventDefault();
    return Session.set('addingStory', true);
  },

  'click #add_story' : function(event) {
    var story = document.getElementById('new_story_title');

    if(story.value != '') {
      Meteor.call('addStory', {
        userId: Meteor.userId(),
        title: story.value,
        time: Date.now()
      });

      story.value = '';
    }
  }
});

Template.stories.events({
  'click .story' : function(event) {
    event.preventDefault();
    return Session.set('currentStory', this._id);
  },

  'click #all_stories' : function(event) {
    event.preventDefault();
    Session.set('currentStory', null);
  },

  // DRY this up
  'click .story-delete' : function(event) {
    event.preventDefault();
    Meteor.call('removeStory', this._id);
  },

  'click .story-edit' : function(event) {
    event.preventDefault();
    Session.set('editingStory', this._id);
  },

  'keydown #story_edit' : function(event) {
    if (event.which == 13) {
      var value = String(event.target.value || "");
      Meteor.call('editStory', this._id, value);
      Session.set('editingStory', null);
    }
  }
});
