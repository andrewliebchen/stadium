// Router.map(function() {
//   this.route('home', {
//     path: '/'
//   });

//   this.route('ticketPage', {
//     path: '/ticket/:_id',
//     waitOn: function() {
//       return [
//         Meteor.subscribe('singleTicket', this.params._id)
//       ];
//     },
//     data: function() { return Ticket.findOne(this.params._id); }
//   });
// });

// Router.onBeforeAction('loading');
