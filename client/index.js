Session.set('currentChat', null);

Template.launchbar.events({
  'click #chat_all' : function(event) {
    $(event.target).toggleClass('is-selected');
    Session.set('currentChat', null);
    $('body').toggleClass('show-chats');
    isotopeLayout();
  }
});
