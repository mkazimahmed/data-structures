export type NodeValue = string | number
export type NodeType = Node | null

export class Node {
    value;
    next;
    prev;

    constructor(value: NodeValue, next:NodeType  = null, prev:NodeType  = null) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}


export class SinglyLinkedList {
    head: NodeType;
    tail: NodeType;
    
    constructor() {
        this.head = null
        this.tail = null
    }

    addToHead(value: NodeValue) {
        const newNode = new Node(value)

        if(this.head) {
            newNode.next = this.head
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode
        }
    }

    addToTail(value: NodeValue) {
        const newNode = new Node(value)

        if(this.tail !== null) {
            this.tail.next = newNode
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode
        }
    }

    shift() {
        // find last but one element
        if(this.head && this.head.next) {
            this.head = this.head.next
        } else if(this.head) {
            this.head = null
        }
    }

    pop() {
        // find last but one element
        let current = this.head
        while(current && current.next && current.next.next) {
            current = current.next
        }

        if(current) {
            current.next = null
        }
    }

    private insertAtPos(index: number, value: NodeValue) {
        if(!this.head) {
            return
        }

        let i = 0
        let current = this.head
        while(current && i < index - 1) {
            i++
            current = current.next  as Node
        }

        const newNode = new Node(value)
        
        newNode.next = current?.next
        
        current.next = newNode
    }

    private removeAtPos(index: number) {
        if(!this.head) {
            return
        }

        let i = 0
        let current = this.head
        while(current && i < index - 1) {
            i++
            current = current.next as Node
        }

        if(current?.next?.next) {
            current.next = current?.next?.next
        }
    }

    insertAt(index: number, value: NodeValue) {
        const length = this.length()
        if(index === 0) {
            this.addToHead(value)
        } else if(index === length - 1) {
            this.addToTail(value)
        } else {
            this.insertAtPos(index, value)
        }
    }

    removeAt(index: number) {
        const length = this.length()
        if(index === 0) {
            this.shift()
        } else if(index === length - 1) {
            this.pop()
        } else {
            this.removeAtPos(index)
        }
    }

    reverse() {

        if(this.head === null) {
            return
        }
        let listToReverse = this.head?.next; // 2 -> 3 -> 4 -> 5
        let reversedList = this.head // 1 -> 2 -> 3 -> 4 -> 5
        reversedList.next = null // 1

        while(listToReverse !== null) {
            const temp = listToReverse // 2 -> 3 -> 4 -> 5
            listToReverse = listToReverse?.next // 3 -> 4 -> 5
            temp.next = reversedList // 2 -> 1
            reversedList = temp // 2 -> 1
        }

        this.head = reversedList
    }

    length() {
        let length = 0
        let current = this.head
        while(current) {
            length++
            current = current.next
        }
        console.log(length)

        return length
    }

    // 1 -> 2 -> 3 -> 4 -> 5
    reverse2() {
        if(this.head === null) {
            return
        }

        let listToReverse = this.head?.next // 2 -> 3 -> 4 -> 5
        this.head.next = null // 1
        let reversedList = this.head // 1

        while(listToReverse) {
            const temp = listToReverse // 2 -> 3 -> 4 -> 5
            listToReverse = listToReverse.next  // 3 -> 4 -> 5
            temp.next = reversedList // 2 -> 1
            reversedList = temp // 2 -> 1
        }

        this.head = reversedList

    }

    reverse3() {
        let listToReverse = this.head?.next
        let reversedList = this.head
        reversedList.next = null

        while(listToReverse) {
            const temp = listToReverse
            listToReverse = listToReverse.next
            temp.next = reversedList
            reversedList = temp
        }

        this.head = reversedList
    }

    reverse4() {
        let listToReverse = this.head?.next
        let reversedList = this.head
        reversedList.next = null

        while(listToReverse !== null) {
            const temp = listToReverse
            listToReverse = listToReverse?.next
            temp.next = reversedList
            reversedList = temp
        }
    }

    print() {
        const result: Array<NodeValue> = []
        let current = this.head
        while(current) {
            result.push(current.value)
            current = current.next
        }
        console.log(result)
    }
}

