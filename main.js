const username = prompt("Как Вас зовут?");
console.log(greeting(username));
//alert(greeting(username));

function greeting(x) {
    let phrase = `Добрый вечер, ${x}`;
    return phrase;
}

