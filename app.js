var elm = document.getElementById('lists');
var hours = ['10am: ', '11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: '];
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
      // .push necessary here?
      this.daily += hourlySales[s];
      console.log(this.daily);
      this.hourly = hourlySales;
      console.log(this.hourly);
    }
  },
  render: function() {
    var hElm = document.createElement('h1');
    var ulElm = document.createElement('ul');
    var lisElm = document.createElement('li');  //was lisElm was a p tag
    this.totals();
    hElm.textContent = this.name;
    lisElm.textContent = 'Total: ' + this.daily;
    for (var r = 0; r < hours.length;  r++) {
      var liElm = document.createElement('li');
      liElm.textContent = hours[r] + this.hourly[r];
      ulElm.appendChild(liElm);
    }
    ulElm.appendChild(lisElm);
    elm.appendChild(hElm);
    elm.appendChild(ulElm);
    // elm.appendChild(pElm);
  }
}
pikePlace.render();
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
