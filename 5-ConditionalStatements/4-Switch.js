let age = 18;

switch (true) {
    case age < 18:
        console.log('You are not eligible to vote');
        break;
    case age >= 18:
        console.log('You are eligible to vote');
        break;
    default:
        console.log('Invalid age');
}
