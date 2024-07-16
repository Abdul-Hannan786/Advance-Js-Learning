
// Arrow Function


// () => {
//     console.log("Hello");
// }

// const greet = (userName, rollNumber) => {
//     console.log(`Hello ${userName} Your Roll Number Is ${rollNumber}`);
// }
// greet("Haider Ali Shah", 2645)






// let obj = {
//     num: 5,
//     calculateSquare: function (){
//         console.log(this.num * this.num);
//         console.log(this);
//         const anotherFun = () => {
//             console.log(this);
//         }
//         anotherFun()
//     }

// }

// obj.calculateSquare()






// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// allNum.forEach((num, i) => {
//     if(i % 2 !== 0) return

//     console.log(num * num);
// })





// let Fruits = ["Apple", "Mango", "Watermelon", "Orange", "Cherry", "Banana"]

// Fruits.forEach((fruit) => {
//     console.log(fruit.toUpperCase())
// })



// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let squareArr = allNum.map(num => num * num)
// console.log(squareArr);



let fNames = ["Haider", "Abdullah", "Anas", "Aslam", "Akram", "Hannan"]

fNames = fNames.map(fName => {
    let firstChr = fName[0].toUpperCase()
    let restChr = fName.slice(1)
    return `${firstChr}${restChr}`
})
console.log(fNames);