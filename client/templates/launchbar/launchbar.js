Session.set('currentChat', null);

Deps.autorun(function() {
  Meteor.subscribe('usersData');
});

Template.launchbar.members = function() {
  return Meteor.users.find({_id: {$ne: Meteor.userId()}});
};

Template.launchbar.ticketChat = function() {
  return Session.get('currentTicket');
}

Template.launchbar.events({
  'click .mrt_toggle-chat' : function(event) {
    var $this = $(event.target);
    if($this.hasClass('.toggle-chat_ticket')) {
      showChats($this, Session.get('currentTicket'));
    } else if ($this.hasClass('.toggle-chat_team')) {
      showChats($this, null);
    } else {
      showChats($this, this._id);
    }
  }
});
