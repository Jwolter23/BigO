
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

