var cart = []


function Robot(model, job, price){
  this.model = model;
  this.job = job;
  this.price = price;
}

var myRobots = [];

myRobots.push(new Robot("Jeeves","Household Helper", "$6995.00"));
myRobots.push(new Robot("Greenie","Outdoor Genie", "$3995.00"));
myRobots.push(new Robot("Al","Your Pal", "$4995.00"));
myRobots.push(new Robot("Spike","Guardian", "$9995.00"));
myRobots.push(new Robot("Champ","Plays Sports", "$4995.00"));

for(var counter = 0; counter < myRobots.length; ++counter){
	/*console.log(myRobots[counter]);*/
}

function addJeeves(model, job, price){
  var jeeves = myRobots[0];
  cart.push(jeeves);
  console.log(cart);
}

function addGreenie(model, job, price){
  var greenie = myRobots[1];
  cart.push(greenie);
  console.log(cart);
}

function addAl(model, job, price){
  var al = myRobots[2];
  cart.push(al);
  console.log(cart);
}

function addSpike(model, job, price){
  var spike = myRobots[3];
  cart.push(spike);
  console.log(cart);
}

function addChamp(model, job, price){
  var champ = myRobots[4];
  cart.push(champ);
  console.log(cart);
}

function addToCart(){
  sessionStorage.setItem('myArray', cart);
  window.location.assign('RobocityCart.html');
}

function pullArray(){
    var myArray = sessionStorage.getItem('myArray');
    console.log(myArray);
}

function addToTable() {
  /*document.getElementById("cartTable").innerHTML = null;*/
  for (var counter = 0; counter < cart.length; ++counter) {
    console.log(cart[counter].model);
    var tableRow = document.createElement("tr");
    var tableData = document.createElement("td");
    var text = document.createTextNode(cart[counter].model);
    tableData.appendChild(text);
    tableRow.appendChild(tableData);
    var text = document.createTextNode(cart[counter].job);
    var tableData = document.createElement("td");
    tableData.appendChild(text);
    tableRow.appendChild(tableData);
    var text = document.createTextNode(cart[counter].price);
    var tableData = document.createElement("td");
    tableData.appendChild(text);
    tableRow.appendChild(tableData);
document.getElementById("artTable").appendChild(tableRow);
  }
}
