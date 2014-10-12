isotopeLayout = function(isotopeContainer) {
  $isotopeContainer = $(isotopeContainer);
  $isotopeContainer.isotope({
    itemSelector: '.ticket',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 1,
      gutter: 8
    }
  });
  console.log('Layout');
}
