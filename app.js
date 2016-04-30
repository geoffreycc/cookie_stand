var elm = document.getElementById('lists');
var hours = ['10am: ', '11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: '];
var stores = ['pikePlace', 'seaTac', 'SouthCenter', 'bellSquare', 'alki'];

function Store(name, min, max, avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
}
Store.prototype.hourly = [];
Store.prototype.daily = 0;
Store.prototype.getS = function(minNum, maxNum){
  return(Math.random() * (maxNum - minNum)) + minNum;
};
Store.prototype.totals = function(rand, maxN, minN, avgC, hour) {
  var hourlySales = [];
  for(var s = 0; s < hour.length; s++) {
    hourlySales[s] = Math.floor(rand(minN, maxN) * avgC);
    this.daily += hourlySales[s];
    this.hourly = hourlySales;
  }
};
Store.prototype.render = function() {
  var hElm = document.createElement('h1');
  var ulElm = document.createElement('ul');
  var lisElm = document.createElement('li');
  this.totals(this.getS, this.max, this.min, this.avg, hours);
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
};

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac Airport', 6, 24, 1.2);
var southCenter = new Store('Southcenter', 11, 38, 1.9);
var bellSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

pikePlace.render();
seaTac.render();
southCenter.render();
bellSquare.render();
alki.render();
