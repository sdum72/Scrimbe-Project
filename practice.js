// create variable for counting when button clicked.
let count = 0
// document.getElementById("count-el").textContent = 5
var countEl = document.getElementById("count-el")
// function to handle increment count.
function increment() {
    console.log("you clicked this ONE")
    count += 1
    countEl.textContent = count
}


var saveEl = document.getElementById("save-el")
console.log(saveEl)

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log("you clicked this TWO")
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    var countPrevious = (count + " - ");
    console.log(countPrevious)
  // 3. Render the variable in the saveEl using innerText. 
  // NB: Make sure to not delete the existing content of the paragraph
    saveEl.textContent += countPrevious
    countEl.textContent = 0
    count = 0

}