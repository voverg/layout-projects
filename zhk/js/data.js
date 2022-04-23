const floorList = [
  {id: '02', coord: 'M222 532L442.8 540L512 526.3V548L443.5 567.7L222 556.7V532Z', active: true},
  {id: '03', coord: 'M223 531V506L443.3 509.3L513 506V526L443.7 539L223 531Z', active: false},
  {id: '04', coord: 'M223 505V480H444H513V503L445 510L223 505Z', active: false},
  {id: '05', coord: 'M223 481V456L444.3 452.3L512 459V481H444', active: false},
  {id: '06', coord: 'M223 455V429L444.5 425.7L513 436.7V458L444 451.3L223 455Z', active: false},
  {id: '07', coord: 'M222 428V404.3L443 392L514 415V436.3L443 424L222 428Z', active: false},
  {id: '08', coord: 'M222 406V381L444.2 364.7L514 393.3V414L443.7 392.3L222 406Z', active: false},
  {id: '09', coord: 'M222 381V356L444.5 335.7L514 372.3V393L442 364.3L222 381Z', active: false},
  {id: '10', coord: 'M222 355V331L445 306.3L514 350.3V372L444.7 334L222 355Z', active: false},
  {id: '11', coord: 'M222 330V306L444.5 277.3L514 328.3V349L443.7 306.7L222 330Z', active: false},
  {id: '12', coord: 'M221 306V282L443.3 249L514 308.3V328L444 277.3L221 306Z', active: false},
  {id: '13', coord: 'M222 281V257L443.2 222L513 286V307L444.3 248.7L222 281Z', active: false},
  {id: '14', coord: 'M222 257V232L444.3 194L513 264.3V285L444 221L222 257Z', active: false},
  {id: '15', coord: 'M222 231V206L442.8 162.3L513 241.3V264L444 190.7L222 231Z', active: false},
  {id: '16', coord: 'M223 207V182L443 134L513 219V242L442.3 162.7L223 207Z', active: false},
  {id: '17', coord: 'M222 182V157L441.8 105L513 197.3V220L443.3 133.7L222 182Z', active: false},
  {id: '18', coord: 'M222 157V131L444 74.3L513 176V197L443.7 105.3L222 157Z', active: false},
];

const flatList = [
  {id: '0', amountRoom: 2, square: 64.5, active: true},
  {id: '1', amountRoom: 1, square: 38.9, active: false},
  {id: '2', amountRoom: 1, square: 35.9, active: false},
  {id: '3', amountRoom: 2, square: 56.0, active: false},
  {id: '4', amountRoom: 1, square: 35.8, active: false},
  {id: '5', amountRoom: 1, square: 35.8, active: false},
  {id: '6', amountRoom: 2, square: 58.4, active: false},
  {id: '7', amountRoom: 1, square: 32.3, active: false},
  {id: '8', amountRoom: 1, square: 29.9, active: false},
  {id: '9', amountRoom: 3, square: 75.2, active: false},
];


class ListHandler {
  constructor(list) {
    this.list = list;
    this.active = this.list.find(item => item.active);
    this.activeIndex = this.list.findIndex(item => item.active);
  }

  getActive() {
    return this.active;
  }

  setActive(id) {
    this.clearActive();
    this.list.forEach((item, index) => {
      if (item.id === id) {
        item.active = true;
        this.active = item;
        this.activeIndex = index;
      }
    });

    return this.active;
  }

  clearActive() {
    this.list.forEach(item => item.active = false);
  }

  getPrev() {
    this.activeIndex = this.activeIndex <= 0 ? this.list.length - 1 : this.activeIndex - 1;
    this._setActiveByIndex(this.activeIndex);

    return this.active;
  }

  getNext() {
    this.activeIndex = this.activeIndex >= this.list.length - 1 ? 0 : this.activeIndex + 1;
    this._setActiveByIndex(this.activeIndex);

    return this.active;
  }

  _setActiveByIndex(index) {
    this.clearActive()
    this.list[index].active = true;
    this.active = this.list[index];
  }

  map(fn) {
    return this.list.map(fn);
  }
}
