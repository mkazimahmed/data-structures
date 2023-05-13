class Node {
    value: number
    next: Node | null
    constructor(value:number, next:Node | null = null) {
        this.value = value
        this.next = next
    }
}

export class SinglyLinkedList {
    head: Node | null

    constructor() {
        this.head = null
    }

    addToHead(value: number) {
        const newNode = new Node(value)

        if(this.head === null) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    addToTail(value: number) {
        const newNode = new Node(value)
        let currentNode = this.head

        if(this.head === null) {
            this.head = newNode
        } else {
            while(currentNode !== null && currentNode.next !== null) {
                currentNode = currentNode.next
            }
    
            if(currentNode) {
                currentNode.next = newNode
            }
        }
    }

    pop() {
        let currentNode = this.head

        if(this.head === null) {
            return false
        } else {
            while(currentNode !== null && currentNode.next !== null && currentNode.next.next !== null) {
                currentNode = currentNode.next
            }
    
            if(currentNode) {
                currentNode.next = null
            }
        }
    }

    shift() {
        if(this.head === null) {
            return false
        } else {
            let currentNode = this.head
            this.head = currentNode?.next
        }
    }

    insetAt(position: number, value: number) {
        const newNode = new Node(value)
        const length = this.length()
        
        if(this.head === null) {
            return false
        }

        if(position > this.length()) {
            return false
        }

        if(position === 0) {
            this.addToHead(value)
        } else  if(position === length) {
            this.addToTail(value)
        } else {
            let currentNode = this.head
            let count = 0

            while(count < position - 1 && currentNode.next !== null) {
                currentNode = currentNode?.next
                count ++
            }

            const temp = currentNode.next
            currentNode.next = newNode
            newNode.next = temp
        }
    }

    removeAt(position: number) {
        if(this.head === null) {
            return false
        }

        if(this.length() === 0 || position > this.length()) {
            return false
        }

        let currentNode = this.head
        let count = 0

        while(count < position - 1 && currentNode.next !== null) {
            currentNode = currentNode?.next
            count ++
        }

        if(currentNode !== null && currentNode.next !== null) {
            currentNode.next = currentNode.next?.next
        }
    }

    reverse() {
        if(this.head === null) {
            return false
        }

        let reveredList = this.head // 1 -> 2 -> 3
        let listToReverse = this.head?.next // 2 -> 3

        if(reveredList !== null) {
            reveredList.next = null // 1
        }

        while(listToReverse !== null) {
            const temp = listToReverse // 2 -> 3
            listToReverse = listToReverse.next // 3
            temp.next = reveredList // 2 -> 1
            reveredList = temp
        }

        this.head = reveredList
    }

    length() {
        let count = 0
        let currentNode = this.head
        while(currentNode!== null){
            count++
            currentNode = currentNode.next
        }

        return count
    }

    print() {
        let results = []
        let currentNode = this.head

        if(this.head === null) {
            return
        }

        while(currentNode !== null) {
            results.push(currentNode.value)
            currentNode = currentNode.next
        }

        return results.join(' --> ')
    }
}