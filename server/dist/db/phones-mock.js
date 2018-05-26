'use strict';

// Mocked database

function getPhoneList() {

  var phoneList = [{
    id: 0,
    title: 'OnePlus 6',
    description: 'OnePlus 6 (Mirror Black 6GB RAM + 64GB Memory)',
    color: 'Black',
    price: '1000',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/41fT611rSBL._AC_US160_FMwebp_QL70_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YgdWkOP0L._SY741_.jpg'
  }, {
    id: 1,
    title: 'Huawei P20 Lite Black',
    description: 'Huawei P20 Lite Black (19:9 Full View Display, 24MP Front Camera, 64GB)',
    color: 'Black',
    price: '249',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/41k7DnajEDL._AC_US160_FMwebp_QL70_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71sj7UJxnAL._SY741_.jpg'
  }, {
    id: 2,
    title: 'Nokia 6.1',
    description: 'Nokia 6.1 (2018) (4GB + 64GB, Blue-Gold)',
    color: 'Black',
    price: '349',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/4162gKVpZLL._AC_US160_FMwebp_QL70_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81BosCxOwxL._SY741_.jpg'
  }, {
    id: 3,
    title: 'Vivo V9 ',
    description: 'Vivo V9 (19:9 FullView Display, Pearl Black - Gold)',
    color: 'Black',
    price: '300',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/410054Aq38L._AC_US160_FMwebp_QL70_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71IqMfSx7vL._SX679_.jpg'
  }, {
    id: 4,
    title: 'Nokia 7 Plus',
    description: 'Nokia 7 Plus (Black-Copper, 64GB)',
    color: 'Black',
    price: '400',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/517MLIpeMUL._AC_US160_FMwebp_QL70_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/819%2B5t%2BJBCL._SY741_.jpg'
  }, {
    id: 5,
    title: 'Oppo F7',
    description: 'Oppo F7 (Black, 64GB) with Offers',
    color: 'Black',
    price: '560',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/41lw8Ef0ROL._AC_US160_FMwebp_QL70_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/610FDrgmt8L._SY741_.jpg'
  }, {
    id: 6,
    title: 'Apple iPhone SE',
    description: 'Apple iPhone SE (Rose Gold, 32GB)',
    color: 'Rose Gold',
    price: '800',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/51JpGHacdoL._AC_US160_FMwebp_QL70_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/610Xy47BnAL._SY879_.jpg'
  }, {
    id: 7,
    title: 'Samsung Galaxy A6 Plus',
    description: 'Samsung Galaxy A6 Plus (Black, 64GB) with Offers',
    color: 'Black',
    price: '700',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/41KqWQqEqJL._AC_US160_FMwebp_QL70_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71A98pVJ7GL._SY879_.jpg'
  }, {
    id: 8,
    title: 'Honor View 10',
    description: 'Honor View 10 (Navy Blue, 6GB RAM + 128GB',
    color: 'Navy Blue',
    price: '100',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/31lrHeHzzzL._AC_US160_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71kx9PKnjRL._SY879_.jpg'
  }, {
    id: 9,
    title: 'Iphone X',
    description: 'Iphone X',
    color: 'Black',
    price: '1200',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/41wUnHPGFBL._AC_US160_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71iV3lRd8FL._SY879_.jpg'
  }, {
    id: 10,
    title: 'Samsung Galaxy A6 Plus',
    description: 'Samsung Galaxy A6 Plus (Gold, 64GB) with Offers',
    color: 'Black',
    price: '1000',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/41+ZKmB7OwL._AC_US160_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71tPAB8tFHL._SY879_.jpg'
  }, {
    id: 11,
    title: 'Moto Z2 Play',
    description: 'Moto Z2 Play (Lunar Grey, 64GB, 4GB RAM)',
    color: 'Lunar Grey',
    price: '200',
    preview: 'https://images-eu.ssl-images-amazon.com/images/I/41dmEn1RKkL._AC_US160_.jpg',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41dmEn1RKkL.jpg'
  }];

  return phoneList;
}

exports.getPhoneList = getPhoneList;
//# sourceMappingURL=phones-mock.js.map