'use strict';


// Favorite Seattle beaches

//  var pike = {
//    name: '1st and Pike',
//    minCustPerHr: 23,
//    render: function(){
//      var alkiUL = document.getElementById('alki');
//      // This will render the seagull data array to the DOM
//      // We'll need a 'for' loop to iterate over the array
//      for(var i = 0; i < this.seagullCount.length; i++){
//        // There are three parts to this process:
//        // 1. Create an element
//        var liEl = document.createElement('li');
//        // 2. Give it content
//        liEl.textContent = days[i] + ': ' + this.seagullCount[i];
//        // 3. Append it to a certain place in the DOM
//        // parentElement.appendChild(childElement)
//        alkiUL.appendChild(liEl);
//      }
//    }
//  };
//
//  alki.render();
//
// var goldenGarden = {
//   name: 'Golden Garden',
//   seagullCount: [3,5,4,7,5,9,8],
//   render: function(){
//     var golden = document.getElementById('gg');
//     // This will render the seagull data array to the DOM
//     // We'll need a 'for' loop to iterate over the array
//     for(var i = 0; i < this.seagullCount.length; i++){
//       // There are three parts to this process:
//       // 1. Create an element
//       var liEl = document.createElement('li');
//       // 2. Give it content
//       liEl.textContent = days[i] + ': ' + this.seagullCount[i];
//       // 3. Append it to a certain place in the DOM
//       // parentElement.appendChild(childElement)
//       golden.appendChild(liEl);
//     }
//   }
// };
//
// goldenGarden.render();
//
// var edmondsBeach = {
//   name: 'edmondsBeach',
//   seagullCount: [52,46,76,87,365,13,38],
//   render: function(){
//     var eddie = document.getElementById('edmonds');
//     // This will render the seagull data array to the DOM
//     // We'll need a 'for' loop to iterate over the array
//     for(var i = 0; i < this.seagullCount.length; i++){
//       // There are three parts to this process:
//       // 1. Create an element
//       var liEl = document.createElement('li');
//       // 2. Give it content
//       liEl.textContent = days[i] + ': ' + this.seagullCount[i];
//       // 3. Append it to a certain place in the DOM
//       // parentElement.appendChild(childElement)
//       eddie.appendChild(liEl);
//     }
//   }
// };
//
// edmondsBeach.render();
//



// var pike = {
//   minCust: 23,
//   maxCust: 65,
//   avgCook: 6.3,
//
//
//   randomCookies: function(min, max) {
//     return Math.floor(Math.random() * ((pike.maxCust - pike.minCust) + 1) * pike.avgCook);
//   },
//   randomPeople: function(min, max) {
//     return Math.floor(Math.random() * (pike.maxCust - pike.minCust) + 1);
//   }
// };
//
//
// console.log('average cookies', pike.randomCookies(pike.minCust, pike.maxCust));
//
// console.log('average people', pike.randomPeople(pike.minCust, pike.maxCust));
//


// var pike = {
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
// //   avgCookiesPerCust: 6.3,
//   customersEachHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
// //   cookiesEachHour: [],
// //   totalCookiesPerDay: 0;
//   (methods to calculate customer and cookie totals)
//   (method to calculate customers per hour)
// }


var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  name: '1st and Pike',
  minCustHr: 23,
  maxCustHr: 65,
  avgCookPerCust: 6.3,
  hourlyCook: [],
  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr)) + this.minCustHr
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
    var liEl = document.createElement('li');
    liEl.textContent = 'total: ' + this.cookiesPerDay(total);
    total.appendChild(liEl);
  }
};

pike.customersPerHour();
pike.cookiesPerHour();
pike.render();
