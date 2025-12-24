const searchRange = (nums, target) => {
    let firstIdx = -1, lastIdx = -1, left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            firstIdx = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0; right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            lastIdx = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [firstIdx, lastIdx];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]j
