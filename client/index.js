Session.set('currentChat', null);

Deps.autorun(function() {
  Meteor.subscribe('usersData');
});

Template.launchbar.members = function() {
  return Meteor.users.find({_id: {$ne: Meteor.userId()}});
};

Template.userMenu.currentUserAvatar = function() {
  var user = Meteor.user();
  if (user && user.emails[0].address) {
    return '<img src="' + Gravatar.imageUrl(user.emails[0].address) + '">';
  }
};

Template.modal.helpers({
  activeModal: function() {
    return Session.get('activeModal');
  }
});

Template.launchbar.events({
  // DRY this up
  'click #chat_all' : function(event) {
    Session.set('currentChatParent', null);

    $(event.target).toggleClass('is-selected');
    $('body').toggleClass('show-messages');
    isotopeLayout($('.tickets'));

    var messagesWidth = $('.messages').width();
    $('.message-new').css('width', messagesWidth + 'px');
  },

  'click .member' : function(event) {
    Session.set('currentChatParent', this._id);

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
