let numbers=[];
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
            let rows=+prompt("Nhập số hàng: ");
            let cols=+prompt("Nhập số cột: ");
            if(isNaN(rows)||rows<=0||isNaN(cols)||cols<=0){
                alert("Kích thước mảng không hợp lệ!");
                break;
            }
            numbers = [];
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    let value = +prompt(`Nhập phần tử tại vị trí [${i}][${j}]: `);
                    row.push(value);
                }
                numbers.push(row);
            }
            break;

        case 2:
            alert(numbers.map(row => row.join(" ")).join("\n"));
            break;

        case 3:       
            let sumFlat=0;
            let flatNumbers=numbers.flat();
            for(let i=0;i<flatNumbers.length;i++){
                sumFlat+=flatNumbers[i];
            }
            alert(`Tổng các phần tử trong mảng là: ${sumFlat}`);
            break;

        case 4:
            let sumMain=0;
            for (let i=0;i<Math.min(numbers.length, numbers[0].length);i++) {
                sumMain+=numbers[i][i];
            }
            alert(`Tổng các phần tử trên đường chéo chính là: ${sumMain}`);
            break;

        case 5:
            let sum=0;
            for (let i=0;i<Math.min(numbers.length, numbers[0].length);i++) {
                sum+=numbers[i][numbers[0].length-1-i];
            }
            alert(`Tổng các phần tử trên đường chéo phụ là: ${sum}`);
            break;

        case 6:
            
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
}while(choice!==7);
