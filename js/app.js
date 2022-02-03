'use strict';


let catalogArray =[]; // collection of collections
let collection = document.querySelector('form');
let previewCollection=[]; // array to hold collection so user can view before posting
let catalogTable = document.getElementById('display-collections');

let Collection = function(title, condition, price, pressing, size){
  this.title=title;
  this.condition=condition;
  this.price=price;
  this.pressing=pressing;
  this.size=size;
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
  catalogArray.push(newCollection);
  catalogArraylocalStorage();
  console.log(catalogArray);
}

function catalogArraylocalStorage(){
  let stringified = JSON.stringify(catalogArray);
  localStorage.setItem('catalogArrayStorage', stringified);
}

function localStorageUnpack(){
  let unpacked = localStorage.getItem('catalogArrayStorage');
  let parsed = JSON.parse(unpacked);
  console.log(parsed);
}
localStorageUnpack();








collection.addEventListener('submit',handleSubmit);
