let bill
let numberofPeople = 1
let selectedTip = 0
let value1 = document.getElementById('value_1')
let value2 = document.getElementById('value_2')

document.querySelectorAll('.btnV').forEach(function (button) {
  button.addEventListener('click', function (event) {
    const el = event.target
    const id = el.id
    selectedTip = Number(id)
    teste()
  })
})

//function calcTipAmount() {
//  bill = Number(document.getElementById('bill').value)
//  console.log(bill)
//  numberofPeople = Number(document.getElementById('number_of_people').value)
//}

function teste() {
  // if (selectedTip != 0) {
  tipAmount = 0
  bill = Number(document.getElementById('bill').value)
  numberofPeople =
    Number(document.getElementById('number_of_people').value) || 1
  let tip = (selectedTip / 100) * bill
  let total = bill + tip
  let totalperPerson = total / numberofPeople

  let tipPerPerson = (total - bill) / numberofPeople
  value1.textContent = '$' + tipPerPerson.toFixed(2)
  value2.textContent = '$' + totalperPerson.toFixed(2)
}
//}
