//  get element
const bill = document.getElementById("amount");
const tipCustom = document.getElementById("input-tip");
const numb_people = document.getElementById("number-people");
const tips_container = document.querySelector(".tips-container");
const tips = document.querySelectorAll(".tips");
const tip_per_person = document.querySelector(".per-person");
const total_amount = document.querySelector(".total-amount");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector(".warning");


bill.addEventListener("input", getBillValue);
numb_people.addEventListener("input", getNumbPeople);
tipCustom.addEventListener("input", getCustomTip);

let bill_value = 0.0;
let custom_value = 0.0;
let numb_peopleValue = 1;
let tips_value = 0.1;
let tip_amount = 0.0;
let total = 0.0;

// getting the bill number
function getBillValue() {
  bill_value = parseFloat(bill.value);
  // console.log(bill_value);

  calculateBill();
}

//function clear previous Selection
function clearSelection() {
  tips.forEach((element) => {
    element.classList.remove("tip-selected");
  });
}

// getting tips
tips_container.addEventListener("click", (e) => {
  e.preventDefault();
  clearSelection();
  // reinitialize the custom input when other tips is selected
  tipCustom.value = "";
  custom_value = 0;
// calculate value of tips
  if ((e.target.classList = "tips")) {
    e.target.classList.add("tip-selected");
    tips_value = parseFloat(e.target.innerHTML) / 100;
    calculateBill();
  }
});

//getCustomTip
function getCustomTip() {
  custom_value = parseFloat(tipCustom.value) / 100;
  // console.log(custom_value);
  calculateBill();
}


//getting the number of people
function getNumbPeople() {
  numb_peopleValue = numb_people.value;
  //   console.log(numb_peopleValue);

    // show the error if user enter 0 person
  if (numb_people.value == 0) {
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
  }

  calculateBill();
}

// Bill calculation
function calculateBill() {
  if (custom_value) {
    //calcul with the custom input file
    tip_amount = (bill_value * custom_value) / numb_peopleValue;
    total = (bill_value * custom_value + bill_value) / numb_peopleValue;
  } else {
    // calcul with the predefined tips
    tip_amount = (bill_value * tips_value) / numb_peopleValue;
    total = (bill_value * tips_value + bill_value) / numb_peopleValue;
  }

  tip_per_person.innerHTML = "$" + tip_amount.toFixed(2);
  total_amount.innerHTML = "$" + total.toFixed(2);
}

// reset button
resetBtn.addEventListener("click", function () {
  tip_per_person.innerHTML = "$0.00";
  total_amount.innerHTML = "$0.00";
  bill.value = "";
  numb_people.value = "";
  tipCustom.value = "";
  tips_value = 0.0;
  tip_amount = 0.0;
  total = 0.0;
  clearSelection();
});
