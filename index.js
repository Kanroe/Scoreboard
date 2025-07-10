

let homeScore = document.getElementById("homescore")

let countHome = 0

function add1Home() {
  countHome += 1
  homeScore.innerText = countHome
  
}
function add2Home() {
  countHome += 2
  homeScore.innerText = countHome
  
}
function add3Home() {
  countHome += 3
  homeScore.innerText = countHome
  
}

let guestScore = document.getElementById("guestscore")

let countGuest = 0

function add1Guest() {
  countGuest += 1
  guestScore.innerText = countGuest
  
}
function add2Guest() {
  countGuest += 2
  guestScore.innerText = countGuest
  
}
function add3Guest() {
  countGuest += 3
  guestScore.innerText = countGuest
  
}

let resetScore = document.getElementById("resetbutton")


function resetAllScore() {
  countGuest = 0
  guestScore.innerText = countGuest
  countHome = 0
  homeScore.innerText = countHome
  
  
}