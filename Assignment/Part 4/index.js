function processArguments(primaryFunction, ...args) {
    return primaryFunction(...args);
}

function multiply(x, y) {
    return x * y;
}

console.log(processArguments(multiply, 3, 4)); // 12