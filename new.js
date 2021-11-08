
const messages = []

function wrapGifts(gifts, event) {
    for (let i = 0; i < gifts.length; i++) {
       messages.push(`Thank you ${gifts[i]} for the wonderful ${event} gift!`) 
    };

    return messages;

}