const plusbutton = document.querySelector(".plus")
const minsbutton = document.querySelector(".mins")
const countValue = document.querySelector(".Count")
// const countValue = document.querySelector(".Count span")
const changeBy = document.getElementById("changeBy")
const reset = document.getElementById('reset');

// newValue = 0
// countValue.innerText = newValue

plusbutton.addEventListener("click", () => {
  const changeByValue = parseInt(changeBy.value)
  countValue.innerText = parseInt(countValue.innerText) + changeByValue
    // newValue ++
    // countValue.innerText = newValue
})

minsbutton.addEventListener('click', ()=>{
  const changeByValue = parseInt(changeBy.value)
  countValue.innerText = parseInt(countValue.innerText) - changeByValue
    // newValue --
    // countValue.innerText = newValue
})

reset.addEventListener('click', () => {
    countValue.innerText = 0;
  });