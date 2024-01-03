import { colorBW } from "./colorsMannager.js"

const cursor = document.querySelector(".cursor")
colorBW.onclick=(e)=>{
    console.log(e.clientX)
    cursor.style.left=e.clientX+"px"
}
