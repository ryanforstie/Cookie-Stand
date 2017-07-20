'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var myStores = [];
var cookiesTable = document.getElementById('stores');
var storeForm = document.getElementById('store-form');

//Stores in Constructor notation
function StoreLocation(storeName, minCustomersEachHour, maxCustomersEachHour, avgCookiesPerCustomers) {
  this.storeName = storeName;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.avgCookiesPerCustomers = avgCookiesPerCustomers;

  this.customersEachHour = [];
  this.calcCustomersEachHour = function() {
    for(var i = 0; i < storeHours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersEachHour - this.minCustomersEachHour + 1)) + this.minCustomersEachHour);
    }
  };

  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < storeHours.length; i++) {
      this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomers));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
    }
  };

  this.totalCookiesPerDay = 0;
  myStores.push(this);

  this.render = function() {
    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);

    for(var i = 0; i < storeHours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdEl);
    cookiesTable.appendChild(trEl);
  };
  this.calcCookiesSoldEachHour();
};

//All store data
new StoreLocation('Pike Place', 23, 65, 6.3);
new StoreLocation('SeaTac Airport', 3, 24, 1.2);
new StoreLocation('Seattle Center', 11, 38, 3.7);
new StoreLocation('Capitol Hill', 20, 38, 2.3);
new StoreLocation('Alki', 2, 16, 4.6);

//Table header
function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < storeHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  cookiesTable.appendChild(trEl);
}

function cookieRows(){
  for(var i = 0; i < myStores.length; i++) {
    myStores[i].render();
  }
}

makeHeaderRow();
cookieRows();




// 'use strict';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global variables for DOM access and such
// var storeList = document.getElementById('store-list');
// var storeForm = document.getElementById('store-form');
// var clearStoreList = document.getElementById('clear-store-list');
// var allComments = [];
//
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Here's the constructor for the individual comments
// var StoreLocation = function(userName, text) {
//   this.userName = userName;
//   this.text = text;
// };
//
// Comment.prototype.render = function() {
//   var liEl = document.createElement('li');
//   liEl.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
//   return liEl;
// };



// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS

// This function gots through the array of comments and calls the render() method on each one
// function renderAllComments() {
//   chatList.innerHTML = '';
//
//   for (var i = 0; i < allComments.length; i++) {
//     chatList.appendChild(allComments[i].render());
//   }
//
//   // These lines could be used to replace the 'for' loop above
//   // allComments.forEach(function(unicorn) {
//   //   chatList.appendChild(unicorn.render());
//   // });
//
// };
//
// // This function is the event handler for the submission of comments
// function handleCommentSubmit(event) {
//   // console.log('log of the event object', event);
//   // console.log('log of the event.target', event.target);
//   // console.log('log of the event.target.says', event.target.says);
//   console.log('log of the event.target.who.value', event.target.who.value);
//
//   event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event
//
// // Validation to prevent empty form fields
//   if (!event.target.says.value || !event.target.who.value) {
//     return alert('Fields cannot be empty!');
//   }
//
//   var commenter = event.target.who.value;
//   var remark = event.target.says.value;
//
//   if (commenter === 'Sam') {
//     remark = '@$^#$%$^@#$%@';
//   }
//
//   if (commenter === 'Kayla') {
//     remark = remark.toUpperCase();
//   }
//
//   if (commenter === 'Otis') {
//     remark = '&#9835; Shama-lama-ding-dong &#9835;';
//   }
//
//   var newComment = new Comment(commenter, remark);
//
//   // console.log('Comment by ' + event.target.who.value + ' at ' + Date());
//
//   event.target.who.value = null;
//   event.target.says.value = null;
//
//   allComments.push(newComment);
//   renderAllComments();
// };
//
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Event listener for comment submission form
// chatForm.addEventListener('submit', handleCommentSubmit);
//
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Event listener for the 'Clear all comments' button
// clearChatList.addEventListener('click', function() {
//   chatList.innerHTML = '';
//   console.log('You just cleared the chat list!');
//   allComments = [];
// });


function submitForm(event){
 event.preventDefault();
 var name = event.target.name.value;
 var minCust = event.target.minCust.value;
 var maxCust = event.target.maxCust.value;
 var avgCook = event.target.avgCook.value;
 if(name === '' || minCust === '' || maxCust === '' || avgCook === ''){
   alert('Boxes need to have content!');
   return;
 }
 new StoreLocation(name, minCust, maxCust, avgCook);
 myStores[myStores.length - 1].render();
}
storeForm.addEventListener('submit', submitForm);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
/* Here is where we would put everything else that we want to execute on page load. This is where you would usually find function calls, but since this app is all driven ansynchronously by user interaction, the first JS that will execute is waiting inside the event listeners. */




// function storesInDom() {
//   var storelist = document.getElementById('id');
//   for(var i = 0; i < myStores.length; i++){
//     var liEL = document.createElement('li');
//     liEL.textContent = myStores[i].location;
//     storelist.appendChild(liEL);
//   }
// };


// //Alki Store
// var hoursOfStore = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//
// var alki = {
//   name: 'Alki',
//   minCustHr: 2,
//   maxCustHr: 16,
//   avgCookPerCust: 4.6,
//   hourlyCook: [],
//
//   customersPerHour: function(min, max) {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr)) + this.minCustHr;
//   },
//
//   cookiesPerHour: function() {
//     for (var i = 0; i < hoursOfStore.length; i++) {
//       var cookiesPer = Math.floor(this.avgCookPerCust * this.customersPerHour());
//       this.hourlyCook.push(cookiesPer);
//     }
//   },
//
//   cookiesPerDay: function() {
//     var total = 0;
//     for (var i = 0; i < this.hourlyCook.length; i++) {
//       total += this.hourlyCook[i];
//     }
//     return total;
//   },
//   render: function() {
//     var alkiUl = document.getElementById('alki');
//     for(var i = 0; i < hoursOfStore.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOfStore[i] + ': ' + this.hourlyCook[i] + ' Cookies per hour';
//       alkiUl.appendChild(liEl);
//     }
//     var total = document.getElementById('alki');
//     var liEL = document.createElement('li');
//     liEL.textContent = 'total: ' + this.cookiesPerDay(total);
//     total.appendChild(liEL);
//   }
// };
//
// alki.customersPerHour();
// alki.cookiesPerHour();
// alki.render();
