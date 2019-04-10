//Constants
const calculateBtn = document.querySelector(".calculateBtn");
let billAmount = document.querySelector(".bill");
let serviceQuality = document.querySelector(".sQOptions");
let numOfPeople = document.querySelector(".numOfPpl");
let result = document.querySelector('.result');
let resultTwo = document.querySelector('.resultTwo');
let totalHeader = document.createElement('h2');
let totalPersonHeader = document.createElement("h2");
let totalText = document.createElement('p');
let tPPText = document.createElement('p');

//Tip Calculator Constructor
function TipCalculator(billTotal, serviceQuality, numOfPeople){
    this.billTotal = billTotal;
    this.serviceQuality = serviceQuality;
    this.numOfPeople = numOfPeople;

    let billWithTax = null;
    this.calculateTip = function(){
      billWithTax = ((billTotal) * (serviceQuality)) +
      parseFloat(billTotal);
      parseFloat(billWithTax);
      return billWithTax.toFixed(2);
    }
    this.calculatePerPerson = function(){
      let amountPerPerson = billWithTax / numOfPeople;
      return amountPerPerson.toFixed(2);
    }
}

calculateBtn.addEventListener('click', function(){
  let billValue = parseFloat(billAmount.value);
  let sQValue = parseFloat(serviceQuality.options[serviceQuality.selectedIndex].value);
  let numOfPplValue = parseFloat(numOfPeople.value);

  if(!Number.isNaN(billValue) && !Number.isNaN(sQValue) && !Number.isNaN(numOfPplValue)){
    //Create new objects
    let newTransaction = new TipCalculator(billValue, sQValue, numOfPplValue);
    let totalWithTip = newTransaction.calculateTip();
    let totalPerPerson = newTransaction.calculatePerPerson();

    //Append Bill Total
    totalHeader.textContent = "Your Total With Tip:";
    totalText.textContent = '$' + totalWithTip;
    totalText.classList.add('totalAmount');
    result.appendChild(totalHeader);
    result.appendChild(totalText);
    //Append Total per Person
    totalPersonHeader.textContent = "Total Per Person:";
    tPPText.textContent = '$' + totalPerPerson;
    tPPText.classList.add('totalAmount');
    resultTwo.appendChild(totalPersonHeader);
    resultTwo.appendChild(tPPText);
  } else {
    alert("Please enter a number into the following fields");
    return false;
  }

});
