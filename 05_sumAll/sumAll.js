const sumAll = function(int1, int2) {
    if(int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2))
        return "ERROR";
    let sum = 0;
    if(int1 > int2) {
        const aux = int1;
        int1 = int2;
        int2 = aux;
    }
    for(let i = int1; int1 <= int2; int1++) {
        sum += int1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
