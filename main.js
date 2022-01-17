let bill
let numberofPeople
let selectedTip = 0
let value1 = document.getElementById('value_1')
let value2 = document.getElementById('value_2')

document.querySelectorAll('.btnV').forEach(function (button) {
  button.addEventListener('click', function (event) {
    const el = event.target

    const id = el.id
    selectedTip = Number(id)
    calcTip()
  })
})

function calcTip() {
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

function custom() {
  selectedTip = Number(document.getElementById('custom').value)
  calcTip()
}

function reset() {
  bill.value = ''
  numberofPeople.value = ''
  value1.textContent = '$0.00'
  value2.textContent = '$0.00'
}
