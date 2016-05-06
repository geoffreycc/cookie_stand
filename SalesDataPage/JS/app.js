var hoursOpen = ['10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm'];
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
  this.totals(this.getSalesNums, this.maxCust, this.minCust, this.avgCookie, hoursOpen);
  storeArr.push(this);
  storeTitle(this.storeName, this.hourlySales, this.dailyTotal, hoursOpen);
};

function hoursTop(hours) {
  var topR = document.getElementById('hoursRow');
  var totalTopTh = document.createElement('th');
  for (var h = 0; h < hours.length; h++) {
    var hourTh = document.createElement('th');
    hourTh.textContent = hoursOpen[h];
    topR.appendChild(hourTh);
  }
  totalTopTh.textContent = 'Total';
  topR.appendChild(totalTopTh);
}

function storeTitle(nameS, data, dayTotals, hours) {
  var storeNameTr = document.createElement('tr');
  var totalTh = document.createElement('th');
  var tableB = document.getElementById('storeInfo');
  var space = / /g;
  storeNameTr.textContent = nameS;
  var noSpaceName = nameS.replace(space, '');
  storeNameTr.id = noSpaceName.toLowerCase();
  tableB.appendChild(storeNameTr);
  for (var d = 0; d < hours.length; d++) {
    var tdElm = document.createElement('td');
    tdElm.textContent = data[d];
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

hoursTop(hoursOpen);
pikePlace.render();
seaTac.render();
southCenter.render();
bellSquare.render();
alki.render();

var formEl = document.getElementById('newStoreInfo');
//
// formEl.addEventListener('submit', function(event) {
//   event.preventDefault();
//   var nameStore = event.target.storeN.value;
//   var miniC = parseInt(event.target.minC.value);
//   var maxiC = parseInt(event.target.maxC.value);
//   var avgCook = parseFloat(event.target.avgCook.value);
//   var storeNew = new Store(nameStore, miniC, maxiC, avgCook);
//   storeNew.render();
//   // }
// });
//
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var nameStore = event.target.storeN.value;
  var miniC = parseInt(event.target.minC.value);
  var maxiC = parseInt(event.target.maxC.value);
  var avgCook = parseFloat(event.target.avgCook.value);
  var space = / /g;
  var noSpaceName = nameStore.replace(space, '');
  if (document.getElementById(noSpaceName) === null) {
    console.log('Okay!');
    var storeNew = new Store(nameStore, miniC, maxiC, avgCook);
    storeNew.render();
  } else {
    console.log('Already exists!');
  }

});
