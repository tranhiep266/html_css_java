let numbers=[];
let choice;
do{
    choice=+prompt(`
        -----MENU-----
        1.Nhập mảng số nguyên
        2.Hiển thị mảng
        3.Tìm các phần tử chẵn và lẻ
        4.Tính trung bình cộng của mảng
        5.Xóa phần tử tại vị trí chỉ định
        6.Tìm phần tử lớn thứ hai trong mảng
        7.Thoát chương trình

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
                        let inputAdd=+prompt("Mời nhập phần tử bạn muốn thêm: ")
                        numbers.push(inputAdd);
                    }
                    break;
                }
            }
            break;
            
        case 2:
                alert(`${numbers}`);
            break;

        case 3:
            let numbersOdd=[];
            let numbersEven=[];
            for(let i=0;i<numbers.length;i++){
                if(numbers[i]%2===0){
                    numbersEven.push(numbers[i]);
                }else{
                    numbersOdd.push(numbers[i]);
                }
            }
            alert(`cac phan tu chan: ${numbersEven}`);
            alert(`cac pahn tu le: ${numbersOdd}`);
            break;
            
        case 4:
            let sum=0;
            for(let i=0;i<numbers.length;i++){
                sum+=numbers[i];
            }
            alert(`Tb cac phan tu: ${sum/numbers.length}`);
            break;

        case 5:
            let index=+prompt();
            if(index<0||index>=numbers.length||isNaN(index)){
                alert("Vi tri khong hop le");
            }else{
                let removed=numbers.splice(index,1);
                alert(`Xoa phan tu: ${removed}`);
            }
            break;

        case 6:
            let max=-Infinity;
            let secondMax=-Infinity;
            for (let i=0;i<numbers.length;i++){
                if(numbers[i]>max){
                    secondMax=max;
                    max=numbers[i];
                }else if(numbers[i]>secondMax&&numbers[i]!==max){
                    secondMax=numbers[i];
                }
            }
            alert(`So lon nhi: ${secondMax}`);
            break;

        case 7:
            alert("Tạm biệt.");
            break;  
        
        default:
            alert("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
    }
}while(choice!==7)