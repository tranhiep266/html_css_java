let str = "";
let choice;
do{
  choice=+prompt(`
        -----MENU-----
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát chương trình

        Lựa chọn của bạn:
    `);

    switch(choice){
        case 1:
            str=prompt("Nhập chuỗi: ");
            break;

        case 2:
            alert(str);
            break;

        case 3:       
            str=str.trim();
            alert(str);
            break;

        case 4:
            str=str.split("").reverse().join("");
            alert("Chuỗi sau khi đảo ngược:", str);
            break;

        case 5:
            let trimmedString=str.trim();
            let wordCount=0;
            let isWord=false;
            for (let i=0;i<trimmedString.length;i++) {
                if(trimmedString[i]!==" "){
                    if(!isWord){
                        wordCount++;
                        isWord=true;
                    }
                }else{
                    isWord=false;
                }
            }
            break;

        case 6:
            let charToFind=prompt("Nhập ký tự cần tìm: ");
            let replacementChar=prompt("Nhập ký tự thay thế: ");
            if(!charToFind){
              alert("Ký tự tìm kiếm không hợp lệ!");
            }else{
              str=str.split(charToFind).join(replacementChar);
              alert("Chuỗi sau khi thay thế:", str);
            }
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
}while(choice!==7);
