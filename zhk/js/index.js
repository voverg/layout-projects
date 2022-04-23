const app = new App({
  floorData: new ListHandler(floorList),
  flatData: new ListHandler(flatList),
  components: [
    {class: Floors, elem: document.querySelector('.js-floors')},
    {class: Counter, elem: document.querySelector('.js-counter')},
    {class: Modal, elem: document.querySelector('.js-modal')},
    {class: Flats, elem: document.querySelector('.js-flats')},
    {class: FlatsInfo, elem: document.querySelector('.js-flat-list')},
  ],
});

app.init();


