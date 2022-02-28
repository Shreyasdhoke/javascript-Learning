

// // console.log can print something on console

// const { strict } = require("assert")

// // var means we can again assign different value to save variable with "var" declaration
// // let means once we assign we can't again assign to same value if we written "let" with it
// var age=21;
// let ages="21";
// let firstName="Shreyas"

// // const
// const pi=3.14   //This way the value become constant. we cannot make changes later on.

// //Template String { `` }--this will use as an forward string in python like
// console.log(`Hello World! My name is ${firstName} and my age is ${age}`);

// // to change into upper & lower]
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// // To remove space from variable
// var n= "       Shreyas         "
// console.log(n.trim())

// // length method
// console.log(firstName.length);
// console.log(firstName[firstName.length-1]) //  it will print last letter of the word.

// // string Slicing
// console.log(firstName.slice(0,5))   // this will print from 0 to 5
// console.log(firstName.slice(1))    // it will print from this number upto the last


// // conversion of string into number
// console.log(typeof (+ages)) //  This way it will convert into string
// // console.log(typeof number(ages))

// // / conversion of number into string
// console.log(typeof (age+""))//   This way it will convert into numb
// console.log(typeof String(age))


// // undefined
// let lastName;
// console.log(lastName)

// // // null
// // let plastName = Null;
// // console.log(typeof plastName)

// // Boolean & comparison Operator
// let num1=8;
// let num2=9;
// console.log(num1>num2)
// console.log(num1<num2)
// console.log(num1==num2)
// console.log(num1<=num2)

// let a=10
// let b="10"
// console.log(a==b)    //use for value compaison
// console.log(a===b)  //use for  address & value compaison

// console.log(a!=b)
// console.log(a!==b)

// //////If -Else ;

// if (num1>num2){
//     console.log("num1 is greater")
// } else{
//     console.log("num2 is greater")
// }

// // Nested If-else:
// if (num1>num2){
//     console.log("num1 is greater")
// }else{
//     if(num2>a){
//         console.log("num2 is greater")
//     }else{
//         console.log("a is greater")
//     }
// }
// // ---------------------------
// if (num1>num2){
//     console.log("num1 is greater")
// }else if(num2>a){
//     console.log("num2 is greater")
// }else{
//     console.log("a is greater - ")
// }


// //Ternary Operator:
// age=20
// let drink =age>=18?"Coffee":"milk"
// console.log(drink)


// // "AND & OR operator"

// if (age>20 && drink=="Coffee"){
//     console.log("Your age is above 20 so you can drink coffee")
// }else{
// }

// if (age>20 || drink=="Coffee"){
//     console.log("Your age is above 20 so you can drink coffee")
// }else{
// }

// Switch statement--------------------------------------------------------------------
// let day = prompt("enter a number between 0 to 6");
// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 0:
//         console.log("Sunday")
//         break;
// }

//While Loop
// let i = 0;
// let total = 0;
// while (i <= 10) {
//     console.log(i)
//     total = total + i
//     i++
// }
// console.log(total);

//// For Loop
// let total=0
// for(let i=0;i<=10;i++){
//     console.log(i)
//     total=total+i
// }
// console.log(total)

// Break & Continue
// for (let i = 0; i <= 10; i++) {
//     if (i == 4) {
//         break;
//     }
//     console.log("Hello World",i)
// }
// for (let i = 0; i <= 10; i++) {
//     if (i == 4) {
//         continue;
//     }
//     console.log("Hello World",i)
// }
// 

// // Do- While Loop 
// let age=21
// do{
// console.log(age)
// }while(age>22)

// Array-It use to collect the data.just like list in python.
// Its also called Object.
// fruits=["apple","mango","Pinpeapple","banana"]
// console.log(Array.isArray(fruits))

// neww=fruits.pop()  //return the deleted last valuye in array
// console.log(neww)

// fruits.push("Kiwi")    //at the end of array
// console.log(fruits)
// fruits.unshift("papaya") //at the beginning of array
// console.log(fruits)
// fruits.shift()
// console.log(fruits)
// ---------------------------------------------------------------------------------------
// Clone array & concat
// let array1=["shreyas","shruti","meena","Ramkrushna"]
// let array2=array1.slice(0)
// console.log(array2)

// let array3=[].concat(array2)
// console.log(array3)

// let array4=[...array1]    //Spread operator
// console.log(array4)

// console.log(array1==array2)
// console.log(array1==array3)
// console.log(array1==array4)


// let array5=array1.concat("Suhana","Suhas")
// console.log(array5)

// ----------------------------------------------------------------------

// "For" Loop in array"

// let array1=['shreyas', 'shruti', 'meena', 'Ramkrushna', 'Suhana', 'Suhas']
// for (let i=0;i<array1.length;i++){
//     console.log(array1[i])
// }

// ---------------------------------------------------------------------------------------

// // For "OF" loop in array
// let array1=['shreyas', 'shruti', 'meena', 'Ramkrushna', 'Suhana', 'Suhas']
// for(let name of array1){
//     console.log(name)
// } 

// -----------------------------------------------------------------------------

// // For "In" loop in Array
// let array1=['shreyas', 'shruti', 'meena', 'Ramkrushna', 'Suhana', 'Suhas']
// for(let index in array1){
//     console.log(index)
// }

// ------------------------------------------------------------------------------------
// use "const" for creating array

// // While loop in array
// const array1=['shreyas', 'shruti', 'meena', 'Ramkrushna', 'Suhana', 'Suhas']
// let i=0
// while(i<array1.length){
//     console.log(array1[i])
//     i++;
// }

// -----------------------------------------------------------------------------------

//"Array Destrucutring"

// const myArray=["value1","value2","value3","value4"]
// var [mA1,mA2]=myArray
// console.log(mA1,mA2)     //we can directly compare value

// var [mA1, ,mA3]=myArray
// console.log(mA1,mA3)    //we can compare value by leaving earlier value

// var [mA1,...mA2]=myArray
// console.log(mA1,mA2)   //we can compare this into a value and an array

// -----------------------------------------------------------------------------------------

// object ---it's similar like dictionary
// key="hobbies"
// let aa={}
// const person = {name:"Shreyas",age:21}
// person[key]=["gaming",'cricket','exploring']      //This way we can also add into it
// console.log(person)
// console.log(person.name)       //Dot notation
// console.log(person["name"])     //Key Notation   
// // console.log(aa.concat(person.key))
// console.log(person.gender="Male")

// "DOT (.) Notation & key notation"
// "DOT (.) Notation----if key has two word then we can not add into object using dot Notification.


//iterate in object for in loop

// for (let key in person){
//     console.log(person[key])
//     console.log(`${key}:${person[key]}`)
// }

// console.log(Object.keys(person))

// for (let key of Object.keys(person)){
//     console.log(person[key])
// }


// ---------------------computred Properties-----------------
// const key1="num1"
// const key2="num2"

// const value1="name1"
// const value2="name2"

// const obj={}
// obj[key1]=value1
// obj[key2]=value2      //1st method

// console.log(obj)

// const obj1={
// [key1]:value1,         //2nd method
// [key2]:value2
// }
// console.log(obj1)

// ---------------------Spread operator----------------------------
// Spread operator in Array
// const arr=[..."abc"]
// console.log(arr)

// const arr1=[1,2,3]
// const arr2=[4,5,6]
// // const newArray=[...arr1,...arr2]
// const newArray=[...arr1,...arr2,23,45,6,77]
// console.log(newArray)

// // Spread operator in Object---------------
// const ar1r={..."abc"}
// console.log(ar1r)

// const arr3={key1:"value1",key2 :"value2"}

// const arr4={key3:"value3",key4 :"value4"}
// // const newObject={...arr3,...arr4}
// const newObject={...arr3,...arr4,"ss":"asss","ssS":"dferr"}
// console.log(newObject)   // If an objet has more than one key then the latest value will be overwrite for instanceof.


// -------------------------------------Object Destructuring----------------------------------------
// sam destructuring propertie slike Array

// const band = {
//     bandName: "led Zeplin",
//     famousSSone: "Hello World"
// }

// const bandName = band.bandName
// const famousSSone=band.famousSSone

// console.log(bandName,famousSSone)
// ----------or-------------
//[[[[ const {bandName :var1,famousSSone} = band;
// bydefault jis naam se key hoga usi naam se variable bnega..
// console.log(var1,famousSSone) //This used instead of uppers.


// --------------------------_OBJECT INSIDE ARRAY---------------------------


// const users =[{ "ID":1, name: "Shreyas", gender="male" },
//     { "ID":2 , name:"gaurav", gender = "male" },
//     { "ID":3, name:"Pranay" , gender = "male" },
//     { "ID":4, name:"Suvidha", gender = "female" }]

// for (let user in users) {
//     console.log(user)
// }


// ------------------------------FUNCTIONS----------------------------
// Function Declaration------------------
// function user(){
//     console.log("Hello World")
// }
// user()

// function user1(){
//     return "Hello World! we, successfully return the statement."
// }
// console.log(user1())

// const user3=function(){
//     return "You completed 50% part of JS"
// }
// console.log(user3())

// // Arrow Function
// const user2=()=>{return "Arrow function is successfully returned."}
// console.log(user2())

// Adding two value using different function declaratipon.
// user=[5,6]
// a=user[0]
// b=user[1]

// function addto(x,y=9){
//     return x+y
// }
// console.log(addto(a,b))
// console.log(addto(a)) //bydefault it will select 9 as a b's value.

// const addto1=(x,y)=>{console.log(x+y)}
// addto1(a,b)

// WAP TO CHECK WHETHER A NUM IS EVEN OR NOT-------------
// x=2
// x=9
// const isEven=(a)=>{return a%2===0}
// console.log(isEven(x))

// ---------------------------HOISTING-------------
// This concept is not cleared.....


// ---------------------FUNCTION INSIDE FUNCTION----------------------------------

// function myFunc(){
//     function myFunc2(){
//         console.log("Hello World")
//     }
//     return myFunc2
// }
// const aaa=myFunc()
// console.log(myFunc())
// aaa()

// -------------------LEXICAL SCOPE---------------------
// nested function can acess the global varible if local variable is being not declared 

// Lexical Encironment
// const var1="Hello"
// function myApp(){
//     const myGame=()=>{return var1}
//     return myGame()
// }
// console.log(myApp())
// const var1="Hello"
// function myApp(){
//     const var1="LEt's Go!!"
//     const myGame=()=>{return var1}
//     return myGame()
// }
// console.log(myApp())

// ----------------------BLOCK SCOPE vs FUNCTION SCOPE---------------------------

// const & let are the block scope
// var is the function scope & it's global variable declaration

// if we declare "let" and "const" variable in any block that means curly braces{} then we cannot use it into outside the function.
// eg 
// {
//     let firstName="Shreyas"
// }
// console.log(firstName)

// {
//     const firstName="Shreyas"
// }
// console.log(firstName)

// {
//     var firstName="Shreyas"
// }
// console.log(firstName)

// --------------------REST PARAMETER--------------------------------------
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myFunc(1,2,3,4,5,6,7,8)


// ----------------------------PARAMETER DESTRUCTING--------------------------
// const user={
//     name:"Shreyas",
//     id:1,age:21
// }

// function hello({name,id,age}){
//     console.log(name)
//     console.log(id)
//     console.log(age)
// }

// hello(user)


// --------------------CALLBACK FUNCTION-------------------------------
// function my_func2(){
//     console.log("Closing This calklback function")
// }
// function myFunc(callback){
//     console.log("starting this callback function")
//     callback()
// }

// myFunc(my_func2)

// -----------------------------HIGH ORDER FUNCTION-----------------------
// if a function takes a input as a function or return the function or the both then it's called highorder function
// fn input n accept krega & fn return fn krega

// -----------------------------------FUNCTION RETURNING FUNCTION-------------------------------

// function myFunc(){
//     function hello(){
//         console.log("FUNCTION RETURNING FUNCTION is successfuly running")
//     }
//     console.log("Function has started")

//     return hello;
// }

// const ans=myFunc()
// // console.log(
// ans()



// =======================METHOD's IN ARRAY=================================

// 1) forEach Method---------------
// array.forEach(element => {});
// this prevent us from using for in loop
// we will not return any value here generally
// This will also gives index along with ut

// eg 
// const num=[1,2,3,4,5,6,7,8]
// function myFunc(number,index){
//     console.log(index,number*number)
// }

// num.forEach(myFunc)


// num.forEach((number)=>{console.log(number*number)})

// ------------------******-------------------------

// 2)map method--------------------------
// // we will return console.log statement here
// // also, this method will create new Array
// This will also gives index along with ut
// const num=[1,2,3,4,5,6,7,8]

// const aaaa=num.map((number)=>{return 8*number})
// console.log(aaaa)
// // Also, if we will direct print the number then element in new araay will be "undefined".
// // if we print instead of returning the value then value will be printed but bydefault undefined is being stored in new array

// // 3) FIlTER METHOD-----------------------------
// // this method will filter the value from the array.
// // This will also gives index along with ut
// const num=[1,2,3,4,5,6,7,8]
// console.log
// const aaa=num.filter((numnber)=>{return numnber%2===0})
// console.log(aaa)


// 4)REDUCE METHOD^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// const num=[1,2,3,4,5,6,7,8]
// const sum=num.reduce((accumulator,currentValue)=>{return accumulator+currentValue})
// console.log(sum)

// But how it works???let's see!
// accumulator             current             return
// 1                           2                   3
// 3                           3                   6
// 6                           4                   10
// 10                          5                   15
// 15                          6                   21
// 21                          7                   28
// 28                          8                   36


// 5 Sort Method^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// This method make changes to the main string.
// if we are sorting the array having numbers then it will sort the array according to their ASCII value of the particular number.
// Ascii value
// 0	48
// 1	49
// 2	50
// 3	51
// 4	52
// 5	53
// 6	54
// 7	55
// 8	56
// 9	57

// const number=[5,9,1200,410,3000]
// // const newArray=number.sort()
// // console.log(newArray)

// // This array will convert this number into string like 
// // ["5","9","1200","410","3000"]---> conveerting number into ASCII value
// // [53,57,49,52,51]  <------and sort this array instaead of number array.
// // console.log(newArray)  
// // & print like this [1200, 3000, 410, 5, 9]

// // To overcome this problem we used callback function
// // function sortt(a,b){
// //     return a-b
// // }
// // console.log(number.sort(sortt)) 
//             //   OR
// // console.log(number.sort((a,b)=>a-b))         //But how it's doing???
// // console.log(number.sort((a,b)=>a+b))         //1200,410
//                                                 //a-b--->790
// // for ascending order use "a-b"                this is +ve so it'll be 410,1200.
// // for descending order use "a+b"               //5,9----> 5-9---->-4  =="It's negative so it'll be 5,9."


// now Case 2
// const user=["shreyas","abcd","SHREYAS","SHREYAs","abcD","ABCD"]
// console.log(user.sort())

// output:-  ["ABCD","SHREYAS","SHREYAs","abcD","abcd","shreyas"]
// NOPTE: If capital letter ther then captail letter comes first because ther ascii value is less compare to small letter.



// Real Life example of sorting method in Array.

// const userCart=[{productId:1,productName:"Mobile",productPrice:12000},
// {productId:2,productName:"Laptop",productPrice:52000},
// {productId:3,productName:"TV",productPrice:22000},
// {productId:4,productName:"watch",productPrice:2000},]
// console.log(userCart)
// // console.log(userCart.sort((a,b)=>a.productPrice-b.productPrice))
// // console.log(userCart.sort((a,b)=>a.productName-b.productName))

// // another way without changing the main array
// const lowTohigh=userCart.slice(0).sort((a,b)=>a.productPrice-b.productPrice)
// console.log("lowtohig",lowTohigh)
// console.log(userCart)


// 6) FIND METHOD--------------------
// This method is ude to find the element from the array.
// if element is caught then it will return the element & skip the next element.
// Also, if element doesn't exist then it will print "undefined"
// const myArray = ["Hi", "Hello", "Cat", "DoG", "Let's_GO!"]
// function check(number) {
//     return number.length === 3
// }
// const nnn = myArray.find(check)
// console.log(nnn)          //OutPut=cat

// // Real Life Example
// const userCart = [
//     { productId: 1, productName: "Mobile", productPrice: 12000 },
//     { productId: 2, productName: "Laptop", productPrice: 52000 },
//     { productId: 3, productName: "TV", productPrice: 22000 },
//     { productId: 4, productName: "watch", productPrice: 2000 }
// ]
// console.log(userCart)

// console.log(userCart.find((number) => number.productId === 2))
// // OutPut-{productId: 2, productName: 'Laptop', productPrice: 52000}


// 7) EVERY METHOD=----------------------------

// const num=[2,4,6,10,8]                       //callback fuction ---> true/false
// function isEven(number){                     //every Method ------>true/false                                   
//     return number%2===0
// }

// const newww=num.every(isEven)
// console.log(newww)
// const num=[2,4,6,10,8,109]
// function isEven(number){
//     return number%2===0
// }

// const newww=num.every(isEven)
// console.log(newww)
// ====++++++++++++++++SHORTCUT TRICK
// const num=[2,4,6,10,8,10]
// console.log(num.every((number)=>number%2===0))

// Real Life Exam
// const userCart = [
//         { productId: 1, productName: "Mobile", productPrice: 12000 },
//         { productId: 2, productName: "Laptop", productPrice: 52000 },
//         { productId: 3, productName: "TV", productPrice: 22000 },
//         { productId: 4, productName: "watch", productPrice: 2000 }
//     ]
//     console.log(userCart)
//     console.log(userCart.every((a)=>a.productPrice<500000))


// 8) Some Method----------------------
// This method is use to check only one value is present or not
// const num=[2,4,6,10,8,10]
// console.log(num.some((number)=>number%2!==0))

// // Real Life Example
// const userCart = [
//         { productId: 1, productName: "Mobile", productPrice: 12000 },
//         { productId: 2, productName: "Laptop", productPrice: 52000 },
//         { productId: 3, productName: "TV", productPrice: 22000 },
//         { productId: 4, productName: "watch", productPrice: 2000 }
//     ]
//     console.log(userCart)
//     console.log(userCart.some((a)=>a.productPrice>50000))

// 9) Fill Method--------------------------------
// // This make changes to the main array
// // syntax like Fill() value,start,end

// const newArray=new Array(10).fill(0)
// console.log(newArray)
// const num=[1,2,3,4,5,5,6,7,8,9]
// console.log(newArray.fill("kj",1,5))
// console.log(num.fill("kj",1,5))
// // 1---it's index & starting point
// // 5---Ending point (stop one element before end point)

// 10) Splice Method 
// this method is use to insert or delete element in array
// Make changes to the original array
// syntax splice(index,delete,insert)
// Also, It'll return the deleted value

// const itemList=["item1","item2","item3","item4"]
// // DELETE
// const aaa=itemList.splice(2,1)    //2 stands for index and 1 stands for number element wants to remove.
// console.log(itemList)      //Output :- ['item1', 'item2', 'item4']
// console.log(aaa)   //output :- ['item3']  --->Because,it return the deleted value

//// Insert
// const itemList=["item1","item2","item3","item4"]

// const aaa=itemList.splice(2,0,"hello World")    //2 stands for index and 0 stands for number element wants to remove.
// console.log(itemList)      //Output :- ['item1', 'item2', 'hello World', 'item3', 'item4']


// Delete & Insert both are together
// const itemList = ["item1", "item2", "item3", "item4"]

// const aaa = itemList.splice(2, 1, "hello World BOB")    //2 stands for index and 1 stands for number of arguments wants to remove.
// const aaaa = itemList.splice(2, 2, "hello World", "hello World")         //2 stands for index and 2 stands for number of arguments wants to remove.
// // In this it will delete two value and insert this two value instead of them
// console.log(itemList)        //Output :- ['item1', 'item2', 'hello World', 'hello World']
// console.log(aaa)             //Output :- ['item3']
// console.log(aaaa)            //Output :- ['hello World BOB', 'item4']


// ---------------------------------------------------ITERABLE & array like object----------------------------------
// ITERABLES---THOSE DATATYPE JISME HAM FOR LOOP LAGA SKTE HAI.
// EG  --- String,ARRAY,SET 
// object is not an iterable

// ** Array Like Object 
// those datatype who has length property are called array likr objrct
// Also, jinko hm index se access kr skte hai wo bhi.
// 33333333QUESTION
// string is an array like object ???
// answer YES. reason is listed above



// ==================================================================SET"S==================================================================
// store data in placeholder{}.
// No index based access
// due to which no order is guaranteed.
// it gives only unique items only. Not duplicates.


// const mySet=new Set()    //Set delcaration syntax

// const mySet=new Set([1,2,3,4,5])
// console.log(mySet)

// const mySet=new Set([1,2,3,4,5,5,6,7,8,88,8,9,1])
// console.log(mySet)

// // console.log(mySet[2])    //output---undefined Because of No index based access due to which no order is guaranteed.

// const my= new Set("abc")
// console.log(my)     //Output:- {'a', 'b', 'c'}

// // MEthods in SETS..
// mySet.add(110)
// console.log(mySet)

// const itemList =["item1", "item2", "item3", "item4"]
// console.log(itemList)

// const mySet=new Set() 
// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// console.log(mySet)
// mySet.add(["item1", "item2", "item3", "item4"])    //it's creating another array does't matter it's element
// mySet.add(["item1", "item2", "item3", "item4"])    ////it's creating another array does't matter it's element
// // above both the these array will be added because these two array are different irrespective of element
// console.log(mySet)
// mySet.add(itemList)       //add only one time becaus of it's declaration
// mySet.add(itemList)       //add only one time becaus of it's declaration
// console.log(mySet)



// // ----has( method)
// console.log(mySet.has(1))

// //Using for loop in set
// for (let i of mySet){
//     console.log(i)
// }
//// We can't use length function in set.



// QQQQQQQ How to extract uique element from array
// const myArray=[1,2,3,4,5,6,10,8,8,9,1,2,2,3,4]

// const mySet=new Set(myArray)

// console.log(mySet)

// // // QQQQQQQQ To calculate number of element in set using for --of rule.
// // var count=0
// // for(let num of mySet){
// //     count=count+1
// //     console.log(num)
// // }
// // console.log(count)

// // QQQQQQQQ To calculate number of element in set using for --in rule.
// var count=0
// for(let num in mySet){
//     count=count+1
//     console.log(num)       //output is zero because index doesn;
// }
// console.log(count)


// -------------------------------MAP DATA STRUCTURE----------------------------------------------------------------------------------------------------
//mAP IS AN ITERABLE 
// STORED DATA IN ORDERED FASHION
// STRED BY VALUE PAIR (LIKE OBJECT)
// DUPLICATE KEYS ARE  OT ALLOWED LIKE OBJECTS
//



//DIFFN BETWN "mAP" & "OBJECTS"
//object can store key in the form string or symbol only. whilke object can store key in form of datatype
// we can put for of loop in map but not in object.

// const userCart ={1:"one", productId: 4, productName: "watch", productPrice: 2000 }
// console.log(userCart["productId"])          //--->4
// console.log(userCart["productName"])        //--->watch
// console.log(1)                              //--->1
// console.log("1")                            //--->1



// syntax for creaating Map
// const newwww=new Map()
// // console.log(newwww)
// newwww.set("firstName","Shreyas")
// newwww.set("lastName","Dhoke")
// newwww.set("age",22)
// newwww.set(1,"Hello_WorlD")
// console.log(newwww)

// console.log(newwww.keys())            //This will print the keys set

// for(let string of newwww.keys()){
// console.log(string , typeof string)               //----> it woill print the object in array
// }                       
//output 
// firstName string
//  lastName string
//  age string
//  1 'number'
// for(let key1 of newwww){
//     console.log(key1)              //----> it woill print the object in array
// } 
// output  ['firstName', 'Shreyas']
// ['lastName', 'Dhoke']
// ['age', 22]
// [1, 'Hello_WorlD']

// for(let [string,string1] of newwww){          //using Array destructor        
//     console.log(string,string1)               //----> it woill print the object in array
// } 
// output :-  firstName Shreyas
//  age 22
//  1 'Hello_WorlD'


// console.log(newwww.get("firstName"))


// eg
// const person1={"firstName":"shreyas","lastName":"Dhoke"}

// const newMap=new Map()
// newMap.set(person1,{age:22,"BirthPlace":"Nagpur"})
// console.log(newMap)
// console.log(newMap.keys())
// console.log(newMap.get(person1))       //{age: 22, BirthPlace: 'Nagpur'}
// console.log(newMap.get(person1).age)               //22
// console.log(newMap.get({"firstName":"shreyas","lastName":"Dhoke"}))




// ///////////////////////////////Clone Using Object assign/////////////////////////
// const obj={key1:"value1",key2:"value2"}

// const obj2=obj

// console.log(obj)           //{key1: 'value1', key2: 'value2'}}
// console.log(obj2)          //{key1: 'value1', key2: 'value2'}}
// obj.key3="value3"
// console.log(obj)           //{key1: 'value1', key2: 'value2', key3: 'value3'}
// console.log(obj2)          //{key1: 'value1', key2: 'value2', key3: 'value3'}

// To overcome this problem
// const obj={key1:"value1",key2:"value2"}

// const obj2={...obj}

// console.log(obj)           //{key1: 'value1', key2: 'value2'}}
// console.log(obj2)          //{key1: 'value1', key2: 'value2'}}
// obj.key3="value3"
// console.log(obj)           //{key1: 'value1', key2: 'value2', key3: 'value3'}
// console.log(obj2)          //{key1: 'value1', key2: 'value2'}





// ---------------------------Option of chaining   "(?)"----------

// const person1={"firstName":"shreyas","lastName":"Dhoke","address":{Number:1234}}
// console.log(person1.firstName)        //shreyas
// console.log(person1.lastName)         //Dhoke
// console.log(person1.address.Number)     //1234
// console.log(person1.address)           //{Number: 1234}

// // if we make comment to address then run this. . . . . . 


// const person1={"firstName":"shreyas","lastName":"Dhoke","address":{Number:1234}}
// console.log(person1.firstName)        //shreyas
// console.log(person1.lastName)         //Dhoke
// console.log(person1.address)            //undefined
// console.log(person1.address.Number)     // Cannot read properties of undefined (reading 'Number')

// to overcome thissituation
// use   
// console.log(person1?.address?.Number)


// ??????????Methods

// const person1={"firstName":"shreyas","lastName":"Dhoke",about:function(){console.log("Hello world")}}
// console.log(person1)          //{firstName: 'shreyas', lastName: 'Dhoke', about: ƒ}
// console.log(person1.about)       //ƒ (){console.log("Hello world")}
// person1.about()
// console.log(person1.about())
// function func(){
//     console.log(this)
//     console.log(`my name is ${this.firstName} & lastname is ${this.lastName}`)
// }

// const person1={
//     "firstName":"shreyas",
//     "lastName":"Dhoke",
//     about:func}

//     const person2={
//         "firstName":"gaurav",
//         "lastName":"Sewatkar",
//         about:func}
// console.log(person1)    //{firstName: 'shreyas', lastName: 'Dhoke', about: ƒ}
// person1.about()        //{firstName: 'shreyas', lastName: 'Dhoke', about: ƒ}
// 01.js:974 my name is shreyas & lastname is Dhoke

// console.log(person1.about())

// console.log(person2)
// person2.about()        //{firstName: 'gaurav', lastName: 'Sewatkar', about: ƒ}

// console.log(this)    // this will open window object
// console.log(window)    // this will open window object

// function myFunc(){
//     console.log("Hello world")
// }
// myFunc()                       //Hello world

// function myFunc(){
//     console.log(this)
// }
// window.myFunc()
// myFunc()

// to overcome this problem "use strict" mode.

// function myFunc(){
//     console.log(this)
//     }
// myFunc()
// myFunc()



// ------------------------MethODS IN FUNCTION-----------------------------------
//call

const person1 = {
    "firstName": "shreyas",
    "lastName": "Dhoke",
    about: function () {
        console.log(`Hello World!, This is ${this.firstName} having age ${this.age}`)
    }
}
const person2 = {
    "firstName": "Pranay",
    "lastName": "Atkare",
    // about: function () {
    //     console.log("Hello world")
}
console.log(person1)                //{firstName: 'shreyas', lastName: 'Dhoke', about: ƒ}
console.log(person2)                //{firstName: 'Pranay', lastName: 'Atkare'}}
person1.about()                     //Hello World!, This is shreyas having age undefined

person1.about.call(person1)         ///Hello World!, This is shreyas having age undefined
person1.about.call(person2)         //Hello World!, This is Pranay having age undefined
person1.about.call()                //Hello World!, This is undefined having age undefined