let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < array.length; i++) {
    let minInd = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[minInd] > array[j]) {
            minInd = j;
        }
    }
    [array[i], array[minInd]] = [array[minInd], array[i]];
}

console.log(array);
