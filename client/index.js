Template.modal.helpers({
  activeModal: function() {
    return Session.get('activeModal');
  }
});

Template.layout.events({
  'click [data-modal-template]' : function(event) {
    var template = $(event.target).data('modal-template');
    Session.set('activeModal', template);
    console.log('modal');
  },

  'click [data-modal="close"]' : function(event) {
    Session.set('activeModal', null);
  }
});
