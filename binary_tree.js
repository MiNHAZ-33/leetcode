class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}


const buildTree = (arr) => {
    if (!arr.length) return null;

    const root = new TreeNode(arr[0]);

    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (i < arr.length && arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }

        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }

        i++;
    }

    return root;
}

const root = buildTree([3, 9, 20, null, null, 15, 7]);


const dfsPreoOrder = (node) => {
    if (!node) return;
    console.log(node.val);
    dfsPreoOrder(node.left);
    dfsPreoOrder(node.right);
}

const bfsLevelOrder = (root) => {
    if (!root) return;

    const queue = [root];

    while (queue.length) {

        const current = queue.shift();
        console.log(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

}


dfsPreoOrder(root);
bfsLevelOrder(root);
