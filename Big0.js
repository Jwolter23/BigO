
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