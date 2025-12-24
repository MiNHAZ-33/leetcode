const isBadVersion = (n) => {
    return n > 50
}

const solution = (n) => {
    let start = 0, end = n - 1;
    let possibleBad = 0;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const isBad = isBadVersion(mid)
        if (isBad) {
            possibleBad = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return possibleBad;
}




console.log(solution(300));
