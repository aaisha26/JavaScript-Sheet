console.log("hellooooo")
const person={
    firstname: "aaisha",
    lastName:"perveen",
    age:19,
}
console.log(person.firstname)
//condition check
const iseven= 10%2 ===0 ? "number is even" : "number is odd"
console.log(iseven)
//implicit conversion
console.log("4"+ 3)
console.log(true+"2")
console.log("2"-"4")
console.log("5"*"2")
console.log("5"-true)
console.log(5-true)
console.log(5+undefined)
//explicit conversion
console.log(Number(null))
//conditional statements
//if elseif and else statement
const num=0
if(num>0){
    console.log("number is positive")
}
else if(num<0){
    console.log("number is negetive")
}
else{
    console.log("number is zero")
}
const color="black"
//switch statement
switch(color){
    case "black":
        console.log("color is black")
        break
    case "red":
        console.log("color is red")
        break
        default:
            console.log("not valid")
}
//looping code
//for loop
/* for(initializer;condition;final expression){
    code to run
}*/
//table of 5
for(let i=1;i<=10;i++){
    let product=5*i
    console.log(product)
}*/
//while loop
/*intializer
while(condition){
    code to run
    final rxpression
}*/
//odd numbers
let i=1
while(i<=5){
    console.log("hey there"+i)
    i++
}
// d0 while loop
/*intializer
do{
    code to run
    final rxpression
 } while(condition)*/
let i=0
do{
    console.log("hey there"+i)
    i++
}while(i<=5)
//for of loop
/*for(const item of array){
    code to run
}*/

const array=[1,2,3,4,5,6]
for(const num of array){
    console.log("heyy"+num)
}