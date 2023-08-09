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

});

// Handle search section tabs
const searchTabs = new Tabs('.search');

// Handle products section tabs
const productsTabs = new Tabs('.products')