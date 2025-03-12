let arr=[
    "john.doe@gmail.com",
    "invalidemail.com",
    "hello@domain.net",
    "space@out.com"
]
console.log(arr.filter(email=>email.includes('@')&& !email.includes(' ')));