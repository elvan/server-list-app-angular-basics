import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
})
export class ServerListComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No servers was created!';
  serverName = 'MyTestServer';
  serverCreated = false;

  servers = ['MyTestServer1', 'MyTestServer2', 'MyTestServer3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  createServer() {
    this.serverCreationStatus =
      'Server was created! Name is: ' + this.serverName;
    this.serverCreated = true;

    this.servers.push(this.serverName);
  }

  updateServerName(event: any) {
    console.log('Server updated', event.target.value);
    this.serverName = event.target.value;
  }
}
