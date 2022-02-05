'use strict';
// upon clearing local storage, array values for catalogArray will be added once new collections are added to catalog. This results in all of the previous local storage being readded upon adding one collection after clearing local storage. This is currently fixed by reloading the page after clearing local storage.
let itemForm = document.querySelector('form');

localStorageUnpack();
function handleSubmit(event){
  event.preventDefault();
  let title= event.target.title.value;
  let condition= event.target.condition.value;
  let price= event.target.price.value;
  let pressing= event.target.pressing.value;
  let size= event.target.size.value;
  // localStorageUnpack();
  let newItem = new Item(title, condition, price,pressing,size);
  itemForm.reset();
  // localStorageUnpack();
  // catalogArray.push(newCollection);
  catalogArrayLocalStorage(); // do not move this calling of this function from this line
  console.log(Collection.itemsArray);
}





itemForm.addEventListener('submit',handleSubmit);
