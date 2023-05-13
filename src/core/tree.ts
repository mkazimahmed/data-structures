
type TreeNodeType = TreeNode | null

export class TreeNode {
    value: number
    left: TreeNode
    right: TreeNode

    constructor(value: number, left?: TreeNode = null, right: TreeNode = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

export class BinaryTree {
    root: TreeNodeType
    constructor() {
        this.root = null
    }

    private insertNode(node: TreeNode, newNode: TreeNode) {
        if(newNode.value > node.value) {
            if(node.right === null) {
                node.right = newNode
                return
            } else {
                this.insertNode(node.right, newNode)
            }
        }
        else {
            if(node.left === null) {
                node.left = newNode
                return;
            } else {
                this.insertNode(node.left, newNode)
            }
        }
    }

    insert(value: number) {
        
        const newNode = new TreeNode(value)

        if(this.root === null) {
            this.root = newNode
            return
        }

        this.insertNode(this.root, newNode)
    }

    preOrder() {
        // Preorder
        // root, left, right
        //          15
        //         /  \
        //        10   25
        //       / \   / \
        //      7  13 22  27
        //     / \    /
        //    5   9  17

        const stack = []
        let current = this.root

        stack.push(current); [25, 10]

        while (stack.length > 0) {            
            current = stack.pop();
            console.log(current?.value + " "); 

            if (current.right != null) {
                stack.push(current.right);
            }

            if (current.left != null) {
                stack.push(current.left);
            }
        }
    }

    inOrder() {
        // Inorder
        // left, root, right
        //          15
        //         /  \
        //        10   25
        //       / \   / \
        //      7  13 22  27
        //     / \    /
        //    5   9  17

        const stack = []
        let current = this.root

        while(current !== null || stack.length > 0) {
            while(current !== null) {
                stack.push(current)
                current = current.left
            }

            current = stack.pop()
            console.log(current?.value)
            current = current?.right
        }
    }

    postOrder() {
        // Postorder
        // left, right, root
        //          15
        //         /  \
        //        10   25
        //       / \   / \
        //      7  13 22  27
        //     / \    /
        //    5   9  17

        let current = this.root
        const stack = []
        const outputStack = []

        stack.push(current)
        while(stack.length > 0) {
            current = stack.pop()
            outputStack.push(current)
            
            if (current.left != null) {
                stack.push(current.left);
            }

            if (current.right != null) {
                stack.push(current.right);
            }
        }

        while(outputStack.length > 0) {
            const current = outputStack.pop()
            console.log(current?.value)
        }
    }
}