function tryRemoveFromArray(x, array) {
    for (let i = 0; i < array.length; i++) {
        if (x === array [i]) {
            array.splice(i, 1);
        }
    }
    console.log(array);
}