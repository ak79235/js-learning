function product(a, b) {
    return a * b;
};
console.log(product(2, 3));

// Returning multiple values
function subjects() {
    let first='Maths',
        second='English',
        third='Science';
    return {
        first,
        second,
        third
    };
    }
let {first, second, third} = subjects();
console.log(first, second, third);