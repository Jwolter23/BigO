
/*
What is good code?

    Code that is Readable
    Code that is Scalable


*/

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(100).fill('nemo');

function findNemo(array) {
    // let t0 = performance.now()
    for (let i = 0; i <array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
    // let t1 = performance.now()
    console.log("Call to find nemo took " + (t1-t0) + " milliseconds")
}

findNemo(large)

// How long does it take to run a problem or task = runtime
// Can use performance.now to check 
// from 1 to 10 not a big change but as our inputs icrease our runtime increases (becomes slower)

/*
BIG O COMPLEXITY CHART

Horrible: O(n!), O(2^n), O(n^2)
Bad: O(n log n)
fair: O(n)
Good / Excellent: O(log n), O(1)

*/


// 0(n)
// IF we have 4 items in array we have 4 operations, 5 is 5 operations, 6 is 6 operations and so on
// Crates a linear line as inputs increase operations increase
// Therefore the finding nemo notation is 0(n) --> Linear Time

function findNemo(array) {
    
    for (let i = 0; i <array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
}

findNemo(large)

// O(1)

//Ex:

function compressFirstBox(boxes){
    console.log(boxes[0])
}

// 0(1) --> Constant Time
// No matter how many boxes are in the array it'll always grab the the first one
// Only one operation to do so its constant
// On a graph looks like a straight horizontal line

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]);  // 0(1)
    console.log(boxes[1]);  // 0(1)
}

logFirstTwoBoxes(boxes) // total = 0(2) still a constant time 

// Big 0 challenge

function funChallenge(input) {
    let a = 10; // 0(1)
    a = 50 + 3; // Reassigning a 0(1)

    // for (let i = 0; i <input.length; i++) { // 0(n)
    //     anotherFunction(); // O(n)
    //     let stranger = true; // O(n)
    //     a++; // 0(n)
    // }
    return a; // O(1)
}
// 3 O(1) 4 O(n) --> simplified to O(n)
// Big O(n)

funChallenge()

// RULE BOOK

/*
1. Worst Case

2. Remove Constants

3. Different terms for inputs

4. Drop Non Dominants

*/


// RULE 1

// Worst Case

function findNemo(array) {
    
    for (let i = 0; i <array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found NEMO!');
            break;
        }
    }
}

findNemo(everyone)

/*
We can make our function more efficient
    the code is going to run 10 times even though nemo is in the 4th spot in the array
    by adding a break; it will stop once nemo is found

When it comes to Big O however Big O only cares about the worst case scenerio
    So the worst case here is nemo in the 10th spot
*/

// RULE 2

// Drop the Constants in Big(O) notation ex: O(2n) -> O(n)


// RUL2 3
// Different terms for inputs

function compressBoxesTwice(boxes, boxes2){
    boxes.forEach(function(boxes) {
        console.log(boxes)
    })

    boxes2.forEach(function(boxes) {
        console.log(boxes)
    })
}

//O(a + b) not nested different arrays


// Log all pairs of array
    let box = ["a","b","c","d","e"];

    function logAllPairsOfArray(array){
        for (let i = 0; i <array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                console.log(array[i], array[j])
            }
        }
    }

// logAllPairsOfArray(box)

// What is the BigO of this?
// Nested Loops we use multiplication so it becomes O(n * n) -> O(n^2) = Quadratic time 


//RULE 4
// Drop Non Dominants

function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are the numbers:');
    numbers.forEach(function(number) {
        console.log(number)
    })

    console.log('and these are their sums:')
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber)
        })
    })
}
printAllNumbersThenAllPairSums([1,2,3,4,5])

//O(n + n^2) drop non dominant terms so -> O(n^2)


// O(n!) -> Factorial Time = really bad and rarely encountered
// Adds a nested loop for every element

/* WHAT IS GOOD CODE?

1. Readable
2. Scalable - Speed and Memory

3 Pillars of Code

    Readable
    Speed (Time Complexity)
    Memory (Space Complexity)


*/


// SPACE COMPLEXITY

/* 
What causes space complexities?

1. variables
2. data structures
3. Function calls
4. Allocations

*/

function boooo(n) {
    for (let i = 0; i < n.length; i++){
        console.log('booo!!')
    }
}

boooo([1,2,3,4,5])

/* 
Time Complexity O(n)
Space Complexity O(1)
*/

function arrayOfHiNTimes(n){
    let hiArray = []
    for (let i = 0; i < n; i++){
        hiArray[i] = 'hi'
    }
    return hiArray
}

arrayOfHiNTimes(6)

// Space Complexity O(n) -> Since we created an array that is a data structure and each i of the array adds additional space


// EXERCISE

/*
    Find 1st tweet and Nth tweet (last)
    
*/
const mineArray = [{ 
    tweet: 'hi',
    date: 2012
}, {
    tweet:'my',
    date: 2014}, 
    {tweet:'teddy',
date: 2018}]

//O(n^2) because of nested loops to grab the data

'heuhrkrtkelkklekrle'.length // Space complexitie depends on the language for JS O(1)

array2 = ['nemo', 'dory', 'rando']

const findNemo3 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('Found HIMMMM!')
        }
    })
}

findNemo3(array2)

// Good example of a for each



// HOW TO SOLVE INTERVIEW PROBLEMS 

/* 
    What are companies looking for?

    1. Analytical Skills -> How do you solve and talk through the problem
    2. Coding Skills
    3. Technical Skills -> Do you understand the fundamentals

*/

/* 
Data Structures:
    Arrays  Tress
    Stacks  Tries
    Queues  Graphs
Linked Lists    Hash Tables

Algorithms:
    Sorting
    Dynamic Programming
    BFS + DFS(Searching)
    Recursion

*/

