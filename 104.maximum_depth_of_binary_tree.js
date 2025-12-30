var maxDepth = (root) => {
    if (!root) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;

}


console.log(maxDepth([3, 9, 20, null, null, 15, 7])) // 3
