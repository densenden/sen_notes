let numbers = [2, 4, 5, 1, 6, 9, 8];

function isGreaterThanFive(number) {
    return number > 5;
}

let result = numbers.find(isGreaterThanFive);

console.log(result); // Outputs: 6