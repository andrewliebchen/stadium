Session.setDefault('currentTicket', null);
Session.setDefault('ticketMenu', null);
Session.setDefault('editingTicket', null);
Session.setDefault('ticketCount', null);

isotopeLayout = function($isotopeContainer) {
  $isotopeContainer.isotope({
    itemSelector: '.ticket',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 1,
      gutter: 8
    }
  });
}

Deps.autorun(function() {
  Meteor.subscribe('tickets', function(){
    var $isotopeContainer = $('.tickets');
    isotopeLayout($isotopeContainer);
    $('.filter').change(function() {
      var filterValue = $(this).val();
      $isotopeContainer.isotope({ filter: filterValue });
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

Template.ticketNew.events({
  'click #add_ticket' : function(event, template) {
    var ticketNumber = Session.get('ticketCount');
    var ticketTitle = template.find('#new_ticket_title');
    var ticketDescription = template.find('#new_ticket_description');

    var newTicket = {
      userId:      Meteor.userId(),
      number:      ticketNumber,
      title:       ticketTitle.value,
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
  }
});

Template.tickets.events({
  'click .ticket' : function(event) {
    event.preventDefault();
    return Session.set('currentTicket', this._id);
  },

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
      title:  template.find('#edit_ticket_title').value,
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
