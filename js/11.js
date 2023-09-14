/*
const name2 = 'awesome2';

const c1 = {
    name: 'MERN',
    lang: 'JS',
    getDetails: function() {
        const name = 'MERN2';
        return 'Names: ' + name + ' ' + this.name + ' ' + name2;
    },
    getDetails2: function() {
        return {
            name: 'MERN4',
            getDetails3: function() {
                const name = 'MERN3';
                return `Names: ${name} ${this.name} ${name2}`;
            }
        }
    }
}

console.log(c1.getDetails());
console.log(c1.getDetails2().getDetails3());


const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(13));
*/

const sleep = (num) => {
    const start = Date.now();
    if (Date.now() - start > num) {
        break;
    }
    return true;
}