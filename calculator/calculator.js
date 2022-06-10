window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.querySelector("#loan-amount");
  const loanYears = document.querySelector("#loan-years");
  const loanRate = document.querySelector("#loan-rate");
  loanAmount.value = 50000;
  loanYears.value = 2;
  loanRate.value = (0.12);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const val = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(val))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let n = values.years * 12;
  let i = values.rate / 12;
  //If makes it so the rate never equals 100%
  if (values.rate >= 1) {
    let monthlyPayment = '"Yearly Rate" must less than 1';
    return monthlyPayment;
  } else {
    let monthlyPayment = (p * i) / (1 - ((1 + i)** -n));
    //If displays message if user inputs a string or 0
    if (isNaN(monthlyPayment) || monthlyPayment === Infinity ) {
      monthlyPayment = `"Term in Years" and "Yearly Rate" must be more than 0 and can't be text/string`
    } else {
      monthlyPayment = monthlyPayment.toFixed(2).toString();
    }
    return monthlyPayment;
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthPaymentDisplay = document.querySelector("#monthly-payment");
  monthPaymentDisplay.textContent = monthly;
}
