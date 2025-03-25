// Array with the Lost numbers
const lostNumbers = [4, 8, 15, 16, 23, 42];

function calculateAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

function removeValue(arr, value) {
    return arr.filter(num => num !== value);
}

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Test
console.log('Numbers from Lost:', lostNumbers);
console.log('Average:', calculateAverage(lostNumbers));
console.log('Min/Max:', findMinMax(lostNumbers));
console.log('Array without value 5:', removeValue(lostNumbers, 15));
console.log('Only even numbers:', filterEvenNumbers(lostNumbers));
