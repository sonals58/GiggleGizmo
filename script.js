fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then (j => {
    const jt = j.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML= jt;
})