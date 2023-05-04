function writeCards(names, eventName) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
}

//const newCards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
//console.log(newCards);

function countDown(count) {
    while (count >= 0) {
        console.log(count);
        count--;
    }
}

//countDown(10);