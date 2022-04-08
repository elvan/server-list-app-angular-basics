import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css'],
})
export class ServerItemComponent implements OnInit {
  serverId = 123;
  serverStatus = 'online';

  constructor() {}

  ngOnInit(): void {}

  getServerStatus(): string {
    return this.serverStatus;
  }
}
