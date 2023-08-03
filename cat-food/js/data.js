const cardList = [
  {
    id: '1',
    slogan: 'Сказочное заморское явство',
    title: 'Нямушка',
    subTitle: 'с фуа-гра',
    description: ['10 порций', 'мышь в подарок'],
    weight: '0,5',
    link: '#',
    status: 'default',
    statusList: {
      default: {
        className: 'card--default',
        footer: 'Чего сидишь? Порадуй котэ, ',
      },
      selected: {
        className: 'card--selected',
        hoverSlogan: 'Котэ не одобряет?',
        footer: 'Печень утки разварная с артишоками.',
      },
      disabled: {
        className: 'card--disabled',
        footer: 'Печалька, с фуа-гра закончился.',
      },
    }
  },
  {
    id: '2',
    slogan: 'Сказочное заморское явство',
    title: 'Нямушка',
    subTitle: 'с рыбой',
    description: ['40 порций', '2 мыши в подарок'],
    weight: '2',
    link: '#',
    status: 'selected',
    statusList: {
      default: {
        className: 'card--default',
        footer: 'Чего сидишь? Порадуй котэ, ',
      },
      selected: {
        className: 'card--selected',
        hoverSlogan: 'Котэ не одобряет?',
        footer: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      },
      disabled: {
        className: 'card--disabled',
        footer: 'Печалька, с рыбой закончился.',
      },
    }
  },
  {
    id: '3',
    slogan: 'Сказочное заморское явство',
    title: 'Нямушка',
    subTitle: 'с курой',
    description: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    weight: '5',
    link: '#',
    status: 'disabled',
    statusList: {
      default: {
        className: 'card--default',
        footer: 'Чего сидишь? Порадуй котэ, ',
      },
      selected: {
        className: 'card--selected',
        hoverSlogan: 'Котэ не одобряет?',
        footer: 'Филе из цыплят с трюфелями в бульоне.',
      },
      disabled: {
        className: 'card--disabled',
        footer: 'Печалька, с курой закончился.',
      },
    }
  },
];
