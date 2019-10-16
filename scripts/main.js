console.log("THIS IS WORKING!!!")


let article1El = document.querySelector("#article1")
let article2El = document.querySelector("#article2")
let fieldEl = document.getElementById("message")

fieldEl.addEventListener("keyup", event => {
  
  article1El.textContent = event.target.value
  article2El.textContent = event.target.value

})
