// 8.6 타입 안전 멀티스레딩

// 8.6.1 브라우저에서 웹 워커 활용하기

// MainThread.ts
let worker = new Worker('WorkerScript.js')
worker.onmessage = e => {
    console.log(e.data)  // 'Ack: "some data"' 기록
}
worker.postMessage('some data')


// WorkerScript.ts
onmessage = e => {
    console.log(e.data)  // 'some data' 기록
    postMessage(`Ack: "${e.data}"`)
}
