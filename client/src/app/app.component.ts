import { Component } from '@angular/core';
import {SocketIOService} from './services/socket-io.service';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [SocketIOService]
})

export class AppComponent { }
