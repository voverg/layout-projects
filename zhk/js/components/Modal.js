class Modal extends Component {
  constructor($root, options = {}) {
    super($root, {
      name: 'Modal',
      listeners: ['click'],
      ...options,
    });

    this.floorData = options.floorData;
    this.flatData = options.flatData;
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
  }

  close() {
    this.$root.classList.remove('is-open');
  }

  onClick({target}) {
    if (isClose(target)) {
      this.store.dispatch({type: 'open', open: false});
    }
  }

  render() {}

}


function isClose(target) {
  return target.dataset.close;
}



