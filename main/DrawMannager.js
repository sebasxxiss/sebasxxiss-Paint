import { color } from "./colorsMannager.js"
import { lineWidth } from "./buttonsMannager.js"

const toolBar = document.querySelector(".toolBar")
const canvas=document.querySelector(".MouseCanvas")
const sizeMenu = document.querySelector(".options")
const canvasCtx=canvas.getContext("2d")
resizeCanvas()
let moving=false
let outsideCanvas=false

function resizeCanvas(){
    canvas.height=window.innerHeight-100
    canvas.width=window.innerWidth
}

function draw(e){
    canvasCtx.lineWidth=lineWidth
    canvasCtx.lineCap="round"
    canvasCtx.lineTo(e.clientX,e.clientY-100)
    canvasCtx.stroke()
    canvasCtx.strokeStyle=color
    canvasCtx.beginPath()
    canvasCtx.moveTo(e.clientX,e.clientY-100)
}
onmousedown=(e)=>{
    if (!moving && !outsideCanvas){
        canvasCtx.strokeStyle=color
        canvasCtx.beginPath()
        draw(e)
    }
    if(!outsideCanvas){
        moving=true
        canvasCtx.beginPath()
        addEventListener("mousemove",draw)
    }
}
onmouseup=(e)=>{
    moving=false
    removeEventListener("mousemove",draw)
}

toolBar.onmouseenter=()=>{
    outsideCanvas=true
}
toolBar.onmouseleave=()=>{
    outsideCanvas=false
}
sizeMenu.onmouseenter=()=>{
    outsideCanvas=true
}
sizeMenu.onmouseleave=()=>{
    outsideCanvas=false
}

addEventListener("resize",()=>{
    resizeCanvas()
})
addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })

export {canvas,canvasCtx}

