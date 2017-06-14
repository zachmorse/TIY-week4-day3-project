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
      for (var i = 0; i < people.length; i++) {
        makeProfile(people[i]);
      }
      console.log(data.results);
    });
}

customerImport(); // function defined above called here

function makeProfile(data) {
  function createWrapper() {
    var profileBox = document.createElement("div");
    profileBox.classList.add("profileBox");
    dataDisplay.appendChild(profileBox);

    var pic = document.createElement("img");
    pic.src = data.picture.large;
    pic.classList.add("pic");
    profileBox.appendChild(pic);

    var fullName = document.createElement("h2");
    fullName.classList.add("fullName");
    fullName.textContent = data.name.first + " " + data.name.last;
    profileBox.appendChild(fullName);

    var email = document.createElement("h4");
    email.classList.add("email");
    email.textContent = data.email;
    profileBox.appendChild(email);

    var streetAddress = document.createElement("p");
    streetAddress.classList.add("streetAddress");
    streetAddress.textContent = data.location.street;
    profileBox.appendChild(streetAddress);

    var cityAndState = document.createElement("p");
    cityAndState.classList.add("cityAndState");
    cityAndState.textContent =
      data.location.city +
      ", " +
      data.location.state +
      " " +
      data.location.postcode;
    profileBox.appendChild(cityAndState);

    var phoneNum = document.createElement("p");
    phoneNum.classList.add("phoneNum");
    phoneNum.textContent = data.phone;
    profileBox.appendChild(phoneNum);
  }
  createWrapper();
}
