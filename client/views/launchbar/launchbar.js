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

Template.launchbar.events({
  'click .chat-toggle' : function(event) {
    $this = $(event.target);
    Session.set('currentChatParent', this._id);

    if($this.hasClass('is-selected')) {
      $('.chat-toggle.is-selected').removeClass('is-selected');
      $('body').removeClass('show-messages');
      $this.removeClass('is-selected');
    } else {
      $('.chat-toggle.is-selected').removeClass('is-selected');
      $('body').addClass('show-messages');
      $this.addClass('is-selected');
    };

    isotopeLayout($('.tickets'));
  }
});
