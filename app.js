'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var myStores = [];
var cookiesTable = document.getElementById('stores');

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
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
    }

    var tdEl = document.createElement('td');
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
    var thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }

  var thEl = document.createElement('th');
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
