const app = new App({
  components: [
    new Floors(document.querySelector('.floors')),
    new Counter(document.querySelector('.counter')),
    ],
});

app.init();







// // DOM-elements
// const houseEl = document.querySelector('.home-img');
// // Constants and variables
// const counter = new Counter(floors);

// // Create floor hovers elems
// function createFloors(floorList) {
//   const floorEls = floorList.map(floor => {
//     const className = floor.active ? 'current-floor' : '';

//     return `
//       <path data-floor="${floor.floor}" class="${className}" d="${floor.coord}" fill="#3595F6" fill-opacity="0.75"/>
//     `;
//   });

//   houseEl.insertAdjacentHTML('beforeend', floorEls.join(''));
// }

// createFloors(floors);

// // Work with house events
// function getUpdateFloors({target}) {
//   if (target.dataset.floor) {
//     counter.updateFloors(target);
//   }
// }

// houseEl.addEventListener('mouseover', getUpdateFloors);
// houseEl.addEventListener('click', getUpdateFloors);

