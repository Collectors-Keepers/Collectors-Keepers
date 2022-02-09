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
};

let HardItem = function(title, condition, price, pressing, size){
  this.title=title;
  this.condition=condition;
  this.price=price;
  this.pressing=pressing;
  this.size=size;
};


let jimsMix = new HardItem('Guns n Roses: Appetite for Destruction', 'excellent', 100, '1st', 'LP');
let jimsMix2 = new HardItem('Warrant: Cherry Pie', 'Fair', 30, '1st', 'LP');
let jimsMix3 = new HardItem('The Pogues: Fairy Tale of New York', 'good', 45, '2nd', 'EP');
let jimsMix4 = new HardItem('The Jackson Five: Greatest Hits', 'excellent', 100, '1st', 'LP');
let jimsMix5 = new HardItem ('Rodney Dangerfield: No Respect', 'excellent', .25, 'LP');
jimsArray.push(jimsMix, jimsMix2, jimsMix3, jimsMix4, jimsMix5);

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

