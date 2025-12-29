const maximumCount = (nums) => {
    let negIdx = -1, posIdx = nums.length;
    const binarySearch = (left, right, isPositive) => {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (isPositive) {
                if (nums[mid] <= 0) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                    posIdx = mid;
                }
            } else {
                if (nums[mid] < 0) {
                    negIdx = mid;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
    }

    binarySearch(0, nums.length - 1, false);
    binarySearch(0, nums.length - 1, true);

    return Math.max(negIdx + 1, nums.length - posIdx);
}


console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])) // 3
