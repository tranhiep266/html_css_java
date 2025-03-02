let a=+prompt("Moi ban nhap vao so a:");
let b=+prompt("Moi ban nhap vao so b:");
let ope=prompt("Moi ban nhap vao cac phep tinh (+,-,*,/)");
let sum=a+b;
let minus=a-b;
let multi=a*b;
let divi=a/b;
switch(ope){
    case "+":
        alert(a+"+"+b+"="+sum);
        break;
    case "-":
        alert(a+"-"+b+"="+minus);
        break;
    case "+":
        alert(a+"*"+b+"="+multi);
        break;
    case "/":
        alert(a+"/"+b+"="+divi);
        break;
    default:
        alert("Ban nhap sai yeu cau");
}