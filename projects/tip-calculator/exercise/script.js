/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/
// EXTRAS
// #4 ID 👉 'tipTotal' = Total tip dollar value 
// #4 ID 👉 'perPersonTipTotal' = Total tip dollar value owed per person

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInputDiv = document.getElementById('billTotalInput');
const tipInputDiv = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

const tipTotalDiv = document.getElementById('tipTotal');
const perPersonTipTotalDiv = document.getElementById('perPersonTipTotal');

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerHTML);

// ** Calculate the total bill per person **
const calculateBill = () => {

  // get bill from user input & convert it into a number
  let billInput = Number(billInputDiv.value);
  // get the tip from user & convert it into a percentage (divide by 100)
  let tipInput = Number(tipInputDiv.value) / 100;
  // get the total tip amount
  let totalTip = billInput * tipInput;
  // calculate the total (tip amount + bill)
  let totalBill = totalTip + billInput;
  // calculate the per person total (total divided by number of people)
  let perPersonTotal = totalBill / numberOfPeople;
  // calculate the per person total tip (total tip divided by number of people)
  let perPersonTotalTip = totalTip / numberOfPeople;

  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerHTML = `$${(perPersonTotal.toFixed(2))}`;
  // update the tipTotal on DOM & show it to user
  tipTotalDiv.innerHTML = `$${(totalTip.toFixed(2))}`;
  // update the perPersonTipTotal on DOM & show it to user
  perPersonTipTotalDiv.innerHTML = `$${(perPersonTotalTip.toFixed(2))}`;
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1;
  // update the DOM with the new number of people
  numberOfPeopleDiv.innerHTML = numberOfPeople;
  // calculate the bill based on the new number of people
  calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople <= 1) {
    numberOfPeople = 1;
  } else {
    // decrement the amount of people
    numberOfPeople -= 1;
  }
  // update the DOM with the new number of people
  numberOfPeopleDiv.innerHTML = numberOfPeople;
  // calculate the bill based on the new number of people
  calculateBill();
}
