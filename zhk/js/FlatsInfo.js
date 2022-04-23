class FlatsInfo extends Modal{
  constructor($root, options) {
    super($root, {
      name: 'FlatsInfo',
      listeners: ['mouseover', 'click'],
      ...options,
    });

    this.$links = this.$root.querySelectorAll('.flat-link');
    this.currentLink = this.$links[0];
  }

  init() {
    super.init();

    this.store.subscribe(() => {
      this.state = this.store.getState();
      if (this.state.open) {
        this.render();
        this.clear();
        this.currentLink = this.$root.querySelector(`[data-num="${this.state.flat}"]`);

        if (this.currentLink) {
          this.currentLink.classList.add('flat-link-active');
        }
      }
    });
  }

  clear() {
    this.$links.forEach(link => link.classList.remove('flat-link-active'));
  }

  onClick({target}) {
    if (!isFlatItem(target)) return;

    this.store.dispatch({type: 'selectFlat', flat: target.dataset.num});
  }

  onMouseover({target}) {
    if (!isFlatItem(target)) return;

    this.store.dispatch({type: 'selectFlat', flat: target.dataset.num});
  }

  render() {
    const floorNumber = +this.floorData.active.id;
    const flats = this.flatData.map((item, index) => {
        return `
          <li class="flat-item">
            <a href="#" data-num="${floorNumber}${item.id}" data-flat="true" class="flat-link">кв. <span class="flat-number-${item.id}">${floorNumber}${item.id}</span>, ${item.amountRoom} комн. ${item.square} кв. м.</a>
          </li>
        `;
      });

      this.$root.innerHTML = flats.join('');
  }

}

function isFlatItem(target) {
  return target.dataset.flat;
}
