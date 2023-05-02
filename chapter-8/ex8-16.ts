// 8.6.2 NodeJS에서 자식 프로세스 이용하기

// MainThread.ts
import { fork  } from 'child_process'

let child = fork('./ChildThread.js')

child.on('message', data =>
    console.info('Child process sent a message', data)
)

child.send({ type: 'syn', data: [3] })



// ChildThread.ts
process.on('message', data =>
    console.info('Parent process sent a message', data)
)
process.send({ type: 'ack', data: [3] })
