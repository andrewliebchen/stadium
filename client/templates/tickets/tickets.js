Session.setDefault('currentTicket', null);
Session.setDefault('ticketMenu', null);
Session.setDefault('editingTicket', null);
Session.setDefault('ticketCount', null);

Deps.autorun(function() {
  Meteor.subscribe('tickets', function(){
    $('.filter').change(function() {
      var filterValue = $(this).val();
      $('.tickets').isotope({ filter: filterValue });
    });

    Session.set('ticketCount', Tickets.find({}).count());
  });
});

Template.tickets.ticket = function() {
  return Tickets.find({}, { sort: { time: -1 } });
};

Template.tickets.ticketMenu = function() {
  return Session.equals('ticketMenu', this._id);
};

Template.tickets.editing = function() {
  return Session.equals('editingTicket', this._id);
};

Template.tickets.rendered = function(){
  isotopeLayout($('.tickets'));
};

Template.newTicket.events({
  'click .mrt_add-ticket' : function(event, template) {
    var ticketNumber      = Session.get('ticketCount');
    var ticketTag         = template.find('.mrt_new-ticket_tag');
    var ticketDescription = template.find('.mrt_new-ticket_description');
    console.log(ticketTag + ticketDescription);

    var newTicket = {
      userId:      Meteor.userId(),
      number:      ticketNumber,
      tag:         ticketTag.value,
      description: ticketDescription.value,
      type:        template.find('.mrt_new-ticket_type').value,
      size:        template.find('.mrt_new-ticket_size').value,
      status:      template.find('.mrt_new-ticket_status').value,
      time:        Date.now()
    }

    if(newTicket.tag != '') {
      Meteor.call('addTicket', newTicket, function(err, id) {
        if(err) {
          console.log(err);
        }
      });

      ticketTag.value = '';
      ticketDescription.value = '';
    }
  }
});

Template.tickets.events({
  'click .mrt_edit-ticket' : function(event, template) {
    var edits = {
      tag:    template.find('.mrt_edit-ticket_tag').value,
      type:   template.find('.mrt_edit-ticket_type').value,
      size:   template.find('.mrt_edit-ticket_size').value,
      status: template.find('.mrt_edit-ticket_status').value
    };

    Meteor.call('editTicket', this._id, edits);

    Session.set('editingTicket', null);
    isotopeLayout($('.tickets'));
  }
});

Template.singleTicket.events({
  'click .single-ticket .ticket' : function(event) {
    Session.set('currentChatParent', this._id);
  }
});
