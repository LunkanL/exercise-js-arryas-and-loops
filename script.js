//1
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

//zidane skrivs ut, arrays är 0-index och man börjar räkna från noll
console.log(names[2])

//2

names.push("Drogba")
console.log(names)

//3

names.unshift("Figo")

//4

names.pop()
console.log(names)
//5
//sparar sista värdet i en ny variabel
const ronaldo = names.pop()
// lägg till den nya variabeln i början av arrayen
names.unshift(ronaldo)
console.log(names)

//6


//7

const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// det skrivs ut false för .includes() skriver ut en boolean
console.log(players.includes("Messi"))

// 8

if (players.includes("Zlatan")) {
    console.log("Zlatan is included in the array")
} else {
    console.log("Zlatan is not included in the array")
}

// 9
console.log(players.indexOf("Maradona"));

// 10

console.log(players.indexOf("Messi"))
// returnerar -1  är användbart om man vill kolla om den finns sen lägga till den


// 11

console.log(players.join(", "))


// 12

const playerString = players.join("-");
console.log(playerString)
// 13

players.splice(1, 2);

console.log(players)

// 14

players.splice(2, 0, "Ronaldinho");

// splice returnerar värdet man tar bort i en array eller en tom array om man inte tar bort något


// 15



