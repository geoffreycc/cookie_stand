var infoSec = document.getElementById('storeInfo');
var hoursOpen = ['10am: ', '11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: '];

function Store(storeName, minCust, maxCust, avgCookie){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
}
Store.prototype.hourlySales = [];
Store.prototype.dailyTotal = 0;
Store.prototype.getSalesNums = function(minNum, maxNum){
  return(Math.random() * (maxNum - minNum)) + minNum;
};
Store.prototype.totals = function(rand, maxN, minN, avgC, hour) {
  var hourlySale = [];
  for(var s = 0; s < hour.length; s++) {
    hourlySale[s] = Math.floor(rand(minN, maxN) * avgC);
    this.dailyTotal += hourlySale[s];
    this.hourlySales = hourlySale;
  }
};
Store.prototype.render = function() {
  var storeNameH1 = document.createElement('h1');
  var ulElm = document.createElement('ul');
  var lisElm = document.createElement('li');
  this.totals(this.getSalesNums, this.maxCust, this.minCust, this.avgCookie, hoursOpen);
  storeNameH1.textContent = this.storeName;
  lisElm.textContent = 'Total: ' + this.dailyTotal;
  for (var r = 0; r < hoursOpen.length; r++) {
    var liElm = document.createElement('li');
    liElm.textContent = hoursOpen[r] + this.hourlySales[r];
    ulElm.appendChild(liElm);
  }
  ulElm.appendChild(lisElm);
  infoSec.appendChild(storeNameH1);
  infoSec.appendChild(ulElm);
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
