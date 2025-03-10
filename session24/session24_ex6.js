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
            alert(str.length);
            break;

        case 4:
            let char=prompt("Nhập ký tự cần đếm: ");
            let count=0;
                for(let i=0;i<str.length;i++) {
                    if(str[i]===char){
                    count++;
                }
            }
            alert(`Ký tự '${char}' xuất hiện ${count} lần `);
            break;

        case 5:
            let reversed="";
            for(let i=str.length-1;i>=0;i--){
                reversed+=str[i];
            }
            if(str===reversed){
                alert("Chuỗi là chuỗi đối xứng");
            }else{
                alert("Chuỗi không phải là chuỗi đối xứng");
            }
            break;

        case 6:
            let words=str.split(" ");
            for (let i=0;i<words.length; i++) {
                if(words[i].length>0){
                    words[i]=words[i][0].toUpperCase()+words[i].slice(1);
                }
            }
            str = words.join(" ");
            alert("Chuỗi sau khi chuyển đổi:", str);
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
}while(choice!==7);
