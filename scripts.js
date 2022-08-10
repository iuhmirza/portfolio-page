const fact = document.querySelector('.fact');

let facts = [
    "i'm from luton",
    "i can speak urdu",
    "my favourite color is blue",
    "i once beat a pokemon champ",
    "i like food",
    "i love building pcs",
    "maths is induction",
    "code is computation",
    "i wear glasses",
    "i can change tyres",
    "i fixed a dishwasher",
    "i was student of the year",
    "i've won an mma fight",





]

function randomFact() {
    i = Math.floor(Math.random() * facts.length);
    console.log(i)
    console.log(fact.textContent)
    fact.textContent = facts[i]
}