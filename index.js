// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(`${name}`)
}



function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let newCats = [...cats, "Broom"]
    return newCats
}

function prependCat(name){
    let newCats = ["Arnold", ...cats]
    return newCats
}

function removeLastCat(){
   return cats.slice(0, -1)
}

function removeFirstCat(){
    return cats.slice(1)
}

removeFirstCat()