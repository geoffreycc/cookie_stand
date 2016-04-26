var elm = document.getElementById('lists');
var hours = [10, 11, 12, 1, 2, 3, 4, 5, 6];
var pikePlace = {
  name: 'Pike Place',
  min: 17,
  max: 88,
  avg: 5.2,
  hourly:[],
  daily: 0,
  getSales: function(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum)) + minNum);
  },
  totals: function() {
    var hourlySales = [];
    for (var s = 0; s < hours.length; s++) {
      hourlySales[s] = Math.floor(this.getSales(this.min, this.max) * this.avg);
      this.daily += hourlySales[s];
      this.hourly = hourlySales;
    }
  },
  render: function() {
    var ulElm = document.createElement('ul');
    var keys = Object.keys(this); //Not sure if this line is really wanted.
    for (var r = 0; r < hours.length;  r++) {
      var liElm = document.createElement('li');
      liElm.textContent = this[keys[r]];
      ulElm.appendChild(liElm);
    }
    elm.appendChild(ulElm);
  }
}

// var dayTotal = 0;                                                              //Calculates and creates the hourly totals array and the daily total value
// var hourlySales = [];
// for (var i = 0; i < hours.length; i++) {
//   hourlySales[i] = pikePlace.getSales(pikePlace.min, pikePlace.max);
//   dayTotal += hourlySales[i];
// }
// pikePlace.hourly = hourlySales;
// pikePlace.dayT = dayTotal;


var seaTac = {
  name: 'SeaTac Airport',
  min: 6,
  max: 24,
  avg: 1.2,
}

var SouthCenter = {
  name: 'Southcenter',
  min: 11,
  max: 38,
  avg: 1.9,
}

var bellSquare = {
  name: 'Bellevue Square',
  min: 20,
  max: 48,
  avg: 3.3,
}

var alki = {
  name: 'Alki',
  min: 3,
  max: 24,
  avg: 2.6,
}
// var elem = document.getElementById('lists');  //grab the main tag in html page
// var ulElem = document.createElement('ul');    // creates an unordered list

// for (hour in hours) {
//   var liElem = document.createElement();
//   liElem.textContent = hours[hour];
// }
