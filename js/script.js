const dataSizeButton = document.querySelectorAll(".size-btn")
const sizeRow = document.querySelector(".size-row")
const btn = document.querySelector(".btn-primary")
const textUrl = document.querySelector("form")

sizeRow.addEventListener("click", (e) => {


const button = e.target.closest(".size-btn")

    if(!button) return

    dataSizeButton.forEach(btn => {
        btn.classList.remove("active")
    })

    button.classList.add("active")


})


btn.addEventListener("click", (e) => {
    

})