Session.set('currentChat', null);

Template.launchbar.events({
  'click #chat_all' : function(event) {
    Session.set('currentChat', null);

    $(event.target).toggleClass('is-selected');
    $('body').toggleClass('show-chats');
    isotopeLayout();

    var chatsWidth = $('.chats').width();
    $('.new-chat').css('width', chatsWidth + 'px');
  }
});
