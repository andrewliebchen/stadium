Session.setDefault('currentTicket', null);
Session.setDefault('editingTicket', null);
Session.setDefault('ticketCount', null);

Deps.autorun(function() {
  Meteor.subscribe('tickets', function(){
    $('.filter').change(function() {
      // bootstrap dropdown will work better here.
      $('.tickets').isotope({ filter: filterValue });
    });

    Session.set('ticketCount', Tickets.find({}).count());
  });
});

Template.tickets.ticket = function() {
  return Tickets.find({}, { sort: { time: -1 } });
};

Template.tickets.showTicketActions = function() {
  return Session.equals('currentTicket', this._id);
};

Template.tickets.rendered = function(){
  isotopeLayout($('.tickets'));
};

Template.ticketsBackground.background = function() {
  return Session.get('currentTicket');
};

Template.newTicket.events({
  'click .mrt_add-ticket' : function(event, template) {
    var ticketNumber      = Session.get('ticketCount');
    var ticketTag         = template.find('.mrt_new-ticket_tag');
    var ticketDescription = template.find('.mrt_new-ticket_description');

    var newTicket = {
      userId:      Meteor.userId(),
      number:      ticketNumber,
      tag:         ticketTag.value,
      description: ticketDescription.value,
      size:        template.find('.mrt_new-ticket_size').value,
      status:      template.find('.mrt_new-ticket_status').value,
      type:        'story',
      time:        Date.now()
    }

    if(newTicket.tag != '') {
      Meteor.call('addTicket', newTicket, function(err, id) {
        if(err)
          console.log(err);
        $('.tickets').isotope('reloadItems'); // This doesn't quite work
      });

      ticketTag.value = '';
      ticketDescription.value = '';
    }
  }
});

Template.tickets.events({
  'click .ticket' : function(event) {
    event.preventDefault();
    Session.set('currentTicket', this._id);
  },

  'click .mtr_close-ticket' : function(event) {
    event.stopPropagation();
    Session.set('currentTicket', null);
  },

  'click .mtr_edit-ticket' : function(event, template) {

  },

  'click .mtr_save-ticket' : function(event, template) {
    var edits = {
      description: ticketDescription.value,
      size:        template.find('.mrt_new-ticket_size').value,
      status:      template.find('.mrt_new-ticket_status').value,
    };

    Meteor.call('editTicket', this._id, edits);

    Session.set('editingTicket', null);
    isotopeLayout($('.tickets'));
  }
});

