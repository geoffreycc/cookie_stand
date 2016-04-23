// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Pike Place	17	88	5.2
// SeaTac Airport	6	24	1.2
// Southcenter	11	38	1.9
// Bellevue Square	20	48	3.3
// Alki	3	24	2.6

var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
}

function getSales(minNu, maxNu){
  return Math.random * (maxNu - minNu) + minNu; //might need to be return Math.floor(Math.random * (maxNu - minNu)) + minNu;
};
