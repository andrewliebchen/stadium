Template.commandline.events({
  'keydown .commandline-input' : function(event) {
    if (event.which == 13) {
      Meteor.user() ? name = Meteor.user().emails[0].address : name = 'Anonymous';
      var message = $(event.target);
      var messageContent = message.val();
      console.log(messageContent);

      if (messageContent != '') {
        Meteor.call('addMessage', {
          name: name,
          message: messageContent,
          time: Date.now(),
          parent: Session.get('currentChatParent'),
          fromId: Meteor.userId()
        });

        message.val('');
      }
    }
  }
});
