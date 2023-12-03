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

