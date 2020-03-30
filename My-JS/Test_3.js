function fibonacci(number) {
    let a = 1;
    let b = 1;
    let tmp, i;
    if (number < 0) {
        return false;
    }
    if (number < 2)
        return true;
    i = 1;
    while (i < number) {
        tmp = a + b;
        a = b;
        b = tmp;
        i++;
    }
    return tmp;
}

function isFibonacci(value) {
    let i = 0;
    while (value > fibonacci(i)) {
        ++i;
    }
    return value === fibonacci(i);
}
