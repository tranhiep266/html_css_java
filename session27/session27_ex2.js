let choice;
let arr=[];
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
            for(;;){
                n=+prompt(`nhập số lượng số sinh viên`);
                if(n>0&&Number.isInteger(n)){
                    break;
                }
            }
            for(let i=0;i<n;i++){
                let student=prompt(`nhập lần lượt tên đầy đủ từng sinh viên: `);
                arr.push(student);
            }
            break;
            
        case 2:
            arr.forEach((student, index) => {
                console.log(`${index + 1}. ${student}`);
            });
            break;

        case 3:
            let find=prompt(`nhập tên sinh viên cần tìm kiếm`);
            let output=arr.filter(student=>student===find);
            console.log(output);
            break;
            
        case 4:
            let deleteStudent=prompt(`nhập tên sinh viên cần xóa`);
            let index=arr.indexOf(deleteStudent);
            if(index!==-1){
                arr.splice(index,1);
                arr.forEach((student, index) => {
                    console.log(`${index + 1}. ${student}`);
                });
            }else{
                console.log(`Không tìm thấy sinh viên`);
            }
            break;

        case 5:
            alert("Tạm biệt.");
            break;
        
        default:
            alert("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
    }
}while(choice!==5)
