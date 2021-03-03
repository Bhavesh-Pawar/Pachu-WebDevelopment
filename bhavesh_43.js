console.log("This is a function tutorial")

// function greet(name,greetText="Welcome to JS Tutorials") //Default Parameters
// {
//     console.log(greetText + " " + name);
//     console.log(name + " is a good boy.");
// }
// name="Harry"
// name1="Bhavesh"
// name2="Aabhash"
// greetText="Good Evening!"
// greet(name,greetText)
// greet(name1,greetText)
// greet(name2,greetText)
// greet(name3="Mohan")

// A function always return "Undefined" if there is no return statment
function add(a,b) 
{
    return a+b;   
    //Code after return never execute 
    console.log("Hi")
}
console.log(add(10,15));
console.log(add(1,15));
console.log(add(10,1));