// Iteration 1: Names and Input
// 

let hacker1 = 'aPippin'
let hacker2 = 'aGandalf'

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
let hacker1Caps = ''
for (let i of hacker1){
    hacker1Caps +=  i.toUpperCase() + " "
}
console.log(hacker1Caps)

let hacker2Rev = ''
for (let x = hacker2.length -1; x >= 0; x--){
    hacker2Rev += hacker2[x]
}

console.log(hacker2Rev)

// https://thewebdev.info/2021/05/15/how-to-compare-2-strings-alphabetically-for-sorting-purposes-with-javascript/
// http://www.javascriptkit.com/javatutors/arraysort.shtml

let lexicalOrder = [hacker1, hacker2]

const sorted = lexicalOrder.sort((a, b) => a.localeCompare(b))

// compared the sorted with the elements of the array

if (sorted[0] === hacker1 && sorted[1] != sorted[0]){
    console.log("The driver's name goes first.")
} else if (sorted[0] === hacker2 && sorted[1] != sorted[0]){
    console.log("Yo, the navigator goes first definitely.")
} else if (sorted[0][0] === sorted[1][0]) {
    console.log("What?! You both have the same name?")
}

//at this point I believe i am complicating, i don't know how to get the third option


//let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//trying sat morning




