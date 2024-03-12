const repeatString = function(string, num) {
if (Math.sign(num) === -1) {
    return "ERROR";
} else {
return string.repeat(num);
}
};

// Do not edit below this line
module.exports = repeatString;

// console.log(repeatString("hello", -1));