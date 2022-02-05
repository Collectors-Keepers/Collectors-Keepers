'use strict';

let catalogArray =[]; // collection of collections
// let collection = document.querySelector('form');
let catalogTable = document.getElementById('catalog-body');
let viewCollection = document.getElementById('collection-display');

let Collection = function(title, condition, price, pressing, size){
  this.title=title;
  this.condition=condition;
  this.price=price;
  this.pressing=pressing;
  this.size=size;
  catalogArray.push(this);
};



// function handleSubmit(event){
//   event.preventDefault();
//   let title= event.target.title.value;
//   let condition= event.target.condition.value;
//   let price= event.target.price.value;
//   let pressing= event.target.pressing.value;
//   let size= event.target.size.value;
//   console.log(catalogArray);

//   let newCollection=new Collection(title, condition, price,pressing,size);
//   console.log(catalogArray);
//   // catalogArray.push(newCollection);
//   console.log(catalogArray);
//   catalogArrayLocalStorage(); // do not move this calling of this function from this line
// }
// do not alter catalogArrayLocalStorage
function catalogArrayLocalStorage(){
  // localStorageUnpack();
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
      let newCollection=new Collection(title, condition, price,pressing,size);
    }
  }
  // else{

  // }
}
function catalogRendering(array){
  console.log(array.length);
  if(array.length>0){
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
}

// function handleClick(event){
//   if(event.target.id=== 'button'){
//     console.log(event.target.id);
//     localStorageUnpack();
//     console.log(catalogArray.length);
//     catalogRendering(catalogArray);
//     console.log(event.target.id);
//   }
// }



// collection.addEventListener('submit',handleSubmit);
// viewCollection.addEventListener('click', handleClick);
