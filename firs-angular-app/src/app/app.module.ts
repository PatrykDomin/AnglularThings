import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component'
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MycomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
