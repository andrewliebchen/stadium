Session.set('currentChat', null);

Deps.autorun(function() {
  Meteor.subscribe('usersData');
});

Template.launchbar.members = function() {
  return Meteor.users.find({_id: {$ne: Meteor.userId()}});
};

Template.launchbar.events({
  'click .mrt_toggle-chat' : function(event) {
    showChats($(event.target), this._id);
    Session.set('currentChatParent', this._id);
  }
});
