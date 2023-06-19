function verdoppleArrayWerte(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
}

let array = [1, 2, 3, 4, 5];
verdoppleArrayWerte(array);
console.log(array);
