function randomtext() {
    var text = `{"response": "https://emilia.cf/api/hololive/assets/marine/${Math.floor(Math.random()*342)}.jpg" }`;
    return text;
}
document.getElementById('a').innerHTML = randomtext()
