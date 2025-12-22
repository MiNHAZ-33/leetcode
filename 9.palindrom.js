const isPalindrome = (x) => {
    let xArray = x.toString().split('');
    let start = 0, end = xArray.length - 1;

    while (start < end) {
        if (xArray[start] != xArray[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome(-121)); // true
