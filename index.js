// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    }
 function  destructivelyRemoveLastCat(name){
        cats.pop(name)
 }
 function  destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
    cats.push(name)
    const newCats=[...cats]
    cats.pop()
    return newCats
}
function prependCat(name){
    cats.unshift(name)
    const newCats=[...cats]
    cats.shift()
    return newCats
}

function removeLastCat(){
    let newCats = [...cats]
    newCats.pop()
    return newCats
}
function removeFirstCat(){
    let newCats = [...cats]
    newCats.shift()
    return newCats
}