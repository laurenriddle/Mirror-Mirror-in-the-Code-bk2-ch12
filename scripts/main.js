// test console log
console.log("THIS IS WORKING!!!")

// this gets a reference to the element with the article1 ID
let article1El = document.querySelector("#article1")

// this gets a reference to the element with the article2 ID
let article2El = document.querySelector("#article2")

// this gets a reference to the element with the message ID
let fieldEl = document.getElementById("message")

// this is a function that changes the values in the elements with the IDs of article1 and article2
const handleKeyUp = () => {
    article1El.textContent = event.target.value
    article2El.textContent = event.target.value
}

// this is an event listener that listens for the keyup event in the input field and executes the handleKeyUp function when the event listener is triggered
fieldEl.addEventListener("keyup", handleKeyUp)
