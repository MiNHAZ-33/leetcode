const search = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) return mid;
        // 7 > 0 and 4 < 0
        if (nums[mid] < target && nums[left] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }

    }


    return -1;
}


console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
