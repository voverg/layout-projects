$(function(){
  // Create a slider
  $('.bunner__slider').slick({
    dots: true,
    prevArrow: `<button class="bunner__slider-btn bunner__slider-btn-prev">
                  <img src="icons/arrow-left.svg">
                </button>`,
    nextArrow: `<button class="bunner__slider-btn bunner__slider-btn-next">
                  <img src="icons/arrow-right.svg">
                </button>`,
  });

});

// Handle search section tabs
const searchTabs = new Tabs('.search');

// Handle products section tabs
const productsTabs = new Tabs('.products');

// Events
document.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.target.dataset.type === 'card-favorite') {
    event.preventDefault();
    event.target.classList.toggle('card__favorite--active');
  } else if (event.target.dataset.type === 'card-basket') {
    event.preventDefault();
  }
}
