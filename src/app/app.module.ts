import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerItemComponent } from './server-item/server-item.component';
import { ServerListComponent } from './server-list/server-list.component';

@NgModule({
  declarations: [AppComponent, ServerItemComponent, ServerListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
