const isValid = (s) => {
    let stack = [];
    const closingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (current in closingBrackets) {
            if (stack.pop() === closingBrackets[current]) {
                continue;
            } else {
                return false;
            }

        } else {
            stack.push(current);
        }
    }

    return stack.length === 0;
}


console.log(isValid("(){"))
