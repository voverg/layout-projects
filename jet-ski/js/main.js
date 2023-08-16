// Handle search section tabs
const searchTabs = new Tabs('.search');

// Handle products section tabs
const popularProductsTabs = new Tabs('.popular');
const similarProductsTabs = new Tabs('.similar');

// Create products
const products = new Products(productList);
const replacementCards = products.createCards('replacement');
const electronicsCards = products.createCards('electronics');

const $popReplacement = document.getElementById('pop-replacement');
$popReplacement.innerHTML = replacementCards.join('');
const $popElectronics = document.getElementById('pop-electronics');
$popElectronics.innerHTML = electronicsCards.join('');

const $similarReplacement = document.getElementById('similar-replacement');
$similarReplacement.innerHTML = replacementCards.join('');
const $similarElectronics = document.getElementById('similar-electronics');
$similarElectronics.innerHTML = electronicsCards.join('');


// Sliders
$(function(){
  // Create a promo slider
  $('.promo__slider').slick({
    dots: true,
    prevArrow: `<button class="promo__slider-btn promo__slider-btn-prev">
                  <img src="icons/arrow-left.svg">
                </button>`,
    nextArrow: `<button class="promo__slider-btn promo__slider-btn-next">
                  <img src="icons/arrow-right.svg">
                </button>`,
  });

  // Create a products slider
  $('.products__slider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<button class="products__slider-btn products__slider-btn-prev">
                  <img src="icons/arrow-left-black.svg">
                </button>`,
    nextArrow: `<button class="products__slider-btn products__slider-btn-next">
                  <img src="icons/arrow-right-black.svg">
                </button>`,
  });

});


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