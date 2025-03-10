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
            let sum = 0;
            let flatNumbers = numbers.flat();
            for(let i=0;i<flatNumbers.length;i++){
                sum+=flatNumbers[i];
            }
            alert(`Tổng các phần tử trong mảng là: ${sum}`);
            break;

        case 4:
            let max=-Infinity;
            let position={row: -1, col: -1};
            for(let i=0;i<numbers.length;i++){
                for(let j=0;j<numbers[i].length;j++) {
                    if(numbers[i][j]>max){
                        max=numbers[i][j];
                        position={row: i,col: j};
                    }
                }
            }
            alert(`Phần tử lớn nhất là ${max} tại vị trí [${position.row}][${position.col}]`);
            break;

        case 5:
            let row = +prompt(`Nhập chỉ số hàng (0 đến ${numbers.length - 1}): `);
            if(row<0||row>=numbers.length||isNaN(row)){
                alert("Chỉ số hàng không hợp lệ!");
            }else{
                let summ=0;
                for(let i=0;i<numbers[row].length;i++){
                    summ+=numbers[row][i];
                }
                let avg=summ/numbers[row].length;
                alert(`Trung bình cộng hàng ${row} là: ${avg}`);
            }
            break;

        case 6:
            numbers = numbers.map(row => row.reverse());
            alert("Mảng sau khi đảo ngược các hàng:");
            alert(numbers.map(row => row.join(" ")).join("\n"));
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
}while(choice!==7);
