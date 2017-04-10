import { Component, OnInit, OnDestroy } from '@angular/core';
import {SocketIOService} from '../../services/socket-io.service';

@Component({
    moduleId:module.id,
    selector: 'chat',
    templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit, OnDestroy { 
    messages: any = [];
    message: string;
    connection: any;
  
    constructor(private socketIOService:SocketIOService){
        
    }
    
    sendMessage(){
        this.socketIOService.sendMessage(this.message);
        this.addMessage(this.message);
        this.message = '';
    }

     addMessage(message:any){
        this.messages.push(message);
        console.log('messages',this.messages);
    }
    
    ngOnInit(){
        this.connection = this.socketIOService.receiveMessages().subscribe(message => {
             
            this.messages.push(message);
        });
    }
    
    ngOnDestroy(){
        this.connection.unsubscribe();
    }
   
}
