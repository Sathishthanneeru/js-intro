// let arr=[]
// arr[0]=1
// arr[1]=2
// console.log(arr)

// let arr=[1,2,3]
// console.log(arr)

// let arr=new Array(1,2,3,45)
// console.log(arr)

// let arr=[1,2,3,4,"dfhghj"]
// op=arr.toString();
// console.log(op)

// let arr=[1,2,3,4,5,9,8,0,7]
// op=arr.at(5)
// console.log(op)

// let arr=[1,2,3,4,5]
// op=arr.join("+")
// console.log(op)

// let arr=[1,2,3,4,5]
// op=arr.pop()
// console.log(op)

// let arr=[1,2,3,4,5,6]
// op=arr.push(7,8,"dfgjhkj")
// console.log(op)

// let arr=[10,2,3,4,5,6]
// op=arr.shift()
// console.log(op)

// let arr=[1,2,3,4,5,6,8,9]
// op=arr.unshift()
// console.log(op)

// let arr=[1,2,3,4,5,6]
// op=arr.slice(3)
// console.log(op)

// let arr=[1,2,3,4,5,6,7,8,9]
// op=arr.splice(2,4)
// console.log(op)

// let arr=["sathush","sonu","radha","sonu"]
// op=arr.includes("sonu")
// console.log(op)

// let arr1=[1,2,3,4,5,6]
// op1=arr1.lastIndexOf(4)
// console.log(op1)

//  let arr1=[24,56,89,100,123];

//  let op1=arr1.find(function(value,index,arr){
//     return value>67
//  })

//  console.log(op1)

// let arr = [1, 2, 3, 4, 5, 6];
// let op=arr.find((x,y,z)=>x>5)
// console.log(op)

// let arr=["hi","sathish","welcome","js",120,1500]
// let op=arr.find(function(value,index,arr){
//     return value.length>1
// })
// console.log(op)

// let arr=[123,345,567,789]
// let op=arr.findIndex(function(value,index,arr){
//     return value>500
// })
// console.log(op)

// let aoo=[
//     {
//             id: 1,
//             title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//             price: 109.95,
//             description:
//               "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//             category: "men's clothing",
//             image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//             rating: {
//               rate: 3.9,
//               count: 120,
//             },
//           },
//           {
//             id: 2,
//             title: "Mens Casual Premium Slim Fit T-Shirts ",
//             price: 122.3,
//             description:
//               "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//             category: "men's clothing",
//             image:
//               "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//             rating: {
//               rate: 4.1,
//               count: 259,
//             },
//           },
//           {
//             id: 3,
//             title: "Mens Cotton Jacket",
//             price: 155.99,
//             description:
//               "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//             category: "men's clothing",
//             image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//             rating: {
//               rate: 4.7,
//               count: 500,
//             },
//           }
// ]
// let op=aoo.findIndex(function(value,index,arr){
//     return value.price>2
// })
// console.log(op)

// let arr = [5, 6, 7, 78, 12, 34, 9, 10];
// let op = arr.findLastIndex(function (value,index, arr) {
//   return value > 20;
// });
// console.log(op);

// let arr = [2, 4, 6, 8, 9, 2, 3];

// let op = arr.findLastIndex(function (value,index, arr) {
//   return value > 5;
// });
// console.log(op);

// let arr=["hi","sathish","welcome","hi","hyd"]
// let op=arr.map(function(value,index,arr){
//     return value=="hi"

// })
// console.log(op)

// let arr=["hi","sathish","welcome","to","hyd"]
// op=arr.map((x ,y,z)=>{
//     return x.slice(0,-1)+x.at(-1).toUpperCase()

// })
// console.log(op)

// let fruits = ["apple", "banana", "orange", "grephs"];
// fruits.splice(1, 2);
// console.log(fruits);

// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// fruits.splice(1, 2);
// console.log(fruits);

// let arr=["hi","hello","12"];
// let op=arr.forEach((value)=>{return "js"+value});
// console.log(op);

// let arr=[12,3,4,5,6,78,90]
// let op=arr.filter((x,y,z)=>{
//     return x>12
// })
// console.log(op)

// let arr=["hi","sathihs","how","are","you"]
// let op=arr.filter((x,y,z)=>{
//     return x.length>2
// })
// console.log(op)

// let arr = ["hi","Hi","Sathush", "sathihs", "how","How", "are", "you","You"];
// let op = arr.filter((x, y) => {
//   return x[0] == x[0].toUpperCase();
// });
// console.log(op);

// let arr = ["Java", "java", "Html", "css", "Css", "React", "react"];
// let op = arr.filter((x, y) => {
//   return x[0] == x[0].toUpperCase();
// });
// console.log(op);

// let arr=[12,3,4,5,66,77,88]
// let op=arr.reduce(function(x,y,z){
//     console.log(x,y)
//     return "hello"
// })
// console.log(op)

// let total;
// let arr = [3, 5, 2, 4, 7, 9];
// let op = arr.reduce((x, y , z) => {
// //   console.log(x,y);
//   return total+arr;
// });
// console.log(op)

// let arr=[12,34,56,67,89]
// let op=arr.every(function(x,y){
//     return x>100
// })
// console.log(op)

// let arr=[12,43,,56,78,90]
// let op=arr.some((x,y,z)=>{
//     return x>100
// })
// console.log(op)

// let arr=[12,34,5,6,78,90]
// let op=arr.sort((a,b)=>{
//     return b-a
// })
// console.log(op)

// let arr=[12,3,4,5,6,7]
// let op=arr.reverse()
// console.log(op)

// let str="sathish"
// let op=str.split(" ").reverse().join("")
// console.log(op)

// let text = "hi sathish how are you ";
// let op = text.split("");
// console.log(op);

//OBJECT METHODS

// let obj1={"name":"sathish"}
// let obj2={"place":"hyd"}
// let op=Object.assign(obj1,obj2, {"gender":"male"},{"place":"sec"},{"age":"12"})
// console.log(op)

// console.log(obj1)
// let entries=Object.values(obj1)
// console.log(entries)

// let len=Object.values(obj1).length;
// console.log(len);

// let obj1 = { name: "sathish", place: "hyd", age: "25" };
// Object.seal(obj1);
// console.log(obj1);
// obj1["age"] = 30;
// delete obj1.age;
// Object.assign({ gender: "male" });
// console.log(obj1);

// let c = Object.isSealed(obj1);
// console.log(c);

// let obj={"name":"sathish","place":"hyd","age":"90"}
// // Object.freeze(obj)
// Object.gender="male"
// delete obj.place
// console.log(obj)

// let k=Object.isFrozen(obj)
// console.log(k)

//NUMBER METHODS

// let num= new Number(90);
// console.log(typeof num);

// let num=new Number(25);
// console.log(typeof num)

// let num=123
// let k=num.toString();
// console.log(typeof k)

// let num=11.39
// let k=num.toPrecision(3)                       //////dout
// console.log(k)

// let num=1.77777
// let k=num.toFixed(1)
// console.log(k)

// let num="123.234"
// let op=parseInt(num)
// console.log(op)

// let op2=parseFloat(num)
// console.log(op2)

// let op="123vhdsvh";
// console.log(isNaN(op))

// let x=Math.PI
// console.log(x)

// let x=Math.sqrt(125);
// console.log(x)

// let x=Math.round(123.90)
// console.log(x)

// let x=Math.ceil(1425.12345678)
// console.log(x)

// let x=Math.floor(-1323.19)
// console.log(x)

// let x=parseInt(-23456.34567)
// console.log( typeof x)

// let x=Math.trunc("-234567.1sfdghj")
// console.log(x)

// let z=parseInt("11AB",16);                                                    //dout
// console.log(z)

// let x = Math.random() * 100000;
// let otp = Math.floor(x);
// if (otp < 100000) {
//   console.log(otp + 100000);
// } else console.log(otp);
