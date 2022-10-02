var a = 100;
{
    let a = 10;
    // block scoped
}
console.log(a);

let x= 10;
{
    let x= 100;
}
// This is not shadowing 
console.log(x);

// var is functional scoped so you can't access it outside it
var a =100;
function fun(){
    var a =500;
}
fun();
console.log(a);

// Block scope also follows lexical scope
const p = 30;
{
    const p = 30;
    {
        const p = 40;
        {
            const p = 50;
            console.log(p)
        }
        console.log(p)
    }
    console.log(p)
}
console.log(p)
