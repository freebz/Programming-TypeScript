// 9.1.2 앵귤러

import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'simple-message',
    styleUrls: ['./simple-message.component.css'],
    templateUrl: './simple-message.component.html'
})
export class SimpleMessageComponent implements OnInit {
    message: string
    ngOnInit() {
	this.message = 'No messages, yet'
    }
}
