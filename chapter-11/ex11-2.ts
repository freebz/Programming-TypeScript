// 11.1.1 엠비언트 변수 선언

declare let process: {
    env: {
	NODE_ENV: 'development' | 'production'
    }
}

process = {
    env: {
	NODE_ENV: 'production'
    }
}
