'use strict'
let interval = []

class TankGame {

    constructor(id) {
        this.img = `img/tank-svgrepo-com.svg`
        this.tank = document.createElement(`img`)
        this.topPosition = 0;
        this.id = id;

    }

    randomGeneration(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    tankGeneration() {
        this.tank.src = this.img
        this.tank.style.position = 'absolute'
        this.tank.style.top = this.topPosition + `%`
        this.tank.style.right = this.randomGeneration(0, 100).toString() + `%`
        this.tank.style.width = `100px`
        this.tank.id = this.id

        this.tank.onclick = function () {
            this.src = `img/1270762888.svg`
            clearInterval(interval[this.id])
            setTimeout(() => {
                this.style.display = `none`
            }, 1000)
        }

        document.getElementById(`tanks`).append(this.tank)
        interval[this.id] = setInterval(() => {
            this.topPosition += 0.3
            this.tank.style.top = this.topPosition + `%`
        }, 100);
    }
}

function createTanksWithDelay(totalTanks, delay) {
    let count = 0;
    const intervalId = setInterval(() => {
        if (count >= totalTanks) {
            clearInterval(intervalId);
            return;
        }
        new TankGame(count).tankGeneration();
        count++;
    }, delay);
}

const totalTanks = 40;
const delayBetweenTanks = 800;

createTanksWithDelay(totalTanks, delayBetweenTanks);

// for (let i = 0; i < 20; i++) {
//     new TankGame(i).tankGeneration()
// }
