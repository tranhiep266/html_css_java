function formatDate(dates) {
  if (!Array.isArray(dates)) {
    return `Du lieu khong hop le`;
  }
  return dates.map((date) => {
    let parts = date.split(`-`);
    if (parts.length !== 3) {
      return `Du lieu khong hop le`;
    }
    let [year,month,day]=parts;
    if(year.length!==4||month.length!==2||day.length!==2||isNaN(year)||isNaN(month)||isNaN(day)){
        return "Du lieu khong hop le";
    }
    return `${day}/${month}/${year}`;
  });
}
let input=prompt("Nhap mang ngay theo kieu YYYY-MM-DD,het 1 ngay dung them dau , : ");
let datesArr=input.split(",").map(item=>item.trim());
output=formatDate(datesArr);
console.log(output);