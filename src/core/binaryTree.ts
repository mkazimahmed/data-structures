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
    value
    left
    right

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

export class BinaryTree {
    root: TreeNode | null

    constructor() {
        this.root = null
    }

    insert(value: number) {
        const newNode = new TreeNode(value)

        if(!this.root) {
            this.root = newNode
            return
        }

        let current = this.root

        while(true) {
            if(value > current.value) {
                if(current.right === null) {
                    current.right = newNode
                    return
                }

                current = current.right
            } else {
                if(current.left === null) {
                    current.left = newNode
                    return
                }

                current = current.left
            }
        }
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
        stack.push(this.root)

        while(stack.length > 0) {
            const current = stack.pop()
            console.log(current?.value)

            if(current && current?.right !== null) {
                stack.push(current.right)
            }

            if(current && current?.left !== null) {
                stack.push(current.left)
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

       let current = this.root
       const stack = []

       while(current !== null || stack.length > 0) {
            while(current !== null) {
                stack.push(current)
                current = current.left
            }

            current = stack.pop()
            console.log(current.value)
            current = current.right
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

        const stack = []
        const outputStack = []
        stack.push(this.root)

        while(stack.length > 0) {
            const current = stack.pop()
            outputStack.push(current?.value)

            

            if(current?.left !== null) {
                stack.push(current.left)
            }

            if(current?.right !== null) {
                stack.push(current.right)
            }
        }

        while(outputStack.length > 0) {
            const value = outputStack.pop()
            console.log(value)
        }
    }

    search(value: number) {
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

        if(current.value === value) {
            return current
        }

        while(current !== null) {
            if(value > current.value) {
                current = current.right

                if(current && current.value === value) {
                    return current
                }
            } else {
                current = current.left

                if(current && current.value === value) {
                    return current
                }
            }
        }

        return -1
    }

    flatten() {
        //          15
        //         /  \
        //        10   25
        //       / \   / \
        //      7  13 22  27
        //     / \    /
        //    5   9  17

        let current = this.root // 15

        while(current !== null) {

            if(current.left !== null) {
                let last = current.left
                
                while(last.right !== null) {
                    last = last.right
                }

                last.right = current.right
                current.right = current.left
                current.left = null
            }
            current = current.right
        }

        console.log(this.root)
    }
}