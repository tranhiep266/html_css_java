let products=[
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000], 
    ["mèn mén", 30, 20000]
];
let cart=[];
let menu=`
    -----MENU-----
    1. Danh sach san pham
    2. Mua hang
    3. Tinh tien + hoa don
    4. Thoat
    Moi ban nhap lua chon:
    `;
let input;
while(input!==4){
    input=+prompt(menu);
    switch(input){
        case 1:
            displayProduct();
            break;

        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        default:
            break;
    }
}

function displayProduct(){
    for(let index in products){
        console.log(`${+index+1}.${products[index][0]}-${products[index][2]}-${products[index][1]}`);
    }
}

function buyProduct(){
    let productName=prompt("Moi ban nhap ten san pham");
    let findIndex=-1;
    for(let index in products){
        if(productName===products[index][0]){
            findIndex=index;
        }
    }
    if(findIndex===-1){
        console.log("Khong tim thay san pham");
    }else{
       // console.log(products[findIndex]);
       let inCartIndex=-1;
       for(let i in cart){
            if(cart[i][0]===productName){
                inCartIndex=i;
            }
       }
       if(inCartIndex===-1){
            let product=products[findIndex];
            let addProduct=[...product];
            cart.push(addProduct);
       }else{
            cart[inCartIndex][1]=++;
       }
       products[findIndex[1]]--;
    }
}