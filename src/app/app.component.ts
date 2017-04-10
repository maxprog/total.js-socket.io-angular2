import { Component } from '@angular/core';
import {SocketIOService} from './services/socket-io.service';

@Component({
    moduleId:module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [SocketIOService]
})

export class AppComponent { }
