
function writeCards(names, event) {
    const messages = [];
    for (const name of names) {
        messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(count) {
    while (count >= 0) {
        console.log(count--);
    }
}
