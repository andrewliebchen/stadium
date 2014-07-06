Session.set('currentChat', null);

Template.modal.helpers({
  activeModal: function() {
    return Session.get('activeModal');
  }
});

Template.launchbar.events({
  'click #chat_all' : function(event) {
    Session.set('currentChat', null);

    $(event.target).toggleClass('is-selected');
    $('body').toggleClass('show-messages');
    isotopeLayout($('.tickets'));

    var messagesWidth = $('.messages').width();
    $('.message-new').css('width', messagesWidth + 'px');
  }
});

UI.body.events({
  'click [data-modal-template]' : function(event) {
    var template = $(event.target).data('modal-template');
    Session.set('activeModal', template);
  },

  'click [data-modal="close"]' : function(event) {
    Session.set('activeModal', null);
  }
});
