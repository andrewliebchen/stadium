Session.set('currentChatParent', null);

Deps.autorun(function() {
  Meteor.subscribe('messages');
});

Template.messages.messages = function() {
  if (Session.get('currentChatParent') == null ) {
    return Messages.find({parent: null}, {sort: {time: 1}});
  } else {
    return Messages.find({parent: Session.get('currentChatParent')}, {sort: {time: 1}});
  }
};

Template.messageNew.events({
  'keydown #new_message' : function(event, template) {
    if (event.which == 13) {
      Meteor.user() ? name = Meteor.user().profile.name : name = 'Anonymous';
      var message = template.find('#new_message');

      if (message.value != '') {
        Meteor.call('addMessage', {
          name: name,
          message: message.value,
          time: Date.now(),
          parent: Session.get('currentChatParent')
        });

        message.value = '';
      }
    }
  }
});
