// Inorder
// left, root, right
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

export class TreeNode {
    value: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value
        this.right = right
        this.left = left
    }
}

export class BinaryTree {
    root: TreeNode | null

    constructor() {
        this.root = null
    }

    insert(value: number) {
        const newNode = new TreeNode(value)

        if(this.root === null) {
            this.root = newNode
            return
        }

        let current = this.root

        while(true) {
            if(value > current.value) {
                if(current.right === null) {
                    current.right = newNode
                    break
                }
                current = current.right
            } else {
                if(current.left === null) {
                    current.left = newNode
                    break
                }
                current = current.left
            }
        }

    }

    preOrder() {
        let current = this.root
        const stack = []

        stack.push(this.root)

        while(stack.length > 0) {
            current = stack.pop()

            console.log(current?.value)

            if(current?.right !== null) {
                stack.push(current?.right)
            }

            if(current?.left !== null) {
                stack.push(current?.left)
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

            current = current.right
            
        }
    }

    postOrder() {
        let current = this.root
        const stack = []
        const outputStack = []

        stack.push(this.root)

        while(stack.length > 0) {
            current = stack.pop()

            outputStack.push(current?.value)

            if(current?.left !== null) {
                stack.push(current?.left)
            }

            if(current?.right !== null) {
                stack.push(current?.right)
            }
        }

        while(outputStack.length > 0) {
            console.log(outputStack.pop())
        }
    }

    search(value: number) {
        const newNode = new TreeNode(value)

        if(this.root?.value === value) {
            return this.root
        }

        let current = this.root

        while(true) {
            if(value > current.value) {
                if(current?.right?.value === value) {
                    return current?.right
                }
                current = current.right
            } else {
                if(current?.left?.value === value) {
                    return current?.left
                }
                current = current.left
            }
        }

    }

    flatten() {
        // 15, 10, 25, 7, 
        let current = this.root

        while(current !== null) {

            // If there is left, go one step left (10) and 
            // Go to the last right for that left (13)
            if(current.left !== null) {
                let last = current.left

                while(last?.right !== null) {
                    last = last?.right
                }

                last.right = current.right
                current.right = current.left
                current.left = null
            }

            current = current.right
            
        }
    }
}