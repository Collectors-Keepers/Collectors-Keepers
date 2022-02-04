'use strict';
console.log('hi');

let catalogArray =[]; // collection of collections
let collection = document.querySelector('form');
let viewCollection = document.getElementById('button');
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
  console.log(catalogArray);

  let newCollection=new Collection(title, condition, price,pressing,size);
  console.log(catalogArray);
  catalogArray.push(newCollection);
  console.log(catalogArray);
}

function catalogArrayLocalStorage(){
  let stringified = JSON.stringify(catalogArray);
  localStorage.setItem('catalogArrayStorage', stringified);
  console.log(stringified);

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
      let newCollection=new Collection(title, condition, price,pressing,size);
    }
  }
  else{
    catalogArrayLocalStorage();
  }
}

catalogRendering(catalogArray);
function catalogRendering(array){
  localStorageUnpack();
  if(catalogArray.length>0){
    for (let j=0; j < array.length; j++){
      let tr= document.createElement('tr');
      catalogTable.appendChild(tr);
      console.log(catalogArray.length);
      for (let prop in catalogArray[j]){
        let td = document.createElement('td');
        td.textContent = catalogArray[j][prop];
        tr.appendChild(td);
      }
    }
    console.log(catalogArray.length);
  }
  else {
    console.log('errorrrrrr');
  }
}
console.log(catalogArray);
// catalogRendering(catalogArray);
console.log(catalogArray.length);





collection.addEventListener('submit',handleSubmit);
// viewCollection.addEventListener('click', catalogRendering);
