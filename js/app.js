'use strict';

let catalogArray =[]; // collection of collections
let catalogTable = document.getElementById('catalog-body');
let jimsArray = [];

let Item = function(title, condition, price, pressing, size){
  this.title=title;
  this.condition=condition;
  this.price=price;
  this.pressing=pressing;
  this.size=size;
  catalogArray.push(this);
  // Collection.itemsArray.push(this);
};

let HardItem = function(title, condition, price, pressing, size){
  this.title=title;
  this.condition=condition;
  this.price=price;
  this.pressing=pressing;
  this.size=size;
  // Collection.itemsArray.push(this);
};
// let Collection = function() {
//   this.itemsArray = [];
// };

let jimsMix = new HardItem('The Gogos', 'Excellent', 100, '3rd', 'LP');
let jimsMix2 = new HardItem('The Gogos1', 'Excellent', 100, '3rd', 'LP');
let jimsMix3 = new HardItem('The Gogos2', 'Excellent', 100, '3rd', 'LP');
let jimsMix4 = new HardItem('The Gogos3', 'Excellent', 100, '3rd', 'LP');
jimsArray.push(jimsMix, jimsMix2, jimsMix3, jimsMix4);
console.log(jimsArray);

// do not alter catalogArrayLocalStorage
function catalogArrayLocalStorage(){
  let stringified = JSON.stringify(catalogArray);
  localStorage.setItem('catalogArrayStorage', stringified);
}

function localStorageUnpack(){
  let unpacked = localStorage.getItem('catalogArrayStorage');
  if (unpacked){
    let parsed = JSON.parse(unpacked);
    for (let order of parsed){
      let title = order.title;
      let condition = order.condition;
      let price = order.price;
      let pressing = order.pressing;
      let size = order.size;
      let newItem = new Item(title, condition, price,pressing,size);
    }
  }
}

function catalogRendering(array){
  console.log(array.length);
  if(array.length>0){
    for (let j=0; j < array.length; j++){
      let tr= document.createElement('tr');
      catalogTable.appendChild(tr);
      for (let prop in array[j]){
        let td = document.createElement('td');
        td.textContent = array[j][prop];
        tr.appendChild(td);
      }
    } collectionSeparator();
  }
}

function collectionSeparator() {
  let tr = document.createElement('tr');
  tr.className = 'separator';
  catalogTable.appendChild(tr);
  for (let i = 0; i < 5; i++) {
    let td = document.createElement('td');
    td.textContent = '';
    tr.appendChild(td);
  }
}

