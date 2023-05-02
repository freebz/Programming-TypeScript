// 야생의 방출기

// lib.dom.ts
interface WindowEventMap extends GlobalEventHandlersEventMap {
    // ...
    contextmenu: PointerEvent
    dblclick: MouseEvent
    devicelight: DeviceLightEvent
    devicemotion: DeviceMotionEvent
    deviceorientation: DeviceOrientationEvent
    drag: DragEvent
    // ...
}

interface Window extends EventTarget, WindowTimers,
    WindowSessionStorage, WindowLocalStorage, WindowConsole,
    GlobalEventHandlers, IDBEnvironment, WindowBase64,
    GlobalFetch {
    // ...
    addEventListener<K extends keyof WindowEventMap>(
	type: K,
	listener: (this: Window, ev: WindowEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions
    ): void
    removeEventListener<K extends keyof WindowEventMap>(
	type: K,
	listener: (this: Window, ev: WindowEventMap[K]) => any,
	options?: boolean | EventListenerOptions
    ): void
}
