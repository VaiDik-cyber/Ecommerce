// var a = 10;

// const c = 30;
// // c = 50;

// console.log(a);
// console.log(b);
// console.log(c);
// let b;
// // b = 20;
// let i = 0;
// function sample() {
//   for (let i = 0; i <= 5; i++) {
//     let j = 0;
//     let k = 0;
//     setTimeout(() => console.log(i), 1000);
//   }
//   console.log(i);
//   console.log(j);
//   console.log(k);
// }
// sample();

// async ()=>{
//     try{
//         await
//     }
//     catch{

//     }
// }

// async function z() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("a");
//       resolve();
//     }, 2000);
//   });
// }

// // z().then(() => {
// //   console.log("b");
// // });

// async function y() {
//   await z();
//   console.log("b");
// }
// y();

// const arr = [1, 2, 3];
// // console.log(Array.isArray(arr));

// let a = [1, 2, 3, 4];

// if (a.constructor === Array) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let a = new Promise((resolve, reject) => {
//   reject({ msg: "Something went wrong" });
// });

// a.then((resolve) => console.log(resolve)).catch((err) => console.log(err.msg));
// async function x() {
//   //    delay(1000);
//   async function z() {
//     setTimeout(() => {
//       console.log("first");
//     }, 1000);
//   }
//   await z();
//   console.log("second");
// }
// x();
// function sum() {
//   console.log("vv");
// }

// sum();
// function sum() {
//   //   for (let i = 0; i < arguments.length; i++) {
//   //     console.log(arguments[i]);
//   //   }

//   return arr.filter((element) => {
//     // console.log(element);

//     if (element % 2 === 0) {
//       return element;
//     }
//   });
// }
// let arr = [1, 2, 3, 4];
// console.log(sum(arr));
// // console.log(arr);
// // sum(1, 2, 3, 4);

// const obj = {
//   name: "vaidik",
//   age: 23,
//   xy: () => {
//     console.log("hello");
//   },
// };
// console.log(Object.keys(obj).length);

// let x = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("hii");
//   }, 3000);
// });
// console.log(x);
// setTimeout(() => {
//   console.log(x);
// }, 1000);

// async function fun1() {
//   console.log("a");

//   console.log("b");

//   await new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("c");
//       res();
//     }, 1000);
//   });

//   await new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("d");
//       res();
//     }, 1000);
//   });

//   console.log("e");
// }

// fun1();

// let a = "vaidik";
// let b = parseInt(a + 20);
// console.log(b);

// let y = function () {};

// function x() {
//   //rest
//   //   arr.map((i) => {
//   //     console.log(i);
//   //   });
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// x([1, 2, 3], [11, 2, 3]);

// let arr = [1, 2, 3, 4];
// let arr2 = [...arr]; //sprad

// const add = function (x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// };
// // const add5 = add(5);
// // console.log(add5(3));
// console.log(add(5)(3)(3));

// await delay(6000);

// async function x() {
//   await new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("first");
//       res();
//     }, 1000);
//   });

//   console.log("second");
// }

// x();

// let str = "235";
// let str1 = BigInt(84792754724579234757234495892);
// let a = 2;
// console.log(str1);
// let str2 = parseInt(str) + a;

// console.log(str2);
// const username = "vaidik";
// // let username = prompt("Enter your name");
// const displayName = username ?? "Guest";

// console.log(displayName); // Output: "Guest"
// function* numberGenerator() {
//   let num = 1;
//   while (true) {
//     yield num;
//     num++;
//   }
// }

// // Create an instance of the generator
// const generator = numberGenerator();

// // Generate numbers using the generator
// console.log(generator.next().value); // Output: 1
// console.log(generator.next().value); // Output: 2
// console.log(generator.next().value); // Output: 3
// console.log(generator.next().value);
