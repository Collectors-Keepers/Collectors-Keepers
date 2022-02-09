'use strict';
let itemForm = document.querySelector('form');

localStorageUnpack();
function handleSubmit(event){
  event.preventDefault();
  let title= event.target.title.value;
  let condition= event.target.condition.value;
  let price= event.target.price.value;
  let pressing= event.target.pressing.value;
  let size= event.target.size.value;
  let newItem = new Item(title, condition, price,pressing,size);
  itemForm.reset();
  catalogArrayLocalStorage(); // do not move this calling of this function from this line
  alert("Proceed to View Catalog page to see the item you added to your collection.");
}





itemForm.addEventListener('submit',handleSubmit);
