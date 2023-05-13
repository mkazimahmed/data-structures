

export class TreeNode {
    left: TreeNode | null
    right: TreeNode | null
    value: number

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.left = left
        this.right = right
        this.value = value
    }
}

export class BinaryTree {
    root: TreeNode | null

    constructor() {
        this.root = null
    }

    insert(value: number) {
        if(!value) {
            return 
        }

        const newNode = new TreeNode(value)

        if(this.root === null) {
            this.root = newNode
            return
        }

        let current = this.root

        while(true) {
            if(value <= current.value) {
                if(current.left === null) {
                    current.left = newNode
                    break;
                } 
                current = current.left
            } else {
                if(current.right === null) {
                    current.right = newNode
                    break;
                } 
                current = current.right
            }
        }
    }

    // Inorder
    // left, root, right
    //          15
    //         /  \
    //        10   25
    //       / \   / \
    //      7  13 22  27
    //     / \    /
    //    5   9  17


    inOrder() {
        let current = this.root

        const stack = []

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

    // Inorder
    // root, left, right
    //          15
    //         /  \
    //        10   25
    //       / \   / \
    //      7  13 22  27
    //     / \    /
    //    5   9  17

    preOrder() {
        const stack = []
        let current = this.root

        stack.push(current)

        while(stack.length > 0) {
            current = stack.pop()
            console.log(current?.value)

            if(current?.left) {
                stack.push(current.left)
            }

            if(current?.right) {
                stack.push(current.right)
            }
        }
    }

    flatten() {
        let current = this.root

        while(current !== null) {
            
            // If there is left, go one step left (10) and 
            // Go to the last right for that left (13)

            if(current.left !==null) {
                let last = current.left

                while(last.right !== null) {
                    last = last.right
                }

                last.right = current.right
                current.right = current.left
                current.left = null
            }
        }

        current = current.right
    }
}