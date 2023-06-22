// Write your solution here!
let cats = ["Milo", "Otis", "Garfield", ]

beforeEach (function arrayFunctions(){
    cats.length = 0
    
    cats.push('Milo', 'Otis', 'Garfield');
})

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat (name) {
    cats.unshift("Bob");
}


function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function removeLastCat () {
    let newcatlist = cats.slice (0,-1);
    return newcatlist
}

function appendCat (name){
    let newcatlist = [...cats,"Broom"]
    return newcatlist
}

function prependCat (name) {
    let newcatlist = ["Arnold", ...cats]
    return newcatlist
}


function removeFirstCat() {
    let newcatlist = cats.slice(1);
    return newcatlist
}