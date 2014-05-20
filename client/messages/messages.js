Session.setDefault('editingMessage', null);

Deps.autorun(function() {
  Meteor.subscribe('messages', Session.get('currentStory'));
});

Template.messages.messages = function() {
  if (Session.get('currentStory') == null ) {
    return Messages.find({}, {sort: { time: 1 }});
  } else {
    return Messages.find({story: Session.get('currentStory')}, { sort: { time: 1 }});
  }
};

Template.messages.editing = function() {
  return Session.equals('editingMessage', this._id);
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
          story: Session.get('currentStory')
        });
        message.value = '';
      }
    }
  }
});

Template.messages.events({
  'click .messages .delete' : function(event) {
    event.preventDefault();
    Meteor.call('removeMessage', this._id);
  },

  'click .message-edit' : function(event) {
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
