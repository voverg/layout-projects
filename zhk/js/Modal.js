class Modal extends Component {
  constructor($root, options) {
    super($root, {
      name: 'Modal',
      listeners: ['mouseover', 'click'],
      ...options,
    });

    this.flatData = options.flatData;
    this.floorData = options.floorData;

    this.$modalCounter = $root.querySelector('.modal-counter');
  }

  init() {
    super.init();
    this.store.subscribe(() => {
      this.state = this.store.getState();
      if (this.state.open) {
        this.open();
      } else {
        this.close();
      }
    });
  }

  open() {
    this.$root.classList.add('is-open');
    this.$modalCounter.textContent = this.floorData.getActive().id;
  }

  close() {
    this.$root.classList.remove('is-open');
  }

  onMouseover({target}) {
    // if (!isFloor(target)) return;

    // clearCurrentFloor(this.$root);
    // target.classList.add('current-floor');
    // const active = this.floorData.setActive(target.dataset.floor);

    // this.store.dispatch({type: 'select', floor: active.id});
  }

  onClick({target}) {
    if (isClose(target)) {
      this.store.dispatch({type: 'open', open: false});
    }
  }

  render() {
    // const floors = [];

    // floorList.map(floor => {
    //   const floorHtml = toFloorHtml(floor);
    //   floors.push(floorHtml);
    // });

    // this.$root.insertAdjacentHTML('beforeend', floors.join(''));
  }

}


function isClose(target) {
  return target.dataset.close;
}


// function toFloorHtml(floor) {
//   const className = floor.active ? ['floor', 'current-floor'].join(' ') : 'floor';
//   const floorHtml = `
//     <path data-floor="${floor.id}" class="${className}" d="${floor.coord}" fill="#3595F6" fill-opacity="0.75"/>
//   `;

//   return floorHtml;
// }

// function clearCurrentFloor($floors) {
//   Array.from($floors.children).forEach(floor => {
//     floor.classList.remove('current-floor');
//   });
// }



