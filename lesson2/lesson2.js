let counter = 0;
while (counter < 10) {
    console.log(`The while counter is ${counter}`);
    counter++;
}

// Basic for loop
for (let i = 0; i < 10; i++) {
    console.log(`The count is ${i}`);
}

let rainbow = ["Red", "Green", "Orange"];

// Add elements to array using PUSH
rainbow.push("Yellow");
rainbow.push("Violet");
// Basic for loop
for (let i = 0; i < rainbow.length; i++) {
    console.log(`The rainbow colour  is ${rainbow[i]}`);
}

//Remove an an element from an array
rainbow.pop();

//remove first item from start of the array
rainbow.shift();

for (let i = 0; i < rainbow.length; i++) {
    console.log(`The rainbow colour  is ${rainbow[i]}`);
}

// For / of loop
for (const colour of rainbow) {

    console.log(`The for of rainbow colour  is ${colour}`);

}

rainbow.forEach(element => console.log(element)); //lamba expresion


//call function
const array1 = ['a', 'b', 'c'];
listItemsExample(array1)

function listItemsExample(items) {
   

    items.forEach(element => console.log(element));

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

}
