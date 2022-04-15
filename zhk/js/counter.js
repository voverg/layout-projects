class Counter {
  constructor(arr) {
    this.counterEl = document.querySelector('.counter');
    this.upEl = this.counterEl.querySelector('.counter__btn--up');
    this.downEl = this.counterEl.querySelector('.counter__btn--down');
    this.valueEl = this.counterEl.querySelector('.counter__value');

    this.arr = arr;
    this.indexValue = this.arr.findIndex(item => item.active === true);
    this._value = this.arr[this.indexValue].floor;

    this.init();
  }

  init() {
    this.upEl.addEventListener('click', this.up.bind(this));
    this.downEl.addEventListener('click', this.down.bind(this));
  }

  getValue() {
    return this._value;
  }

  setValue(value) {
    this._value = value;
    this.indexValue = this.arr.findIndex(item => item.floor === this._value);
    this.valueEl.textContent = this._value;
  }

  up() {
    this.indexValue++;
    if (this.indexValue >= this.arr.length) {
      this.indexValue = 0;
    }

    this.updateFloors();
  }

  down() {
    this.indexValue--;
    if (this.indexValue <= 0) {
      this.indexValue = this.arr.length - 1;
    }

    this.updateFloors();
  }

  updateFloors(target = null) {
    this.arr.forEach(item => item.active = false);
    Array.from(houseEl.children).forEach(child => child.classList.remove('current-floor'));

    this.arr[this.indexValue].active = true;
    const value = target ? target.dataset.floor : this.arr[this.indexValue].floor;
    this.setValue(value);

    const floor = target ? target : document.querySelector(`[data-floor="${this.getValue()}"]`);
    floor.classList.add('current-floor');
  }
}
