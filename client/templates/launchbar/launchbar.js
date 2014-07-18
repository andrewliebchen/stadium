Session.set('currentChat', null);

Deps.autorun(function() {
  Meteor.subscribe('usersData');
});

Template.launchbar.members = function() {
  return Meteor.users.find({_id: {$ne: Meteor.userId()}});
};

// Make this work
// Template.userMenu.currentUserAvatar = function() {
//   var user = Meteor.user();
//   if (user && user.emails[0].address) {
//     return '<img src="' + Gravatar.imageUrl(user.emails[0].address) + '">';
//   }
// };

Template.launchbar.events({
  'click .chat-toggle' : function(event) {
    showChats($(event.target), this._id);
    Session.set('currentChatParent', this._id);
  }
});
