class Counter extends Component {
  constructor($counter, options) {
    super($counter, {
      name: 'Counter',
      listeners: ['click'],
      ...options,
    });

    this.$value = this.$root.querySelector('.js-counter-value');
    this.floorData = options.floorData;
  }

  init() {
    super.init();
    this.store.subscribe(() => {
      this.state = this.store.getState();
      this.$value.textContent = this.state.floor;
    });
  }

  onClick({target}) {
    if (isPrev(target)) {
      const active = this.floorData.getPrev();
      this.store.dispatch({type: 'selectFloor', floor: active.id});
    } else if (isNext(target)) {
      const active = this.floorData.getNext();
      this.store.dispatch({type: 'selectFloor', floor: active.id});
    }
  }

}

function isPrev(target) {
  return target.dataset.type === 'prev';
}

function isNext(target) {
  return target.dataset.type === 'next';
}

