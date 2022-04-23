class Floors extends Component {
  constructor($floors, options) {
    super($floors, {
      name: 'Floors',
      listeners: ['mouseover', 'click'],
      ...options,
    });

    this.floorData = options.floorData;
  }

  init() {
    super.init();
    this.store.subscribe(() => {
      this.state = this.store.getState();
      clearCurrentFloor(this.$root);
      const floor = this.$root.querySelector(`[data-floor="${this.state.floor}"]`);
      floor.classList.add('current-floor');
    });
  }

  onMouseover({target}) {
    if (!isFloor(target)) return;

    clearCurrentFloor(this.$root);
    target.classList.add('current-floor');
    const active = this.floorData.setActive(target.dataset.floor);

    this.store.dispatch({type: 'selectFloor', floor: active.id});
  }

  onClick({target}) {
    if (!isFloor(target)) return;

    this.store.dispatch({type: 'open', open: true});
  }

  render() {
    const floors = [];

    floorList.map(floor => {
      const floorHtml = toFloorHtml(floor);
      floors.push(floorHtml);
    });

    this.$root.insertAdjacentHTML('beforeend', floors.join(''));
  }

}


function toFloorHtml(floor) {
  const className = floor.active ? ['floor', 'current-floor'].join(' ') : 'floor';
  const floorHtml = `
    <path data-floor="${floor.id}" class="${className}" d="${floor.coord}" fill="#3595F6" fill-opacity="0.75"/>
  `;

  return floorHtml;
}

function clearCurrentFloor($floors) {
  Array.from($floors.children).forEach(floor => {
    floor.classList.remove('current-floor');
  });
}

function isFloor(target) {
  return target.dataset.floor;
}

