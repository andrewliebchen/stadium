isotopeLayout = function(isotopeContainer) {
  $isotopeContainer = $(isotopeContainer)
  $isotopeContainer.isotope({
    itemSelector: '.ticket',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 1,
      gutter: 8
    }
  });
}

showChats = function(chatParent, chatParentId) {
  $chatParent = $(chatParent);
  Session.set('currentChatParent', chatParentId);

  if($chatParent.hasClass('is-selected')) {
    $('body').removeClass('show-messages');
    $chatParent.removeClass('is-selected');
  } else {
    $('.mrt_toggle-chat.is-selected').removeClass('is-selected');
    $('body').addClass('show-messages');
    $chatParent.addClass('is-selected');
  };

  isotopeLayout($('.tickets'));
}
