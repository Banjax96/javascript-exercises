const removeFromArray = function(array, ...toRemove) {
    for (let input of toRemove){
        for (let i = 0; i < array.length; i++){
            if (array[i] === input){
                array.splice(i, 1);
                i -= 1;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
