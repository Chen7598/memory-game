const cards = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "F" },
    { name: "G" },
    { name: "H" },
    { name: "I" },
    { name: "J" },
    { name: "K" },
    { name: "L" },
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "F" },
    { name: "G" },
    { name: "H" },
    { name: "I" },
    { name: "J" },
    { name: "K" },
    { name: "L" },
];

function randRange(a, b) {
    return Math.floor(a + Math.random() * (b - a));
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function shuffle(arr) {
    for (let i = 0; i < 100; i++) {
        let a1 = randRange(0, arr.length);
        let a2 = randRange(0, arr.length);
        if (a1 == a2) {
            i--;
            continue;
        }
        swap(arr, a1, a2);
    }
}

let check = (arr, i, j) => i != j && arr[i].name === arr[j].name;

const cardClicked = (evn) => {
    // console.log(evn.target.innerHTML);
    const cardEl = evn.target;
    const idx = cardEl.id;
    cardEl.innerHTML = cards[idx].name;

    setTimeout(() => {
        cardEl.innerHTML = "";
    }, 1000);
};

function createCardElement(idx) {
    const board = document.getElementById("board");
    const cardEl = document.createElement("div");
    //<div></div>
    // cardEl.innerHTML = card.name;
    cardEl.id = idx;
    //<div>C</div>
    cardEl.className = "card";
    //<div class="card"> C </div>

    // cardEl.addEventListener("click", f);
    cardEl.onclick = cardClicked;

    board.appendChild(cardEl);
    /*
    <div id=board>
      <div class="card">C</div>
    </div>
    */
}

function main() {
    shuffle(cards);
    for (let idx in cards) {
        createCardElement(idx);
    }
}

const f = () => {
    alert("hello");
};

window.onload = () => {
    main();
};

function j(){
    console.log('hey');
}

/*
git status// show the project status
git add . // add all
git commit -m 
git status// show the project status
git Push
git git restore //משחזר עד נק הקומיט
*/

