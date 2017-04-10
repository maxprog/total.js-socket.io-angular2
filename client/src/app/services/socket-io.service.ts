import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class SocketIOService{
    private url = 'http://localhost:8000';
    private socket:any;
    
    sendMessage(message:string){
        	console.log('Sent '+message);
        this.socket.emit('message', message);
    }
    
    receiveMessages(){
        let observable = new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on('receive', (data:any) => {
                console.log('message',data);  
              console.log('Received %s',data); 
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            }
        })
        return observable;
    }
    
      
  }