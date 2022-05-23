const goodsList = [
  {
    id: 1,
    link: 'img/1.jpg',
    colorAmount: '4',
    title: 'Смартфон Xiaomi Redmi 6A 16 ГБ. Основная камера 13 Мп, полноэкранный дисплей.',
    price: '5768',
    category: 'Телефоны',
  },
  {
    id: 2,
    link: 'img/2.jpg',
    colorAmount: '3',
    title: 'Смартфон Xiaomi Redmi 6A 32 ГБ. Основная камера 13 Мп, полноэкранный дисплей, современный дизайн.',
    price: '17 600',
    category: 'Телефоны',
  },
  {
    id: 3,
    link: 'img/3.jpg',
    colorAmount: '2',
    title: 'Смартфон HUAWEI Y6 Prime 2018.',
    price: '6 800',
    category: 'Телефоны',
  },
  {
    id: 4,
    link: 'img/4.jpg',
    colorAmount: '3',
    title: 'Cмартфон Honor 7С Pro 32 ГБ. Безрамочный экран 5, 99',
    price: '7 200',
    category: 'Телефоны',
  },
  {
    id: 5,
    link: 'img/5.jpg',
    colorAmount: '2',
    title: 'Смартфон Xiaomi Redmi 5 16 ГБ с широким экраном.',
    price: '9 630',
    category: 'Телефоны',
  },
  {
    id: 6,
    link: 'img/6.jpg',
    colorAmount: '4',
    title: 'Cмартфон Honor 8X 64 ГБ. Безрамочный экран FullView 6,5“. Доставка из России от 2 дней.',
    price: '15 990',
    category: 'Телефоны',
  },
  {
    id: 7,
    link: 'img/7.jpg',
    colorAmount: '5',
    title: 'Смартфон HUAWEI P20 lite',
    price: '13 990',
    category: 'Телефоны',
  },
  {
    id: 8,
    link: 'img/8.jpg',
    colorAmount: '3',
    title: 'Смартфон Xiaomi Mi8 Lite 4 + 64 ГБ',
    price: '17 990',
    category: 'Телефоны',
  },
  {
    id: 0,
    colorAmount: '2',
    title: 'Игровая приставка Sony PlayStation 4 Pro',
    price: '33 990',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg',
    'hoverImg': 'https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg',
    category: 'Игровая приставка'
  },
  {
    id: 24,
    colorAmount: '2',
    title: 'Игровая приставка Sony PlayStation 3 Super Slim',
    price: '16 499',
    link: 'https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg',
    category: 'Игровая приставка'
  }, {
    id: 25,
    colorAmount: '2',
    title: 'Игровая приставка Xbox One X',
    price: '39 990',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1024358491.jpg',
    category: 'Игровая приставка'
  }, {
    id: 26,
    colorAmount: '2',
    title: 'Игровая приставка Xbox One S',
    price: '23 411',
    sale: true,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1024822131.jpg',
    category: 'Игровая приставка'
  }, {
    id: 27,
    colorAmount: '2',
    title: 'Игровая приставка Nintendo Switch',
    price: '24 751',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1021386685.jpg',
    category: 'Игровая приставка'
  }, {
    id: 28,
    colorAmount: '2',
    title: 'Игровая приставка Sega Retro Genesis HD',
    price: '3 624',
    sale: true,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1024928305.jpg',
    category: 'Игровая приставка'
  }, {
    id: 29,
    colorAmount: '2',
    title: 'Игровая приставка Dendy Junior',
    price: '1 551',
    sale: true,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg',
    category: 'Игровая приставка'
  }, {
    id: 30,
    colorAmount: '2',
    title: 'Игровая приставка Sony PlayStation Classic',
    price: '10 445',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1025222877.jpg',
    category: 'Игровая приставка'
  }, {
    id: 31,
    colorAmount: '2',
    title: 'Клавиатура Logitech Wireless Keyboard K360',
    price: '2 390',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1015518726.jpg',
    category: 'Периферия для ПК'
  }, {
    id: 9,
    colorAmount: '2',
    title: 'Клавиатура Defender Element HB-195',
    price: '566',
    sale: true,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1028488609.jpg',
    category: 'Периферия для ПК'
  }, {
    id: 10,
    title: 'Игровая клавиатура Steelseries Apex M750- RU',
    price: '12 848',
    sale: true,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1027006299.jpg',
    'hoverImg': 'https://cdn1.ozone.ru/multimedia/c400/1027006301.jpg',
    category: 'Периферия для ПК'
  }, {
    id: 11,
    colorAmount: '2',
    title: 'Мышь + коврик A4Tech Bloody V7M+B-071',
    price: '1 649',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1026202934.jpg',
    'hoverImg': 'https://cdn1.ozone.ru/multimedia/c400/1026202933.jpg',
    category: 'Периферия для ПК'
  }, {
    id: 12,
    colorAmount: '2',
    title: 'Мышь Trust Varo',
    price: '1 097',
    sale: true,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1025117257.jpg',
    'hoverImg': 'https://cdn1.ozone.ru/multimedia/c400/1025117012.jpg',
    category: 'Периферия для ПК'
  }, {
    id: 13,
    colorAmount: '2',
    title: 'Мышь Genius DX-120',
    price: '350',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1014472326.jpg',
    'hoverImg': 'https://cdn1.ozone.ru/multimedia/c400/1014472325.jpg',
    category: 'Периферия для ПК'
  }, {
    id: 14,
    colorAmount: '2',
    title: 'Коврик для мыши Orico MPA9040',
    price: '1 279',
    sale: true,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1026748248.jpg',
    'hoverImg': 'https://cdn1.ozone.ru/multimedia/c400/1026748250.jpg',
    category: 'Периферия для ПК'
  }, {
    id: 15,
    colorAmount: '2',
    title: 'Коврик для мыши Trust GXT 760 Glide RGB',
    price: '4 959',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1025053907.jpg',
    category: 'Периферия для ПК'
  }, {
    id: 16,
    colorAmount: '2',
    title: 'Метро: Исход',
    price: '1 479',
    sale: true,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1026951535.jpg',
    category: 'Игры и софт'
  }, {
    id: 17,
    colorAmount: '2',
    title: 'Darksiders III. Коллекционное издание',
    price: '3 990',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1023840682.jpg',
    'hoverImg': 'https://cdn1.ozone.ru/multimedia/c400/1023849642.jpg',
    category: 'Игры и софт'
  }, {
    id: 18,
    colorAmount: '2',
    title: 'Mortal Kombat X',
    price: '1 076',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1011627377.jpg',
    category: 'Игры и софт'
  }, {
    id: 19,
    colorAmount: '2',
    title: 'Microsoft Windows 10 Home (32/64-bit)',
    price: '9 412',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1013975751.jpg',
    'hoverImg': 'https://cdn1.ozone.ru/multimedia/c400/1013975799.jpg',
    category: 'Игры и софт'
  }, {
    id: 20,
    colorAmount: '2',
    title: '1С:Предприятие 8.3. Версия для обучения программированию',
    price: '560',
    sale: true,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1015773076.jpg',
    category: 'Игры и софт'
  }, {
    id: 21,
    colorAmount: '2',
    title: 'ABBYY FotoTranslate',
    price: '805',
    sale: false,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1001559725.jpg',
    category: 'Игры и софт'
  },
  {
    id: 22,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1021419099.jpg',
    colorAmount: '3',
    title: 'Destiny (Xbox 360)',
    price: '723',
    category: 'Игры и софт'
  }, {
    id: 23,
    link: 'https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg',
    colorAmount: '3',
    title: 'Игра Onrush (PS4 Sony)',
    price: '1 794',
    category: 'Игры и софт'
  },
]
