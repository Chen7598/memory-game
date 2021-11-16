const cards = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "A" },
    { name: "B" },
    { name: "C" },
];

function randRange(a, b) {
    return Math.floor(a + Math.random() * (b - a))
}


function swap(arr, i, j) {
    // [arr[j],arr[i]]=[arr[i],arr[j]]
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function shuffleCards(arr) {
    for (let i = 0; i < 100; i++) {
        let a1 = randRange(0, arr.length);
        let a2 = randRange(0, arr.length);
        if (a1 == a2) {
            i--;
            continue
        }
        swap(arr, a1, a2);
    }
}


let check = (arr, i, j) => (i != j && arr[i].name == arr[j].name)


function main() {
    console.log([...cards]);
    shuffleCards(cards);
    console.log(cards);
}

main();



