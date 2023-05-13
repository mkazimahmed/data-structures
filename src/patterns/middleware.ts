class Chatroom {
    logMessage(user, message) {
        const time = new Date()
        const sender = user.getName()

        console.log(`${time} [${sender}]: ${message}`)
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
        this.chatroom.logMessage(this, message)
    }
}

const chatroom = new Chatroom()

const user1 = new User('Kazim', chatroom)
const user2 = new User('Ayesha', chatroom)

user1.send('Hello')
user2.send('Hello')


