let sum = (num1, num2) => {
    return num1 + num2
}

let calc = (num1, num2, callback) => {
    return callback(num1, num2)
}

console.log(calc(2, 3, sum));

let date = (callback) => {
    console.log(new Date);

    setTimeout( () => {
        let date = new Date
        callback(date)
    }, 3000)
}

let printDate = (dateNow) => {
    console.log(dateNow);
}

date(printDate)