// MainThread.ts
type Message = string
type ThreadID = number
type UserID = number
type Participants = UserID[]

type Commands = {
    sendMessageToThread: [ThreadID, Message]
    createThread: [Participants]
    addUserToThread: [ThreadID, UserID]
    removeUserFromThread: [ThreadID, UserID]
}

type Events = {
    receivedMessage: [ThreadID, UserID, Message]
    createdThread: [ThreadID, Participants]
    addedUserToThread: [ThreadID, UserID]
    removeUserFromThread: [ThreadID, UserID]
}



// WorkerScript.ts
type Command =
    | { type: 'sendMessageToThread', data: [ThreadID, Message] }
    | { type: 'createThread', data: [Participants] }
    | { type: 'addUserToThread', data: [ThreadID, UserID] }
    | { type: 'removeUserFromThread', data: [ThreadID, UserID] }

onmessage = e =>
    processCommandFromMainThread(e.data)

function processCommandFromMainThread(
    command: Command
) {
    switch (command.type) {
	case 'sendMessageToThread':
	    let [threadID, message] = command.data
	    console.log(message)
	// ...
    }
}
