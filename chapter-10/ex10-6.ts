// 10.3.1 충돌

// HTTP.ts
namespace Network {
    export function request<T>(url: string): T {
	// ...
    }
}

// HTTP2.ts
namespace Network {
    // 에러 TS2393: 중복된 함수 구현
    export function request<T>(url: string): T {
	// ...
    }
}



// HTTP.ts
namespace Network {
    export function request<T>(url: string): T
}

// HTTP2.ts
namespace Network {
    export function request<T>(url: string, priority: number): T
}

// HTTPS.ts
namespace Network {
    export function request<T>(url: string, algo: 'SHA1' | 'SHA256'): T
}
