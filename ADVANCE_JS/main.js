//SCOPES
//1.Block Scope
if(true){
    const myname="aaisha"
    console.log(myname)
}
//2.Function Scope
function name(){
    const myname="itachii"
    console.log(myname)
}
name()
//3.Global Scope
let q=20
function numb(){
    console.log(q)
}
numb()

//Nested function scope
let a=20
function num(){
    let b=40
    function num1() {
        c=60
        console.log(a,b,c)
    }
    num1()
}
num()

//CLOSURES
function outer(){
    let num=0 //scope variable initialize to 0
    function inner(){//line 35 and 36 together form a closure
        num++
        console.log(num)
    }
     return inner //return inner func as well as its scope
}
const fn=outer()
fn()
fn()