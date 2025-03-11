function cleanString(str){
    let cleanedStr='';
    for(let i=0;i<str.length;i++){
        let char=str[i].toLowerCase();
        if((char>='a'&&char<='z')||(char>='0'&&char<='9')){
            cleanedStr+=char;
        }
    }
    return cleanedStr;
}
function isPalindrome(str){
    let cleanedStr=cleanString(str);
    let reversedStr=cleanedStr.split('').reverse().join('');
    return cleanedStr===reversedStr?'là chuỗi đối xứng':'không phải chuỗi đối xứng';
}
let inputStr=prompt("Nhập vào một chuỗi: ");
alert(isPalindrome(inputStr));