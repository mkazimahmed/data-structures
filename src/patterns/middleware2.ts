class Chatroom {
    log(user, message) {
        const name = user.getName()
        console.log(name, message)
    }
}

class User {
    constructor(name, chatroom) {
        this.name = name
        this.chatroom = chatroom
    }

    getName() {
        return this.name
    }

    send(message) {
        this.chatroom.log(this, message)
    }
}

const chatroom = new Chatroom()

const user1 = new User('Kazim', chatroom)

user1.send('message')