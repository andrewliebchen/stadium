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
  'click #add_ticket' : function(event, template) {
    var ticketNumber      = Session.get('ticketCount');
    var ticketTag         = template.find('#new_ticket_tag');
    var ticketDescription = template.find('#new_ticket_description');

    var newTicket = {
      userId:      Meteor.userId(),
      number:      ticketNumber,
      tag:         ticketTag.value,
      description: ticketDescription.value,
      type:        template.find('#new_ticket_type').value,
      size:        template.find('#new_ticket_size').value,
      status:      template.find('#new_ticket_status').value,
      time:        Date.now()
    }

    if(newTicket.title != '') {
      Meteor.call('addTicket', newTicket, function(err, id){
        if(err){
        console.log(err);
      }
      });

      ticketTitle.value = '';
      ticketDescription.value = '';
    }
  },

  'change #new_ticket_type' : function(event, template) {
    var type = template.find('#new_ticket_type').value;
    $('.modal-wrapper')
      .removeClass('story')
      .removeClass('defect')
      .removeClass('task')
      .addClass(type);
  }
});

Template.tickets.events({

  'click .ticket-menu-toggle' : function(event) {
    event.preventDefault();
    var $ticketParent = $(event.target).closest('.ticket');
    var height = $ticketParent.outerHeight();
    $ticketParent.css('height', height);
    Session.set('ticketMenu', this._id);
  },

  'click .ticket-delete' : function(event) {
    event.preventDefault();
    Meteor.call('removeTicket', this._id);
  },

  'click .ticket-edit' : function(event) {
    event.preventDefault();
    Session.set('editingTicket', this._id);
  },

  'click #edit_ticket' : function(event, template) {
    var edits = {
      tag:    template.find('#edit_ticket_tag').value,
      type:   template.find('#edit_ticket_type').value,
      size:   template.find('#edit_ticket_size').value,
      status: template.find('#edit_ticket_status').value
    };

    Meteor.call('editTicket', this._id, edits);

    Session.set('editingTicket', null);
    isotopeLayout($('.tickets'));
  },

  'click .close' : function(events) {
    event.preventDefault();
    Session.set('editingTicket', null);
    Session.set('ticketMenu', null);
  }
});
