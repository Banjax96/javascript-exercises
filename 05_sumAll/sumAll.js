const sumAll = function(start, stop) {
    let sum = 0;

    if (start >= 0 && stop >= 0 && Number.isInteger(start) && Number.isInteger(stop)) {
        if (start < stop){
            for (let i = start; i <= stop; i++){
                sum += i;
            }
        }
        else if (start > stop){
            for (let i = stop; i <= start; i++){
                sum += i;
            }
        }
    }
    else {
        sum = "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
