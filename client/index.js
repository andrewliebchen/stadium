Template.modal.helpers({
  activeModal: function() {
    return Session.get('activeModal');
  }
});

UI.body.events({
  'click [data-modal-template]' : function(event) {
    var template = $(event.target).data('modal-template');
    Session.set('activeModal', template);
  },

  'click [data-modal="close"]' : function(event) {
    Session.set('activeModal', null);
  }
});
