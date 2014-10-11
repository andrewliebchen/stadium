Template.modal.helpers({
  activeModal: function() {
    return Session.get('activeModal');
  }
});

Template.dropdown.helpers({
  activeDropdown: function() {
    return Session.get('activeDropdown');
  }
});

Template.layout.events({
  'click [data-modal-template]' : function(event) {
    var template = $(event.target).data('modal-template');
    Session.set('activeModal', template);
  },

  'click [data-modal="close"]' : function(event) {
    Session.set('activeModal', null);
  },

  'click [data-dropdown-template]' : function(event) {
    $this = $(event.target);
    var template = $this.data('dropdown-template');
    Session.set('activeDropdown', template);

    // Dropdown positioning
    var targetPosition = $this.offset();
    $('.dropdown').css({
      'top': targetPosition.top + 'px',
      'left': targetPosition.left + 'px'
    });
  }
});
