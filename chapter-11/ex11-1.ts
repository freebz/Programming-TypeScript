// 11.1 타입 선언

import { Subscriber } from './Subscriber'
import { Subscription } from './Subscription'
import { PartialObserver, Subscribable, TeardownLogic } from './types'

export class Observable<T> implements Subscribable<T> {
    public _isScalar: boolean = false
    constructor(
	subscribe?: (
	    this: Observable<T>,
	    subscriber: Subscriber<T>
	) => TeardownLogic
    ) {
	if (subscribe) {
	    this._subscribe = subscribe
	}
    }
    static create<T>(subscribe?: (subscriber: Subscriber<T>) => TeardownLogic) {
	return new Observable<T>(subscribe)
    }
    subscribe(observer?: PartialObserver<T>): Subscription
    subscribe(
	next?: (value: T) => void,
	error?: (error: any) => void,
	complete?: () => void
    ): Subscription
    subscribe(
	observerOrNext?: PartialObserver<T> | ((value: T) => void),
	error?: (error: any) => void,
	complete?: () => void
    ): Subscription {
	// ...
    }
}
