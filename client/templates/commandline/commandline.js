Template.commandline.events({
  'keydown .mrt_commandline-input' : function(event) {
    if (event.which == 13) {
      var message = $(event.target);
      var messageContent = message.val();

      switch(messageContent) {
        case '/add':
          Session.set('activeModal', 'newTicket');
          break;

        case '/chat':
          showChats($('.toggle-chat_team'), null);
          break;

        default:
          Meteor.user() ? name = Meteor.user().emails[0].address : name = 'Anonymous';
          if (messageContent != '') {
            Meteor.call('addMessage', {
              name: name,
              message: messageContent,
              time: Date.now(),
              parent: Session.get('currentChatParent'),
              fromId: Meteor.userId()
            });
          };
      };

      message.val('');
    }
  }
});
