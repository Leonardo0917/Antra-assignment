// myMap

Array.prototype.myMap = function(func, args) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(func.apply(args, [this[i], i, this])); // value, index, this
    }
    return res;
}

const arr = [1, 4, 9, 16, 25];
console.log(arr.myMap(Math.sqrt));

function testMap(num) {
    return num * 10;
}

console.log(arr.myMap(testMap));

// myReduce
Array.prototype.myReduce = function(func, initialValue) {
    let res = initialValue;
    if (initialValue) {
        if (this.length === 0) 
            return res;
        for (let i = 0; i < this.length; i++) {
            res = func(res, this[i]);
        }
    } else {
        if (this.length === 0) 
            throw new TypeError('Reduce of empty array with no initial value');
        else if (this.length === 1)
            return this[0];
        else {
            res = this[0];
            for (let i = 1; i < this.length; i++) {
                res = func(res, this[i]);
            }
        }
    }
    return res;
}

console.log(arr.myReduce(Math.max));
console.log(arr.myReduce(Math.max, 100));

function getSum(total, num) {
    return total + num;
}

console.log(arr.myReduce(getSum));
console.log(arr.myReduce(getSum, 10));