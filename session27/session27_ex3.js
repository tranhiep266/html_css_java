let choice;
let arr=[];
let radius=5;
let wid=5;
let len=10;
do{
    choice=+prompt(`
        -----MENU-----
        1.Nhập danh sách sinh viên.
        2.Hiển thị danh sách sinh viên.
        3.Tìm sinh viên theo tên.
        4.Xóa sinh viên khỏi danh sách.
        5.Thoát.

        Lựa chọn của bạn:
        `);
    switch(choice){
        case 1:
            console.log(Math.PI * radius * radius);
            break;
            
        case 2:
            console.log(2 * Math.PI * radius);
            break;

        case 3:
            console.log(len*wid);
            break;
            
        case 4:
            console.log(2*(len+wid));
            break;

        case 5:
            alert("Tạm biệt.");
            break;
        
        default:
            alert("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
    }
}while(choice!==5)
