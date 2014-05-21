Session.setDefault('currentStory', null);
Session.setDefault('editingStory', null);

Deps.autorun(function() {
  Meteor.subscribe('stories');
});

Template.stories.stories = function() {
  return Stories.find({});
}

Template.stories.selected = function() {
  return Session.equals('currentStory', this._id) ? 'is-selected' : '';
}

Template.stories.editing = function() {
  return Session.equals('editingStory', this._id);
};

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
