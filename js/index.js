// Iteration 1: Names and Input
// 

let hacker1 = 'Pippin'
let hacker2 = 'Gandalf'

console.log(`"The driver's name is ${hacker1}"`)
console.log(`"The navigator's name is ${hacker2}"`)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}


// Iteration 3: Loops
let hacker1Caps = ' '
for (let i of hacker1){
    hacker1Caps +=  i.toUpperCase() + " "
}
console.log(hacker1Caps)


let hacker2Rev = null
for (let x = hacker2.length; x = 0; x--){
    console.log(x)
}