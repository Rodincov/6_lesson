
// function plus(a, b) {
//     return a + b 
// }
// function minus(a, b) {
//     return a - b 
// }
// function multi(a, b) {
//     return a + b 
// }
// function dev(a, b) {
//     return a / b 
// }
// function grade(a, b) {
//     return a ** b 
// }
// let q = quad 
// function quad( a, b ) {
//     return Math.sqrt( a ** b)
// }
// if(quad = ) {}




// console.log(plus(2, 2))
// console.log(minus(2, 2))
// console.log(multi(2, 2))
// console.log(dev(2, 2))
// console.log(grade(2, 2))

// console.log(quad(3,21))


// let allSpeed = 0
// for (let i = 0; i < 3; i++) {
//     let speed = +prompt('speed')
//     allSpeed += speed
// }

// let distance = +prompt('distance')

// function getTime(speed, distance) {
//     console.log(speed/3);
//     return distance/(speed/3)
// }
// console.log(getTime(allSpeed, distance));


// let allSpeed = []
// let distance = +prompt('distance')

// for (let i = 0; i < 3; i++) {
//     let speed = +prompt('speed')
//     allSpeed.push(speed)
// }

// let test = allSpeed.reduce( (a,b) => {
//     return a+b
// })/3

// function getTime(speed, distance) {
//     return distance/speed
// }
// console.log(getTime(test, distance));



// let speed1 = +prompt('Укажите скорость км/ч')
// let speed2 = +prompt('Укажите скорость км/ч')
// let speed3 = +prompt('Укажите скорость км/ч')
// let path = +prompt('Спасибо, теперь расстояние в км')
// function way(sp1, sp2, sp3) {
// return ((sp1 + sp2 + sp3)/3)/path
// }
// console.log(way(speed1, speed2, speed3))






// let num1 = +prompt('num1')
// let num2 = +prompt('num2')
// let num3 = +prompt('num3')

// function returnNum(number1, number2, number3) {
//     if(number1 < 0) {
//         console.log('-1')
//     }

//     else if(number2 === 0) {
//         console.log('0')
//     }

//     else if (number3 > 0) {
//         console.log('1')
//     }
//     else{ 

//     }
// }
// console.log(returnNum(num1, num2, num3))







// let num1 = +prompt('Диапозон чисел от')
// let num2 = +prompt('Диапозон чисел до')

// function range(numb1, numb2) {
//     for (let i = numb1; i < numb2; i++){
//         if(i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// range(num1,num2)







// let num1 = +prompt('Put your number')
// let empty = ''
// function number(number) {
//     number = (num1 + empty).length
//     console.log(number)
// }
// number(num1)




// !!!!!!!


let num = +prompt('number over 100')
let arr = ('' + num).split('').map(Number)

console.log(arr)

function number(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] > array[i++]) {
            console.log([i])
        } else {

        }
    }
}
number(arr)


// !!!!!!!!!!



// let username = prompt('name')
// let surname = prompt('surname')
// let city = prompt('city')
// let age = prompt('age')
// let phone = prompt ('phone number')
// let email = prompt ('email')
// let user = {
//     name: username,
//     surname: surname,
//     city: city,
//     age: age,
//     phone: phone,
//     email: email,
// }
// console.log(user.name)





// let logPass = {
//     login: 'admin',
//     pass: '12345vip'
// }
// let pushLog = prompt('Login')
// let pushPass = prompt('Password')

// if (logPass.login === pushLog , logPass.pass === pushPass) {
//     alert('Welcome')
// } else {
//     alert('wrong pass or log')
// }







// let obj = {
//     name: 'Barak',
//     lastname: 'Obama',
// }

// obj['getLastName'] = obj.name + ' ' + obj.lastname

// console.log(obj.getLastName)
// console.log(obj)