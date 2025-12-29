const searchIsert = (nums, target) => {
    let idx = 0, left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            idx = mid + 1;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return idx;
}

console.log(searchIsert([1, 3, 5], 3)) // 2
