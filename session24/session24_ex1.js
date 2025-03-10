let numbers=[];
let choice;
do{
    choice=+prompt(`
        -----MENU-----
        1.Nhập mảng
        2.Hiển thị mảng
        3.Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4.Tính tổng các phần tử trong mảng
        5.Tìm số lần xuất hiện của một phần tử trong mảng
        6.Sắp xếp mảng tăng dần
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
            for (let i=1;i<numbers.length;i++){
                if(numbers[i]>max) {
                    max=numbers[i];
                }
            }
            alert(`So lon nhat: ${max}`);
            let min=numbers[0];
            for (let i=1;i<numbers.length;i++){
                if(numbers[i]<min) {
                    min=numbers[i];
                }
            }
            alert(`So nho nhat: ${min}`);
            break;
            
        case 4:
            let sum=0;
            for(let i=0;i<numbers.length;i++){
                sum+=numbers[i];
            }
            alert(`Tong cac phan tu: ${sum}`);
            break;

        case 5:
            let find=+prompt();
            let count=0;
            for(let i=0;i<numbers.length;i++){
                if(find===numbers[i]){
                    count++;
                }
            }
            if(count===0){
                alert("so "+find+" khong ton tai trong mang");
            }else{
                alert("so "+find+" xuat hien "+count+" lan");
            }
            break;

        case 6:
            numbers.sort((a,b)=>a-b);
            alert(`${numbers}`);
            break;

        case 7:
            alert("Tạm biệt.");
            break;  
        
        default:
            alert("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
    }
}while(choice!==7)