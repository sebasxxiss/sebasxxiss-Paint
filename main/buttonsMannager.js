import { canvas,canvasCtx } from "./DrawMannager.js"

const sizes=document.querySelector("#Sizes")
const s4 =document.querySelector("#s4")
const s8 =document.querySelector("#s8")
const s12 =document.querySelector("#s12")
const s16 =document.querySelector("#s16")
const lineSize =document.querySelector("#lineSize")
const sizeValue=document.querySelector("#sizeValue")
let lineWidth=8
const btnFile=document.querySelector(".File")
const btnClear=document.querySelector("#btnClear")
const btnSave=document.querySelector("#btnSave")


s4.onclick=()=>{lineWidth=4; sizeValue.innerHTML=4; lineSize.value=4}
s8.onclick=()=>{lineWidth=8; sizeValue.innerHTML=8; lineSize.value=8}
s12.onclick=()=>{lineWidth=12; sizeValue.innerHTML=12; lineSize.value=12}
s16.onclick=()=>{lineWidth=16; sizeValue.innerHTML=16; lineSize.value=16}

btnClear.onclick=()=>{
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
}
btnSave.onclick=()=>{
    let imageUrl=canvas.toDataURL()
    let image=document.createElement("a")
    image.href=imageUrl
    image.download="SPaint"
    image.click()
    image.remove()
}
lineSize.addEventListener("input",()=>{
    lineWidth=lineSize.value
    sizeValue.innerHTML=lineSize.value
})

export {lineWidth}