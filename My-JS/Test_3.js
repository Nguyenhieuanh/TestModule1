function fibonacci(number) {
    let f0 = 1;
    let f1 = 1;
    let f, i;
    if (number < 0) {
        return -1;
    }
    if (number < 2)
        return 1;
    i = 1;
    while (i < number) {
        f = f0 + f1;
        f0 = f1;
        f1 = f;
        i++;
    }
    return f;
}

function isFibonacci(value) {
    let i = 0;
    while (value > fibonacci(i)) {
        ++i;
    }
    if (value == fibonacci(i))
        return true;
    return false;
}