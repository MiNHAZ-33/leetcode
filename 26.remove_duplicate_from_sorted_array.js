const removeDuplicate = (nums) => {

    if (nums.length == 0) return 0

    let uniqueCount = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[i] = nums[i + 1]
            uniqueCount++;
        }
    }

    return uniqueCount + 1;
}


console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // [1,2]
