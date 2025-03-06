let arr=[];
let choice;
do{
    choice=+prompt(`
        -----MENU-----
        1.Nhập vào mảng
        2.Hiển thị mảng
        3.Thêm phần tử
        4.Sửa phần tử
        5.Xóa phần tử
        6.Thoát

        Lựa chọn của bạn:
        `);
    switch(choice){
        case 1:
            for(;;){
                let countAdd=+prompt("Nhập số lượng phần tử: ");
                if(isNaN(countAdd)||countAdd<=0){
                    alert("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
                }else{
                    for(let i=0;i<countAdd;i++){
                        let inputAdd=prompt("Mời nhập phần tử bạn muốn thêm: ")
                        arr.push(inputAdd);
                    }
                    console.log(arr);
                    break;
                }
            }
            break;
            
        case 2:
            for(let i in arr){
                console.log(`${i}.${arr}`);
            }
        case 3:
            for(let i in arr){
                console.log(`${i}.${arr}`);
            }
            for(let i=0;i<countAdd;i++){
                let inputAdd=prompt("Mời nhập phần tử bạn muốn thêm: ")
                arr.push(inputAdd);
            }
            console.log(arr);
            break;
            
        case 4:

        case 5:

        case 6:
            alert("Tạm biệt.");
            break;
        
        default:
            alert("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
    }
}while(choice!==6)