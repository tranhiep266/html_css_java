let div=document.body;
let bn=document.getElementById("btn");
bn.onclick=()=>{
    if(div.style.backgroundColor=="white"){
        div.style.backgroundColor="black";
        div.style.color="white";
    }else{
        div.style.backgroundColor="white";
        div.style.color="black";
    }
}
