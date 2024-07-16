/*
Mutable & Immutable

Primitive Types are immutable
number, boolean, string, null, undefined, bigint, symbol

Non Primitive Types are mutable
array, objects, functions
*/



// let student1 = "Haider"
// let student2 = student1
// student2 = "Ali"
// console.log(student1, student2);





// let obj = {
//     name: "Haider",
//     rollNum: 188528
// }
// console.log(obj);
// let obj2 = obj
// obj2.name = "Abdul Hannan"
// console.log(obj2);






// let obj = {
//     name: "Haider",
//     rollNum: 188528
// }
// let obj2 = { ...obj }
// obj2.name = "Abdul Hannan"
// console.log(obj, obj2);






// let fruits = ["Orange", "Appple", "Mango"]
// let favFruits = [...fruits]
// favFruits.push("WaterMelon")
// console.log(fruits);
// console.log(favFruits);














// Promise





// let treat = new Promise(function (resolve, reject) {
//     isNotesAvail = confirm("Have U Arranged The English Notes?")
//     if (isNotesAvail) {
//         let foodWish = prompt("What Do You Want To Eat?")
//         resolve(foodWish)
//     }
//     else {
//         reject()
//     }
// })


// treat
//     .then(function (foodItem) {
//         console.log(`Thanks Bro, ${foodItem} Is Due On Me`)
//     })
//     .catch(function (error) {
//         console.log(`Tum Se Ye Umeed Nhi Thi, Lakh Di Laanat Tere Moon Te`);
//     })


// let user = {
//     userName: "Abdul Hannan",
//     rollNumber: 188528,
//     fathersName: "Muhammad Saleem",
//     isTeacher: false,
//     subjects: ["JavaScript", "CSS", "HTML"]
// }

// function printStudent(student) {
//     let userName = "Muhammad Ayaan"
//     const {
//         userName: stName,
//         fathersName,
//         rollNumber,
//         ...remainingProps
//     } = student

//     // console.log(remainingProps);
//     let str = `
// Welcome ${stName} Son Of ${fathersName}, Your Roll Number Is ${rollNumber} 
// `
//     console.log(str);
// }

// printStudent(user)









// let car = {
//     carName: 'Mehran',
//     varient: "VXR",
//     model: 2005,
//     features: {
//         isAirConditioned: true,
//         isAutomatic: false,
//         fuelAverage: "best",
//         easyToDhakka: true
//     }
// }


// const {
//     carName,
//     varient,
//     features: {fuelAverage, easyToDhakka}
// } = car


// console.log(carName, varient);
// console.log(fuelAverage, easyToDhakka);




// let fruits = ["Apple", "Banana", "WaterMelon", "Orange", "Mango"]

// const [fruit1, , fruit2, , fruit3] = fruits
// console.log(fruit1, fruit2, fruit3);













// let teamAges = [14, 18, 20, 22, 19, 32];

// let eligibleForTeam = teamAges.every(age => age >= 15)
// let eligibleForgym = teamAges.some(age => age >= 30)

// console.log(eligibleForTeam);
// console.log(eligibleForgym);



















// let user = [
//     { email: "headeralishah@gmail.com", password: "12345678" },
//     { email: "abdullah@gmail.com", password: "12345678" },
//     { email: "muzammil@gmail.com", password: "12345678" },
//     { email: "abdulhannanhere@gmail.com", password: "18852866" }
// ]





// function authenticate(userEmail, userPassword) {
//     return new Promise((resolve, reject) => {
//         let isAuth = user.some((user) => {
//             return user.email === userEmail && user.password === userPassword
//         })
//         if (isAuth) {
//             resolve("Successfully Login")
//         }
//         else {
//             reject("Incorrect email or password")
//         }
//     })
// }



// authenticate("abdulhannanhere@gmail.com", "18852866")
//     .then((success) => {
//         console.log(success)
//     })
//     .catch((error) => {
//         console.error(error)
//     })