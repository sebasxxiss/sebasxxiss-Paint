const colorSelector = document.querySelector("#colorSelector")
const colorSelectorRange = document.querySelector("#colorSelectorRange")
const colorMenu = document.querySelector("#colorMenu")
const eraserColor=document.querySelector("#eraserColor")
const redColor=document.querySelector("#red")
const greenColor=document.querySelector("#green")
const blueColor=document.querySelector("#blue")
const colorBW = document.querySelector("#colorBW")
const colorRGB = document.querySelector("#colorRGB")
const R = document.querySelector(".R")
const G = document.querySelector(".G")
const B = document.querySelector(".B")
let color="black"
let red = 255
let green = 0
let blue = 0

redColor.onclick=()=>{color="red"}
greenColor.onclick=()=>{color="green"}
blueColor.onclick=()=>{color="blue"}
eraserColor.onclick=()=>{color="white"}
colorSelector.onclick=()=>{
    colorMenu.style.display="block"
    colorRGB.style.background=`rgb(${red},${green},${blue})`
}
colorSelectorRange.addEventListener("input",()=>{
    if(colorSelectorRange.value>=0 && colorSelectorRange.value<=255){//0-255
        red=255
        green=colorSelectorRange.value
        blue=0
    }
    if(colorSelectorRange.value>=256 && colorSelectorRange.value<=510){//256-510
        red=255-(colorSelectorRange.value-255)
        green=255
        blue=0
    }
    if(colorSelectorRange.value>=511 && colorSelectorRange.value<=765){//511-765
        red=0
        green=255
        blue=(colorSelectorRange.value-(255*2))
    }
    if(colorSelectorRange.value>=766 && colorSelectorRange.value<=1020){//766-1020
        red=0
        green=255-(colorSelectorRange.value-(255*3))
        blue=255
    }
    if(colorSelectorRange.value>=1021 && colorSelectorRange.value<=1275){//1021-1275
        red=colorSelectorRange.value-255*4
        green=0
        blue=255
    }
    if(colorSelectorRange.value>=1276 && colorSelectorRange.value<=1530){//1276-1530
        red=255
        green=0
        blue=255-(colorSelectorRange.value-255*5)
    }
    colorRGB.style.background=`rgb(${red},${green},${blue})`
    color=`rgb(${red},${green},${blue})`
    R.value=red
    G.value=green
    B.value=blue
})
R.addEventListener("input",()=>{
    red=R.value
    colorRGB.style.background=`rgb(${red},${green},${blue})`
    color=`rgb(${red},${green},${blue})`
})
G.addEventListener("input",()=>{
    green=G.value
    colorRGB.style.background=`rgb(${red},${green},${blue})`
    color=`rgb(${red},${green},${blue})`
})
B.addEventListener("input",()=>{
    blue=B.value
    colorRGB.style.background=`rgb(${red},${green},${blue})`
    color=`rgb(${red},${green},${blue})`
})

export {color,colorBW}