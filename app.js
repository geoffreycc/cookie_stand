var infoSec = document.getElementById('storeInfo');
var hoursOpen = ['10 am: ', '11 am: ','12 pm: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6pm: '];
var storeArr = [];

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
  // var storeNameTr = document.createElement('tr'); //tr
  // var ulElm = document.createElement('td'); //td
  var lisElm = document.createElement('th'); //tr
  this.totals(this.getSalesNums, this.maxCust, this.minCust, this.avgCookie, hoursOpen);
  // storeNameTr.textContent = this.storeName;
  // infoSec.appendChild(storeNameTr); //ulElm
  storeArr.push(this);
  storeTitle(this.storeName, this.hourlySales, this.dailyTotal);
  // lisElm.textContent = 'Total: ' + this.dailyTotal;
  // for (var r = 0; r < hoursOpen.length; r++) {
  //   var liElm = document.createElement('td'); //tr
  //   liElm.textContent = this.hourlySales[r];  //hoursOpen[r] +
  //   ulElm.appendChild(liElm);
  // }
  // ulElm.appendChild(lisElm);
  // infoSec.appendChild(ulElm);
};

// function salesData(data){
//   for (var d = 0; d < hoursOpen.length; r++) {
//     var tdElm = document.createElement('td');
//     tdElm.textContent = data;
//     storeNameTr.appendChild(tdElm);
//   }
// }

function storeTitle(nameS, data, dayTotals){
  var storeNameTr = document.createElement('tr');
  var totalTh = document.createElement('th');
  storeNameTr.textContent = nameS;
  infoSec.appendChild(storeNameTr);
  var tdElm = document.createElement('td');
  for (var d = 0; d < hoursOpen.length; d++) {
    tdElm.textContent = data;
    storeNameTr.appendChild(tdElm);
  }
  totalTh.textContent = dayTotals;
  storeNameTr.appendChild(totalTh);
}

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
