// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Pike Place	17	88	5.2
// SeaTac Airport	6	24	1.2
// Southcenter	11	38	1.9
// Bellevue Square	20	48	3.3
// Alki	3	24	2.6


// Here's an example of rendering to the DOM using nested for loops
// You will want to consider the structure and apply this to your render method for each object literal today.
//
// This is a more advanced for loop inside for loop for nested lists
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// var weeks = [1, 2, 3, 4];
// var sectionEl = document.getElementById('myList');
// var ulEl = document.createElement('ul');
//
// for(month in months) {
//   var liEl = document.createElement('li');
//   liEl.textContent = months[month];
//   var nestedUlEl = document.createElement('ul');
//
//   for(week in weeks) {
//     var nestedLiEl = document.createElement('li');
//     nestedLiEl.textContent = weeks[week];
//     nestedUlEl.appendChild(nestedLiEl);
//   }
//
//   liEl.appendChild(nestedUlEl);
//   ulEl.appendChild(liEl);
// }
//
// sectionEl.appendChild(ulEl);


var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
}

function getSales(minNu, maxNu) {
  return Math.floor(Math.random() * (maxNu - minNu)) + minNu;
  
