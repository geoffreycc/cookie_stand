var hoursOpen = ['10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm'];
var storeArr = [];

function Store(storeName, minCust, maxCust, avgCookie){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  storeArr.push(this);
}
Store.prototype.hourlySales = [];
Store.prototype.dailyTotal = 0;
Store.prototype.getSalesNums = function(minNum, maxNum){
  return(Math.random() * (maxNum - minNum)) + minNum;
};
Store.prototype.totals = function(rand, maxN, minN, avgC, hour, hourlyS, dayTotal) {
  for(var s = 0; s < hour.length; s++) {
    this.hourlySales[s] = Math.floor(rand(minN, maxN) * avgC);
    this.dailyTotal += this.hourlySales[s];
  }
};
Store.prototype.render = function() {
  this.totals(this.getSalesNums, this.maxCust, this.minCust, this.avgCookie, hoursOpen, this.hourlySales, this.dailyTotal);
  storeTitle(this.storeName, this.hourlySales, this.dailyTotal, hoursOpen);
};

function storeTitle(nameS, hourlyS, dayTotal, hours) {
  var storeNameTr = document.createElement('tr');
  var totalTh = document.createElement('th');
  var tableB = document.getElementById('storeInfo');
  storeNameTr.textContent = nameS;
  tableB.appendChild(storeNameTr);
  for (var d = 0; d < hours.length; d++) {
    var space = / /g;
    var tdElm = document.createElement('td');
    var noSpace = nameS.replace(space, '');
    var noSpaceName = noSpace.toLowerCase();
    storeNameTr.id = noSpaceName;
    tdElm.textContent = hourlyS[d];
    storeNameTr.appendChild(tdElm);
  }
  totalTh.textContent = dayTotal;
  storeNameTr.appendChild(totalTh);
}

var TopRowRender = (function () {
  var topR = document.getElementById('hoursRow');
  var totalTopTh = document.createElement('th');
  var storeNameTh = document.createElement('th');
  storeNameTh.textContent = 'Store Name';
  topR.appendChild(storeNameTh);
  for (var h = 0; h < hoursOpen.length; h++) {
    var hourTh = document.createElement('th');
    hourTh.textContent = hoursOpen[h];
    topR.appendChild(hourTh);
  }
  totalTopTh.textContent = 'Total';
  topR.appendChild(totalTopTh);
  var pikePlace = new Store('Pike Place', 17, 88, 5.2);  //moved into iffy
  var seaTac = new Store('SeaTac Airport', 6, 24, 1.2);
  var southCenter = new Store('Southcenter', 11, 38, 1.9);
  var bellSquare = new Store('Bellevue Square', 20, 48, 3.3);
  var alki = new Store('Alki', 3, 24, 2.6);
  for (store in storeArr) {
    storeArr[store].render();
  }
}());

var space = / /g;
function update(obj) {
  var nameStore = event.target.storeN.value;
  var noSpace = nameStore.replace(space, '');
  var noSpaceName = noSpace.toLowerCase();
  var parentRow = document.getElementById(noSpaceName);
  obj.totals(obj.getSalesNums, obj.maxCust, obj.minCust, obj.avgCookie, hoursOpen);
  for (var h = 0; h < hoursOpen.length; h++) {
    parentRow.children[h].textContent = obj.hourlySales[h];
  }
  parentRow.lastChild.textContent = obj.dailyTotal;
}

var formEl = document.getElementById('newStoreInfo');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var nameStore = event.target.storeN.value;
  var miniC = parseInt(event.target.minC.value);
  var maxiC = parseInt(event.target.maxC.value);
  var avgCook = parseFloat(event.target.avgCook.value);
  var noSpace = nameStore.replace(space, '');
  var noSpaceName = noSpace.toLowerCase();
  var storeNew = new Store(nameStore, miniC, maxiC, avgCook);
  if (document.getElementById(noSpaceName) === null) {
    storeNew.render();
  } else {
    var updateStore = new Store(nameStore, miniC, maxiC, avgCook);
    update(updateStore);
  }
});
