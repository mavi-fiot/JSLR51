// Функція для створення масиву з заданою кількістю елементів
function createArray() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question('Enter the number of elements in the array: ', (num) => {
            num = parseInt(num);
            if (isNaN(num)) {
                console.log('Invalid input. Please enter a valid number.');
                rl.close();
                return;
            }

            let array = [];
            console.log('Enter the elements of the array:');
            let count = 0;
            rl.on('line', (input) => {
                array.push(parseInt(input));
                count++;
                if (count === num) {
                    rl.close();
                    resolve(array);
                }
            });
        });
    });
}

// Функція для обчислення суми елементів між максимальним та мінімальним значеннями
function calculateSumBetweenMinMax(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const maxIndex = array.indexOf(max);
    const minIndex = array.indexOf(min);
    const startIndex = Math.min(maxIndex, minIndex) + 1;
    const endIndex = Math.max(maxIndex, minIndex);
    const sum = array.slice(startIndex, endIndex).reduce((acc, curr) => acc + curr, 0);
    return sum;
}

// Функція для сортування масиву методом швидкого сортування
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];
    const left = [];
    const right = [];
    for (let i = 0; i < array.length; i++) {
        if (i === Math.floor(array.length / 2)) {
            continue;
        }
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));
}

async function main() {
    const array = await createArray();
    console.log('Input array:', array);

    const sumBetweenMinMax = calculateSumBetweenMinMax(array);
    console.log('Sum of elements between min and max:', sumBetweenMinMax);

    const sortedArray = quickSort(array);
    console.log('Sorted array:', sortedArray);
}

main();
