// 1
function reverseNumber(num) {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}
//console.log(reverseNumber(32243));

// 2
function checkPalindrome(str) {
    const revStr = str.split('').reverse().join('');
    return str == revStr;
}
//console.log(checkPalindrome("aabcbaa"));

// 3
function getCombinationString(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            res.push(str.slice(i, j));
        }
    }
    return res;
}
//console.log(getCombinationString("dog"));

// 4
function sortString(str) {
    const res = str.split('').sort().join('');
    return res;
}
//console.log(sortString("webmaster"));

// 5
function convertToUpperCase(str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');;
}
//console.log(convertToUpperCase("the quick brown fox"));

// 6
function getMaxLengthWord(str) {
    let arr = str.split(' ');
    let _len = -1, res = "";
    for (let i = 0; i < arr.length; i++) {
        if (_len < arr[i].length) {
            _len = arr[i].length;
            res = arr[i];
        }
    }
    return res;
}
//console.log(getMaxLengthWord("Web Development Tutorial"));

// 7
function countVowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let res = 0;
    for (let c of str) {
        if (vowels.includes(c)) res++;
    }
    return res;
}
//console.log(countVowel("The quick brown fox"));

// 8
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0)   return false;
    }
    return true;
}
//console.log(isPrime(17));

// 9
function getType(obj) {
    return typeof obj;
}
// console.log(getType({}));
// console.log(getType(true));
// let _func = getType;
// console.log(getType(_func));
// console.log(getType(1));
// console.log(getType("1"));
// let antra;
// console.log(getType(antra));

// 10
function createMatrix(n) {
    let mat = [];
    for (let i = 0; i < n; i++) {
        mat[i] = [];
        for (let j = 0; j < n; j++) {
            if (i ==j) mat[i][j] = 1;
            else mat[i][j] = 0;
        }
    }
    return mat;
}
//console.log(createMatrix(4));

// 11
function getSecLowAndGreatNumber(arr) {
    let _arr = arr.sort();
    return [_arr[1], _arr[_arr.length - 2]];
}
//console.log(getSecLowAndGreatNumber([1, 2, 3, 4, 5]));

// 12
function isPerfectNumber(num) {
    if (num <= 1) return false;
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) sum += i;
    }
    return sum === num;
}
//console.log(isPerfectNumber(496));

// 13
function getFactorsOfNumber(num) {
    if (num <= 1) return [];
    let res = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) res.push(i);
    }
    return res;
}
//console.log(getFactorsOfNumber(16));

// 14 
function convertAmountToCoins(obj) {
    if (obj[0] == 0) return [];
    let amount = obj[0];
    let coins = obj[1].sort((a, b) => { return b - a;});
    let res = [], i = 0;
    while (amount > 0 && i < coins.length) {
        if (amount >= coins[i]) {
            amount -= coins[i];
            res.push(coins[i]);
        } else {
            i++;
        }
    }
    return res;
}
//console.log(convertAmountToCoins([46, [25, 10, 5, 2, 1]]));

// 15
function getPow(b, n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= b;
    }
    return res;
}
//console.log(getPow(3, 5));

// 16
function getUniqueChar(str) {
    let cnt = {};
    for (ch of str) {
        if (!(ch in cnt)) cnt[ch] = 1;
        else cnt[ch]++;
    }
    return Object.keys(cnt).join('');
}
//console.log(getUniqueChar("thequickbrownfoxjumpsoverthelazydog"));

// 17
function getOccurenceOfChar(str) {
    let cnt = {};
    for (ch of str) {
        if (!(ch in cnt)) cnt[ch] = 1;
        else cnt[ch]++;
    }
    return cnt;
}
//console.log(getOccurenceOfChar("thequickbrownfoxjumpsoverthelazydog"));

// 18
function binarySearch(arr, target) {
    let l = 0, r = arr.length - 1, m;
    while (l < r) {
        m = Math.floor((l + r) / 2);
        if (arr[m] == target) return true;
        else if (arr[m] > target) r = m - 1;
        else l = m + 1;
    }
    return false;
}
//console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 6));

// 19
function getLargerNumer(arr, val) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > val) res.push(arr[i]);
    }
    return res;
}
//console.log(getLargerNumer([1,35,7,34,75, 100], 20));

// 20
function getRandomId(len) {
    const sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = "";
    for (let i = 0; i < len; i++) {
        let idx = Math.floor(Math.random() * sample.length);
        res += sample[idx];
    }
    return res;
}
//console.log(getRandomId(10));

// 21
function getSubset(arr, len) {
    let res = [], sub = [];
    
    function getSubsetTill(idx) {
        if (sub.length === len) {   
            res.push(sub.slice());
            return;
        }
        for (let i = idx; i < arr.length; i++) {
            sub.push(arr[i]);
            getSubsetTill(i + 1);
            sub.pop();
        }
    }
    
    getSubsetTill(0);
    return res;
}
console.log(getSubset([1, 2, 3, 4], 3));

// 22
function countOccurenceOfChar(str, ch) {
    let res = 0;
    for (s of str) {
        if (s === ch) res++;
    }
    return res;
}
//console.log(countOccurenceOfChar("microsoft.com", 'o'));

// 23
function getFirstNotRepeatedChar(str) {
    let cnt = {};
    for (ch of str) {
        if (!(ch in cnt)) cnt[ch] = 1;
        else cnt[ch]++;
    }
    for (const[key, value] of Object.entries(cnt)) {
        if (value == 1) return key;
    }
    return "";
}
//console.log(getFirstNotRepeatedChar("abacddbec"));

// 24
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j - 1] < arr[j]) {
                let tmp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
//console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25
function getLongestName(arr) {
    let len = -1;
    let res = "";
    for (country of arr) {
        if (country.length > len) {
            len = country.length;
            res = country;
        }
    }
    return res;
}
//console.log(getLongestName(["Australia", "Germany", "United States of America"]));

// 26
function getLongestNoRepeatedString(str) {
    let len = 0, res = "";
    let hash = {};
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in hash)) {
            hash[str[i]] = i;
        } else {
            if (len < (i - hash[str[i]])) {
                len = i - hash[str[i]];
                res = str.substr(hash[str[i]], len);
            }
            hash[str[i]] = i;
        }
    }
    return len === 0 ? str : res;
}
//console.log(getLongestNoRepeatedString("abcdefghiajklmn"));

// 27
function getLongestPalindrome(str) {
    let len = 0, res = "";
    for (let i = 0; i < str.length; ) {
        let l = i, r = i;
        while (r + 1 < str.length && str[r] === str[r + 1]) r++;
        i = r + 1;
        while (r + 1 < str.length && l - 1 >= 0 && str[r + 1] === str[l - 1]) l--, r++;
        if (r - l + 1 > len) {
            len = r - l + 1;
            res = str.substr(l, len);
        }
    }
    return res;
}
//console.log(getLongestPalindrome("123abcba"));

// 28
function calculate(x, y, func) {
    return func(x, y);
}

function plus(x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

//console.log(calculate(2, 3, divide));

// 29
function getFunctionName() {
    return arguments.callee.name;
}

//console.log(getFunctionName());