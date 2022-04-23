class Flats extends Modal{
  constructor($root, options) {
    super($root, {
      name: 'Flats',
      listeners: ['mouseover', 'click'],
      ...options,
    });

    this.modalCounter = this.$root.querySelector('.modal-counter');
    this.flats = this.$root.querySelectorAll('[data-flats]');
    this.currentFlat = this.flats[0];

    // console.log(this.currentFlat);
  }

  init() {
    super.init();

    this.store.subscribe(() => {
      this.state = this.store.getState();
      if (this.state.open) {
        this.render();
        this.clear();
        this.currentFlat = this.$root.querySelector(`[data-flats="${this.state.flat}"]`);

        if (this.currentFlat) {
          this.currentFlat.classList.add('current-flat');
        }
      }
    });
  }

  clear() {
    this.flats.forEach(flat => flat.classList.remove('current-flat'));
  }

  onClick({target}) {
    if (!isFlat(target)) return;

    this.store.dispatch({type: 'selectFlat', flat: target.dataset.flats});
  }

  onMouseover({target}) {
    if (!isFlat(target)) return;

    this.store.dispatch({type: 'selectFlat', flat: target.dataset.flats});
  }

  render() {
    this.modalCounter.textContent = this.floorData.getActive().id;
    this.flats.forEach((flat, index) => {
      const floorNumber = +this.floorData.active.id;
      flat.dataset.flats = `${floorNumber}${this.flats.length - index - 1}`;
    });
  }

}

function isFlat(target) {
  return target.dataset.flats;
}
