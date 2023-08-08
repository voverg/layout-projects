$(function(){
  // Create a slider
  $('.slider').slick({
    dots: true,
    prevArrow: `<button class="slider__btn slider__btn-prev">
                  <img src="icons/arrow-left.svg">
                </button>`,
    nextArrow: `<button class="slider__btn slider__btn-next">
                  <img src="icons/arrow-right.svg">
                </button>`,
  });

  // Search section tabs
  const $tabs = $('.search__tabs-item');
  const $searchItems = $('.search__content-item');
  const activeTab = 'search__tabs-item--active';
  const activeSearch = 'search__content-item--active';

  $tabs.on('click', function(event) {
    event.preventDefault();
    const $target = $(event.target);

    $tabs.removeClass(activeTab);
    $target.addClass(activeTab);

    $searchItems.removeClass(activeSearch);
    const $searchItem = $($target.attr('href'));
    $searchItem.addClass(activeSearch);
  });

});