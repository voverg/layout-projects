class Floors extends Component {
  constructor($floors) {
    super($floors, {
      name: 'Floors',
      listeners: ['mouseover', 'click'],
    });
  }

  onMouseover(event) {
    console.log('Mouseover on floors: ', event);
  }

  onClick(event) {
    console.log('Root: ', this.$root);
    console.log('Click on floors: ', event.target);
  }

  render() {
    const floors = [];

    floorList.map(floor => {
      const className = floor.active ? 'current-floor' : 'floor';
      const floorStr =  `
        <path data-floor="${floor.floor}" class="${className}" d="${floor.coord}" fill="#3595F6" fill-opacity="0.75"/>
      `;

      floors.push(floorStr);
    });

    this.$root.insertAdjacentHTML('beforeend', floors.join(''));
  }

}

