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
            let max=numbers[0];
            let posi=0;
            for (let i=1;i<numbers.length;i++){
                if(numbers[i]>max) {
                    max=numbers[i];
                    posi=i;
                }
            }
            alert(`So lon nhat: ${max}`);
            alert(`Vi tri: ${posi}`);
            break;
            
        case 4:
            let sum=0;
            let count=0;
            for(let i=0;i<numbers.length;i++){
                if(numbers[i]>0){
                    sum+=numbers[i];
                    count++;
                }
            }
            alert(`Tong cac so duong: ${sum}`);
            alert(`Tb cac so duong: ${sum/count}`);
            break;

        case 5:
            for(let i=0;i<numbers.length/2;i++){
                let temp=numbers[i];
                numbers[i]=numbers[numbers.length-1-i];
                numbers[numbers.length-1-i]=temp;
            }
            alert(`${numbers}`);
            break;

        case 6:
            for(let i=0;i<(numbers.length/2);i++){
                if(numbers[i]!==numbers[numbers.length-i-1]){
                    check=0;
                    break;
                }else{
                    check=1;
                }
            }
            if(check===1){
                alert("co doi xung");
            }else{
                alert(" khong doi xung");
            }
            break;

        case 7:
            alert("Tạm biệt.");
            break;  
        
        default:
            alert("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
    }
}while(choice!==7)