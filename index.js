let homeEl = document.getElementById("home-el")
let guestEL = document.getElementById("guest-el")
let countHome = 0
let countGuest = 0
function incrementH1() {
    countHome += 1
    homeEl.textContent = countHome
}

function incrementH2() {
    countHome += 2
    homeEl.textContent = countHome
}

function incrementH3() {
    countHome += 3
    homeEl.textContent = countHome
}

function incrementG1() {
    countGuest += 1
    guestEL.textContent = countGuest
}

function incrementG2() {
    countGuest += 2
    guestEL.textContent = countGuest
}

function incrementG3() {
    countGuest += 3
    guestEL.textContent = countGuest
}