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
  console.log(this.array);
};



function handleSubmit(event){
  event.preventDefault();
  let title= event.target.title.value;
  let condition= event.target.condition.value;
  let price= event.target.price.value;
  let pressing= event.target.pressing.value;
  let size= event.target.size.value;


  let newCollection=new Collection(title, condition, price,pressing,size);
  // catalogArray.push(newCollection);
  catalogArrayLocalStorage();
  catalogRendering(catalogArray);
}

function catalogArrayLocalStorage(){
  let stringified = JSON.stringify(catalogArray);
  localStorage.setItem('catalogArrayStorage', stringified);
}

function localStorageUnpack(){
  let unpacked = localStorage.getItem('catalogArrayStorage');
  let parsed = JSON.parse(unpacked);
  catalogArray= parsed;
  console.log(parsed);
}
// localStorageUnpack();
function catalogRendering(array){
  localStorageUnpack();
  for (let j=0; j < array.length; j++){
    let tr= document.createElement('tr');
    catalogTable.appendChild(tr);
    for (let prop in catalogArray[j]){
      let td = document.createElement('td');
      td.textContent = catalogArray[j][prop];

      tr.appendChild(td);
    }

  }
}
console.log(catalogArray);
// catalogRendering(catalogArray);





collection.addEventListener('submit',handleSubmit);
