const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function prependCat(name) {
    const copyofcats=[...cats];
    copyofcats.unshift(name)
    return copyofcats
}


function appendCat(name) {
    const copyofcats=[...cats];
    copyofcats.push(name)
    return copyofcats
}

function removalFirstCat() {
    return cats.slice(0);   
}

function removeLastCat() {
    return cats.slice(0, -1);  
}