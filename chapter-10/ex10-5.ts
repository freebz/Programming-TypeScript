// 10.3 네임스페이스

// Get.ts
namespace Network {
    export function get<T>(url: string): Promise<T> {
	// ...
    }
}

// App.ts
namespace App {
    Network.get<GitRepo>('https://api.github.com/repos/Microsoft/typescript')
}



namespace Network {
    export namespace HTTP {
	export function get<T>(url: string): Promise<T> {
	    // ...
	}
    }
    export namespace TCP {
	listenOn(port: number): Connection {
	    // ...
	}
	// ...
    }
    export namespace UDP {
	// ...
    }
    export namespace IP {
	// ...
    }
}



// HTTP.ts
namespace Network {
    export namespace HTTP {
	export function get<T>(url: string): Promise<T> {
	    // ...
	}
    }
}

// UDP.ts
namespace Network {
    export namespace UDP {
	export function send(url: string, packets: Buffer): Promise<void>
	{
	    // ...
	}
    }
}

// MyApp.ts
Network.HTTP.get<Dog[]>('http://url.com/dogs')
Network.UDP.send('http://url.com/cats', new Buffer(123))



// A.ts
namespace A {
    export namespace B {
	export namespace C {
	    export let d = 3
	}
    }
}

// MyApp.ts
import d = A.B.C.d

let e = d * 3
