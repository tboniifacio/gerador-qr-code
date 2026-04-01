const dataSizeButton = document.querySelectorAll(".size-btn")
const sizeRow = document.querySelector(".size-row")
const btn = document.querySelector(".btn-primary")
const frm = document.querySelector("form")
const result = document.querySelector("#qr-placeholder")



sizeRow.addEventListener("click", (e) => {
       e.preventDefault()

    const button = e.target.closest(".size-btn")

    if (!button) return

    dataSizeButton.forEach(btn => {
        btn.classList.remove("active")
    })

    button.classList.add("active")


})


btn.addEventListener("click", (e) => {
   e.preventDefault()

   const btnActive = document.querySelector(".size-btn.active")
   const textUrl = frm.qrinput.value

result.innerHTML = ""

 new QRCode(result, {
  text: textUrl,
  width: btnActive.dataset.size,
  height: btnActive.dataset.size,
  colorDark: "#000000",
  colorLight: "#ffffff"
})

})

