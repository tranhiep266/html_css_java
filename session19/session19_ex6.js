let a=+prompt("Nhap a: ");
let b=+prompt("Nhap b: ");
let c=+prompt("Nhap c: ");
let delta;
let x,x1,x2;
if(a==0){
    alert("Khong phai pt bac 2");
}else if((delta=b*b-4*a*c)<0){
    alert("Phuong trinh vo nghiem");
}else if((delta=b*b-4*a*c)==0){
    x=-b/2*a;
    alert("x="+x);
}else{
    delta=b*b-4*a*c
    x1=(-b+Math.sqrt(delta))/2*a;
    x2=(-b-Math.sqrt(delta))/2*a;
    alert("x1= "+x1+" va "+"x2= "+x2);
}