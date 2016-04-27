var elm = document.getElementById('lists');
var hours = ['10am: ', '11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: '];
var stores = ['pikePlace', 'seaTac', 'SouthCenter', 'bellSquare', 'alki']

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
    var hElm = document.createElement('h1');
    var ulElm = document.createElement('ul');
    var lisElm = document.createElement('li');
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
  }
}

var seaTac = {
  name: 'SeaTac Airport',
  min: 6,
  max: 24,
  avg: 1.2,
  daily: 0,
  hourly: [],
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
    var hElm = document.createElement('h1');
    var ulElm = document.createElement('ul');
    var lisElm = document.createElement('li');
    this.totals();
    hElm.textContent = this.name;
    lisElm.textContent = 'Total: ' + this.daily;
    for (var r = 0; r < hours.length; r++) {
      var liElm = document.createElement('li');
      liElm.textContent = hours[r] + this.hourly[r];
      ulElm.appendChild(liElm);
    }
    ulElm.appendChild(lisElm);
    elm.appendChild(hElm);
    elm. appendChild(ulElm);
  }
}

var SouthCenter = {
  name: 'Southcenter',
  min: 11,
  max: 38,
  avg: 1.9,
  daily: 0,
  hourly: [],
  getSales: function(minNum, maxNum) {
    return(Math.floor(Math.random()* (maxNum - minNum)) + minNum);
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
    var hElm = document.createElement('h1');
    var ulElm = document.createElement('ul');
    var lisElm = document.createElement('li');
    this.totals();
    hElm.textContent = this.name;
    lisElm.textContent = 'Total: ' + this.daily;
    for (var r = 0; r < hours.length; r++) {
      var liElm = document.createElement('li');
      liElm.textContent = hours[r] + this.hourly[r];
      ulElm.appendChild(liElm);
    }
    ulElm.appendChild(lisElm);
    elm.appendChild(hElm);
    elm.appendChild(ulElm);
  }
}

var bellSquare = {
  name: 'Bellevue Square',
  min: 20,
  max: 48,
  avg: 3.3,
  daily: 0,
  hourly: [],
  getSales: function(minNum, maxNum) {
    return(Math.floor(Math.random() * (maxNum - minNum)) + minNum);
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
    var hElm = document.createElement('h1');
    var ulElm = document.createElement('ul');
    var lisElm = document.createElement('li');
    this.totals();
    hElm.textContent = this.name;
    lisElm.textContent = 'Total: ' + this.daily;
    for (var r = 0; r < hours.length; r++) {
      var liElm = document.createElement('li');
      liElm.textContent = hours[r] + this.hourly[r];
      ulElm.appendChild(liElm);
    }
    ulElm.appendChild(lisElm);
    elm.appendChild(hElm);
    elm.appendChild(ulElm);
  }
}

var alki = {
  name: 'Alki',
  min: 3,
  max: 24,
  avg: 2.6,
  daily: 0,
  hourly: [],
  getSales: function(minNum, maxNum) {
    return(Math.floor(Math.random() * (maxNum - minNum)) + minNum);
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
    var hElm = document.createElement('h1');
    var ulElm = document.createElement('ul');
    var lisElm = document.createElement('li');
    this.totals();
    hElm.textContent = this.name;
    lisElm.textContent = 'Total: ' + this.daily;
    for (var r = 0; r < hours.length; r++) {
      var liElm = document.createElement('li');
      liElm.textContent = hours[r] + this.hourly[r];
      ulElm.appendChild(liElm);
    }
    ulElm.appendChild(lisElm);
    elm.appendChild(hElm);
    elm.appendChild(ulElm);
  }
}

pikePlace.render();
seaTac.render();
SouthCenter.render();
bellSquare.render();
alki.render();
