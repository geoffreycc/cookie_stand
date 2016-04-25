// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Pike Place	17	88	5.2
// SeaTac Airport	6	24	1.2
// Southcenter	11	38	1.9
// Bellevue Square	20	48	3.3
// Alki	3	24	2.6
var hours = [10, 11, 12, 1, 2, 3, 4, 5, 6];
var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  getSales: function (minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum)) + minNum);
  }
}

var dayTotal = 0;
var hourlySales = [];
for (var i = 0; i < hours.length; i++) {
  hourlySales[i] = pikePlace.getSales(pikePlace.min, pikePlace.max);
  dayTotal += hourlySales[i];
}
pikePlace.hourly = hourlySales;
pikePlace.dayT = dayTotal;


var seaTac = {
  min: 6,
  max: 24,
  avg: 1.2,
}

// var elem = document.getElementById('lists');  //grab the main tag in html page
// var ulElem = document.createElement('ul');    // creates an unordered list

// for (hour in hours) {
//   var liElem = document.createElement();
//   liElem.textContent = hours[hour];
// }
