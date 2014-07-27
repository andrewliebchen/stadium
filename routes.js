Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function() {
      return [
        Meteor.subscribe('tickets')
      ];
    },
    data: function() {
      Session.set('currentTicket', null);
      Session.set('currentChatParent', null);
      $('body').removeClass('show-messages');
      return Tickets.find({});
    }
  });

  this.route('singleTicket', {
    path: '/ticket/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleTicket', this.params._id)
      ];
    },
    data: function() {
      Session.set('currentTicket', this.params._id);
      showChats($('.toggle-chat_ticket'), this.params._id);
      return Tickets.findOne(this.params._id);
    }
  });
});

Router.onBeforeAction('loading');
