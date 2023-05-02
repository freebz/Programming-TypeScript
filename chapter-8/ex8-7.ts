type Executor<T> = (
    resolve: (result: T) => void,
    reject: (error: unknown) => void
) => void

class Promise<T, E extends Error> {
    constructor(f: Executor<T>) { }
    then<U>(g: (result: T) => Promise<U>): Promise<U> {
	// ...
    }
    catch<U>(g: (error: unknown) => Promise<U>): Promise<U> {
	// ...
    }
}
