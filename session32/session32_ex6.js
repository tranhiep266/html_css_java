let size=16;
function upBtn(){
    document.getElementById("upBtn").onclick=()=>{
        size+=2;
        document.getElementById("text").style.fontSize=`${size}px`;
    }
};
function downBtn(){
    document.getElementById("downBtn").onclick=()=>{
        size-=2;
        document.getElementById("text").style.fontSize=`${size}px`;
    }
};