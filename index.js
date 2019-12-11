const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const myWindow = window.open('window.html', '', 'width=100, height=100');

const START_DELAY = 10000;
const DELAY = 100;
const TOTAL = 250;

let counter = 0;

setTimeout(() => {
    const timer = setInterval(() => {
        if (counter === TOTAL) {
            clearInterval(timer);
            myWindow.close();
            return;
        }
        counter++;
        const width = getRandomInt(1920);
        const height = getRandomInt(1080);
        console.log(`Resizing ${counter}th time with dimensions ${width} x ${height}...`);
        myWindow.resizeTo(width, height);
    }, DELAY);
}, START_DELAY);