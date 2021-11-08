let messages = []

function writeCards(gifts, event) {
    for (let i = 0; i < gifts.length; i++) {
       messages.push(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`) 
    };

    return messages;

}

function countDown(num) {
    if (num > 0) {
        while (num >= 0) {
            console.log(num);
            num -= 1;
        };
        } else {
            console.log('Seems you input some weird ish');
        }
    }
