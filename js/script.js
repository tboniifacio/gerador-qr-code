const dataSizeButton = document.querySelectorAll(".size-btn")
const sizeRow = document.querySelector(".size-row")
const btn = document.querySelector(".btn-primary")
const frm = document.querySelector("form")
const result = document.querySelector("#qr-placeholder")
const colorRow = document.querySelector(".color-row")
const colorDot = document.querySelectorAll(".color-dot")
const p = document.querySelector(".invalidUrl")
const downloadBtn = document.querySelector("#btn-download")


sizeRow.addEventListener("click", (e) => {
    e.preventDefault()

    const button = e.target.closest(".size-btn")

    if (!button) return

    dataSizeButton.forEach(btn => {
        btn.classList.remove("active")
    })

    button.classList.add("active")


})



sizeRow.addEventListener("click", (e) => {
    e.preventDefault()

    const button = e.target.closest(".size-btn")

    if (!button) return

    dataSizeButton.forEach(btn => {
        btn.classList.remove("active")
    })

    button.classList.add("active")


})


colorRow.addEventListener("click", (e) => {
    e.preventDefault()

    const color = e.target.closest(".color-dot")

    if (!color) return

    colorDot.forEach(click => {
        click.classList.remove("active")
    })

    color.classList.add("active")
})

btn.addEventListener("click", (e) => {
    e.preventDefault()

    const btnActive = document.querySelector(".size-btn.active")
    const colorActive = document.querySelector(".color-dot.active")
    const textUrl = frm.qrinput.value.trim()

    result.innerHTML = ""

    if (
        textUrl.includes(".") &&
        textUrl[0] !== "." &&
        textUrl[textUrl.length - 1] !== "."
    ) {
        new QRCode(result, {
            text: textUrl,
            width: btnActive.dataset.size,
            height: btnActive.dataset.size,
            colorDark: colorActive.dataset.color,
            colorLight: "#ffffff"
        })

        const canvas = result.querySelector("canvas")

        if (canvas) {
            const url = canvas.toDataURL("image/png")
            downloadBtn.href = url
        }

        downloadBtn.style.display = "inline-block"

        p.innerHTML = ""
    }
    else {

        p.innerText = "Escreva uma URL válida"


    }

})


