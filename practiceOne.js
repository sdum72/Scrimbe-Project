var count = 0;
var countEl = document.getElementById("count-el")
var saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

var previousCount = 0;

function save() {
    previousCount = count + " - "
    saveEl.textContent += previousCount
    countEl.textContent = 0
    count = 0
}

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
}


function remove1Point() {
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()


// Call the functions to that the line below logs out 10
console.log(myPoints)