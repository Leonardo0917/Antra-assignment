function getChance() {
    let cnt = 0;
    return function () {
        cnt++;
        if (cnt < 6) console.log("Congrats you earn the chance!");
        else console.log("Sorry you missed the chance.");
    }
}

const closure = getChance();
for (let i = 0; i < 6; i++) {
    closure();
}

function longerThan(minLength) {
    return (element) => {
        return (element.length > minLength);
    }
}

let minLength = 2;
let arr = ["ab", "cde", "fghi", "j", "klm"];
console.log(arr.filter(longerThan(minLength)));