Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('singleTicket', {
    path: '/ticket/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleTicket', this.params._id)
      ];
    },
    data: function() {
      Session.set('currentChatParent', this.params._id);
      return Tickets.findOne(this.params._id);
    }
  });
});

Router.onBeforeAction('loading');
