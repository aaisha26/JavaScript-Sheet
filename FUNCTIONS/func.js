//example 1
function greet(){
    console.log("wake up to reality")
}
greet()

//example 2
function intro(names){
    console.log("heyyy " + names)
}
intro("aaish")
intro("sam")
intro("zain")

//example 3
function add(a,b){
    return a+b
}
const sum=add(5,5)
console.log(sum)

//add 2 number using arrow function
/*const arrowsum=(a,b) =>{
    return a+b
}
const sum1= arrowsum(7,7)
console.log(sum1)*/

const arrowsum=(a,b) =>a+b
const sum1= arrowsum(7,7)
console.log(sum1)

