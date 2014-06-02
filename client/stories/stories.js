Session.setDefault('addingStory', false);
Session.setDefault('currentStory', null);
Session.setDefault('editingStory', null);

Deps.autorun(function() {
  Meteor.subscribe('stories', function(){
    var $isotopeContainer = $('.stories-list');
    $isotopeContainer.isotope({
      itemSelector: '.story',
      layoutMode: 'masonry',
      masonry: {
        gutter: 50
      }
    });
  });
});

Template.storyNew.isAdding = function() {
  return Session.equals('addingStory', true) ? 'is-adding' : '';
};

Template.stories.stories = function() {
  return Stories.find({}, { sort: { time: -1 } });
};

Template.stories.selected = function() {
  return Session.equals('currentStory', this._id) ? 'is-selected' : '';
};

Template.stories.editing = function() {
  return Session.equals('editingStory', this._id);
};

Template.storyNew.events({
  'click #new_story_toggle' : function(event) {
    event.preventDefault();
    return Session.set('addingStory', true);
  },

  'click #add_story' : function(event) {
    var title =  document.getElementById('new_story_title');
    var size =   document.getElementById('new_story_size');
    var status = document.getElementById('new_story_status');

    if(title.value != '') {
      Meteor.call('addStory', {
        userId: Meteor.userId(),
        title:  title.value,
        size:   size.value,
        status: status.value,
        time:   Date.now()
      });

      title.value = '';
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

  'click .story-delete' : function(event) {
    event.preventDefault();
    Meteor.call('removeStory', this._id);
  },

  'click .story-edit' : function(event) {
    event.preventDefault();
    Session.set('editingStory', this._id);
  },

  'click #edit_story' : function(event) {
    var title =  document.getElementById('edit_story_title');
    var size =   document.getElementById('edit_story_size');
    var status = document.getElementById('edit_story_status');

    Meteor.call('editStory', this._id, {
      title:  title.value,
      size:   size.value,
      status: status.value
    });
    Session.set('editingStory', null);
  }
});
