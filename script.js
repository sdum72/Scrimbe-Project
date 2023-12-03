// document.getElementById("count-el").textContent = 5

// initialize the count as 0
var count = 0;

// listen for clicks on the increment button
// increment the count variable when the button is clicked.

let countEl = document.getElementById("count-el")
console.log(countEl)

function increment() {
  count += 1
  countEl.textContent = count
}


/// 1. Grab the save-el paragrah and store it in a variable called saveEl
var saveEl = document.getElementById("save-el");
console.log(saveEl)

// 1. Create a function, save(), which logs out the count when it's called

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  var countDash = (count + " - ");
  console.log(countDash)
  // 3. Render the variable in the saveEl using innerText. 
  // NB: Make sure to not delete the existing content of the paragraph
  saveEl.textContent += countDash
  countEl.textContent = 0
  count = 0

}
// save()







// document.getElementById("bala").textContent 

// var babala = document.getElementById("bala")

// console.log(babala)



// function increment() {
//   console.log("you clicked this")
//   count = count + 1
//   console.log(count)
//   babala.textContent = count


// }
















































// incrementClick()


// change the count-el in the HTML to reflect the new count.








// function increment() {
//   console.log("button was clicked")
// }


// function countDown() {
//   console.log(5)
//   console.log(4)
//   console.log(3)
//   console.log(2)
//   console.log(1)
// }

// countDown()

// function logNumber() {
//   console.log(53)
// }

// logNumber()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times.

// function sumTime() {
//   var totalTime = lap1 + lap2 + lap3
//   console.log(totalTime)
// }

// sumTime()

// let lapsCompleted = 0;

// // lapsCompleted = lapsCompleted + 1;

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times.

// function totalLaps() {
//   console.log(lapsCompleted = lapsCompleted + 1)
// }

// totalLaps()
// totalLaps()
// totalLaps()

// // console.log(lapsCompleted);

