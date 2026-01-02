const repeatedNTimes = (nums) => {
    let uniqueMap = new Set();
    for (const n of nums) {
        if (uniqueMap.has(n)) return n;
        uniqueMap.add(n)
    }

};


console.log(repeatedNTimes([1, 2, 3, 3])); // 3
