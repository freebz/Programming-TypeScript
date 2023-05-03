// 서비스

import { Component, OnInit } from '@angular/core'
import { MessageService } from '../services/message.service'

@Component({
    select: 'simple-message',
    templateUrl: './simple-message.component.html',
    styleUrls: ['/simple-message.component.css']
})
export class SimpleMessageComponent implements OnInit {
    message: string
    constructor(
	private messageService: MessageService
    ) { }
    ngOnInit() {
	this.messageService.getMessage().subscribe(response =>
	    this.message = response.message
        )
    }
}
