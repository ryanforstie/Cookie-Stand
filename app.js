'use strict';

//1st and Pike Store
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  name: '1st and Pike',
  minCustHr: 23,
  maxCustHr: 65,
  avgCookPerCust: 6.3,
  hourlyCook: [],

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr)) + this.minCustHr;
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookiesPer = Math.floor(this.avgCookPerCust * this.customersPerHour());
      this.hourlyCook.push(cookiesPer);
    }
  },

  cookiesPerDay: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyCook.length; i++) {
      total += this.hourlyCook[i];
    }
    return total;
  },
  render: function() {
    var pikeUl = document.getElementById('pike');
    for(var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.hourlyCook[i] + ' Cookies per hour';
      pikeUl.appendChild(liEl);
    }
    var total = document.getElementById('pike');
    var liEL = document.createElement('li');
    liEL.textContent = 'total: ' + this.cookiesPerDay(total);
    total.appendChild(liEL);
  }
};

pike.customersPerHour();
pike.cookiesPerHour();
pike.render();

//Seatac Airport Store
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seatac = {
  name: 'SeaTac Airport',
  minCustHr: 3,
  maxCustHr: 24,
  avgCookPerCust: 1.2,
  hourlyCook: [],

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr)) + this.minCustHr;
  },

  cookiesPerHour: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var cookiesPer = Math.floor(this.avgCookPerCust * this.customersPerHour());
      this.hourlyCook.push(cookiesPer);
    }
  },

  cookiesPerDay: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyCook.length; i++) {
      total += this.hourlyCook[i];
    }
    return total;
  },
  render: function() {
    var seatacUl = document.getElementById('seatac');
    for(var i = 0; i < storeHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' + this.hourlyCook[i] + ' Cookies per hour';
      seatacUl.appendChild(liEl);
    }
    var total = document.getElementById('seatac');
    var liEL = document.createElement('li');
    liEL.textContent = 'total: ' + this.cookiesPerDay(total);
    total.appendChild(liEL);
  }
};

seatac.customersPerHour();
seatac.cookiesPerHour();
seatac.render();

//Seattle Center Store
var hoursStore = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle = {
  name: 'Seattle Center',
  minCustHr: 11,
  maxCustHr: 38,
  avgCookPerCust: 3.7,
  hourlyCook: [],

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr)) + this.minCustHr;
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hoursStore.length; i++) {
      var cookiesPer = Math.floor(this.avgCookPerCust * this.customersPerHour());
      this.hourlyCook.push(cookiesPer);
    }
  },

  cookiesPerDay: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyCook.length; i++) {
      total += this.hourlyCook[i];
    }
    return total;
  },
  render: function() {
    var seattleUl = document.getElementById('seattle');
    for(var i = 0; i < hoursStore.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursStore[i] + ': ' + this.hourlyCook[i] + ' Cookies per hour';
      seattleUl.appendChild(liEl);
    }
    var total = document.getElementById('seattle');
    var liEL = document.createElement('li');
    liEL.textContent = 'total: ' + this.cookiesPerDay(total);
    total.appendChild(liEL);
  }
};

seattle.customersPerHour();
seattle.cookiesPerHour();
seattle.render();

//Capitol Hill Store
var hoursOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var capitol = {
  name: 'Capitol Hill',
  minCustHr: 20,
  maxCustHr: 38,
  avgCookPerCust: 2.3,
  hourlyCook: [],

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr)) + this.minCustHr;
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hoursOfDay.length; i++) {
      var cookiesPer = Math.floor(this.avgCookPerCust * this.customersPerHour());
      this.hourlyCook.push(cookiesPer);
    }
  },

  cookiesPerDay: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyCook.length; i++) {
      total += this.hourlyCook[i];
    }
    return total;
  },
  render: function() {
    var capitolUl = document.getElementById('capitol');
    for(var i = 0; i < hoursOfDay.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfDay[i] + ': ' + this.hourlyCook[i] + ' Cookies per hour';
      capitolUl.appendChild(liEl);
    }
    var total = document.getElementById('capitol');
    var liEL = document.createElement('li');
    liEL.textContent = 'total: ' + this.cookiesPerDay(total);
    total.appendChild(liEL);
  }
};

capitol.customersPerHour();
capitol.cookiesPerHour();
capitol.render();

//Alki Store
var hoursOfStore = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var alki = {
  name: 'Alki',
  minCustHr: 2,
  maxCustHr: 16,
  avgCookPerCust: 4.6,
  hourlyCook: [],

  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr)) + this.minCustHr;
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hoursOfStore.length; i++) {
      var cookiesPer = Math.floor(this.avgCookPerCust * this.customersPerHour());
      this.hourlyCook.push(cookiesPer);
    }
  },

  cookiesPerDay: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyCook.length; i++) {
      total += this.hourlyCook[i];
    }
    return total;
  },
  render: function() {
    var alkiUl = document.getElementById('alki');
    for(var i = 0; i < hoursOfStore.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfStore[i] + ': ' + this.hourlyCook[i] + ' Cookies per hour';
      alkiUl.appendChild(liEl);
    }
    var total = document.getElementById('alki');
    var liEL = document.createElement('li');
    liEL.textContent = 'total: ' + this.cookiesPerDay(total);
    total.appendChild(liEL);
  }
};

alki.customersPerHour();
alki.cookiesPerHour();
alki.render();
