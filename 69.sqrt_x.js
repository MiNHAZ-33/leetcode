const mySqrt = (x) => {
    if (x < 2) return x;
    let left = 0, right = x / 2;
    let ans = 0
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid == x) return mid;
        if (mid * mid < x) {
            ans = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }

    }

    return ans;
}


console.log(mySqrt(8)); // 2
