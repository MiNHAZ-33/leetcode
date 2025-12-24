const maximumCount = (nums) => {
    let posIdx = 0, zeroCount = 0, left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] == 0) {
            zeroCount++;
        }
        if (nums[mid] > 0) {
            posStart = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return Math.max(negEnd + 1, posStart - nums.length + 1)
}


console.log(maximumCount([-2, -1, -1, 0, 1, 2, 3])) // 3
