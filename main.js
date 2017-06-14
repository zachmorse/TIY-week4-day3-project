// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

var dataDisplay = document.querySelector(".customers");

function customerImport() {
  "use strict";
  fetch("https://randomuser.me/api/?results=12") // this is a PROMISE, a placeholder for future data
    .then(function(dataFromAPI) {
      return dataFromAPI.json();
    })
    .then(function(data) {
      var people = data.results;
      dataDisplay.innerHTML = people[0].name;
      console.log(data.results.gender);
    });
}

customerImport();

dataDisplay.innerHTML = "WAITING";

// (function() {
//   "use strict";
//   fetch("https://randomuser.me/api/?results=12");
//   // Your Code Goes Here
// })();
