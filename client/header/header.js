
function sectionShow(target) {
  var $target = $(target);
  var $section = $target.data('show');
  $('.' + $section).toggle();
};

Meteor.startup(function() {
  $('.nav-global-item.is-selected').each(function(){
    sectionShow($(this));
  });
});

Template.header.events({
  'click .nav-global-item' : function(event) {
    // Got to make this not happen if only child
    var $this = $(event.target);
    sectionShow($this);
    $this.toggleClass('is-selected');
    isotopeLayout();
  }
});
