import { colorBW } from "./colorsMannager.js"

const cursor = document.querySelector(".cursor")
let colorbwCoords=colorBW.getBoundingClientRect()
let isPressed=false

colorBW.onmousedown=(e)=>{
  colorbwCoords=colorBW.getBoundingClientRect()  
  isPressed=true
  cursor.style.left=(e.clientX - (colorbwCoords.x))+"px"
  cursor.style.top=(e.clientY - (colorbwCoords.y))+"px"  
}

const a = addEventListener("mousemove",(e)=>{
    if(isPressed===true ){
        colorbwCoords=colorBW.getBoundingClientRect()
        let onColorbwX=Math.floor((e.clientX - (colorbwCoords.x))*100/174)
        let onColorbwY=Math.floor((e.clientY - (colorbwCoords.y))*100/75)
        if(onColorbwX>=0 && onColorbwX<=100){
            cursor.style.left=(e.clientX - (colorbwCoords.x))+"px"
        }
        if(onColorbwY>=0 && onColorbwY<=100){
            cursor.style.top=(e.clientY - (colorbwCoords.y))+"px"
        }
    }
})
document.onmouseup=()=>{
    isPressed=false
    colorBW.removeEventListener("mousemove",a)
}

export {colorbwCoords}