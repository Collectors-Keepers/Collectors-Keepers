'use strict';


let catalogArray =[]; // collection of collections
let collection = document.querySelector('form');
let previewCollection=[]; // array to hold collection so user can view before posting
let catalogTable = document.getElementById('catalog-body');

let Collection = function(title, condition, price, pressing, size){
  this.title=title;
  this.condition=condition;
  this.price=price;
  this.pressing=pressing;
  this.size=size;
  catalogArray.push(this);
};



function handleSubmit(event){
  event.preventDefault();
  let title= event.target.title.value;
  let condition= event.target.condition.value;
  let price= event.target.price.value;
  let pressing= event.target.pressing.value;
  let size= event.target.size.value;


  let newCollection=new Collection(title, condition, price,pressing,size);
  console.log(newCollection);
  //catalogArray.push(newCollection);
  catalogArrayLocalStorage();
  console.log(catalogArray);
}

function catalogArrayLocalStorage(){
  let stringified = JSON.stringify(catalogArray);
  localStorage.setItem('catalogArrayStorage', stringified);
}

function localStorageUnpack(){
  let unpacked = localStorage.getItem('catalogArrayStorage');
  let parsed = JSON.parse(unpacked);
  catalogArray.push(parsed);
}

function catalogRendering(array){
  localStorageUnpack();
  for (let j=0; j < array.length; j++){
    let tr= document.createElement('tr');
    catalogTable.appendChild(tr);
    let td = document.createElement('td');
    td.textContent = array;
    tr.appendChild(td);
    console.log(catalogArray.length);

  }
}
catalogRendering(catalogArray);
console.log(catalogArray);




collection.addEventListener('submit',handleSubmit);
