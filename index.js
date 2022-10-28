let homeScoreEl = document.getElementById('homeScoreText') 
let guestScoreEl = document.getElementById('guestScoreText') 
let home_score = 0
let guest_score = 0
let score = 0
function HomePoints(score)  {
    home_score = home_score + score      //home_score+ score
    homeScoreEl .textContent = home_score
    console.log('home_score = '+ home_score)
    console.log(score)
    if (guest_score < home_score) {
        guestScoreEl .style.color = 'red'
        homeScoreEl .style.color = 'green'
    }
}
function guestPoints(score)  {
    guest_score = guest_score + score      //home_score+ score
    guestScoreEl .textContent = guest_score
    console.log('guest_score = '+ guest_score)
    console.log(score)
    if (guest_score > home_score) {
        guestScoreEl .style.color = 'green'
        homeScoreEl .style.color = 'red'
    }
}
function newGame() {
    homeScoreEl .textContent = 0
    guestScoreEl .textContent = 0
    console.log('guest_score = '+ guest_score)
    console.log(score)
    guestScoreEl .style.color = 'red'
        homeScoreEl .style.color = 'red'
}




















/*let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
function clear() {
    sumEl.textContent =' '
}
function add() {
    let sum = num1 + num2;
     console.log(sum)
    sumEl.textContent = 'sum:' + sum
}
function subtract() {
       let sum = num1 - num2;
     console.log(sum)
    sumEl.textContent = 'sum:' + sum
}
function divide() {
      let sum = num1 / num2;
     console.log(sum)
    sumEl.textContent = 'sum:' + sum
}
function multiply() {
      let sum = num1 * num2;
     console.log(sum)
    sumEl.textContent = 'sum:' + sum
}*/