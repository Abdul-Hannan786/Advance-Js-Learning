

// try {
//     aler("Hello")
// }
// catch (error) {
//     console.error(error)
// }

// console.log("Hello Mars")





// function returnNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(1), 2000)
//     })
// }


// returnNum()
//     .then((success) => {
//         console.log(success)
//         return success * 2
//     })
//     .then((success) => {
//         console.log(success)
//         return success * 2
//     })
//     .then((success) => {
//         console.log(success)
//         return success * 2
//     })
//     .then((success) => {
//         console.log(success)
//         // return success * 2
//     })
//     .catch((error) => {
//         console.error(error);
//     })






// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 3000)
// });



// Promise.all([promise1, promise2, promise3])
//     .then((success) => {
//         console.log(success);
//     })








// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("a Promise 4")
//     }, 1000)
// })
// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("b promise 5")
//     }, 3000)
// })


// Promise.race([promise4, promise5])
//     .then((success)=>{
// console.log(success)
//     })





// function fetchUser1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({ userName: 'haider', email: 'header@gmail.com' })
//         }, 1000)
//     });
// }


// async function getUser() {
//     try {
//         let user = await fetchUser1()
//         console.log("next Line")
//     }
//     catch (error) {
//         console.error(error)
//     }
// }

// getUser();


// fetch
// localStorage
// async await catch 
