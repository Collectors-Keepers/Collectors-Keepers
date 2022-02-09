'use strict';

// array to store user profiles
let userProfile = [];
// const for event listener
const profile = document.querySelector('span');

// constructor to create users
function User(name,email) {
  this.name = name;
  this.email = email;
  //userProfile.push(this);
}

// handler to create new user profiles and store in local storage
function profileHandler(event) {
  event.preventDefault();
  let userName = event.target.name.value;
  let userEmail = event.target.email.value;
  let newUser = new User(userName,userEmail);
  //console.log('new user',newUser);
  userProfile.push(newUser);
  storeProfile(userProfile);
}

// get user info from local storage
function getProfile() {
  let getUser = localStorage.getItem('user');
  // if user info already exists, get from localStorage
  if (getUser) {
    let showUser = JSON.parse(getUser);
    // re-instantiate objects in User constructor function
    for (let order of showUser) {
      let name = order.name;
      let email = order.email;
      let newUser = new User(name,email);
      // push re-instantiated objects into array to get user profiles
      userProfile.push(newUser);
      //console.log('out of storage',newUser);
    }
  }
}
//console.log(userProfile);

// store user info in local storage
function storeProfile(userProfile) {
  let storeUser = JSON.stringify(userProfile);
  // KEY for localStorage is 'user'
  localStorage.setItem('user',storeUser);
}

// invoking function to check if anything is saved in localStorage
getProfile();
// event listener for new user profiles being created on home page
profile.addEventListener('submit',profileHandler);
