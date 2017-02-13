import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ItemService } from "./services/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared';

import { LoginService } from "./services/login.service";
import { LoginModule } from "./login/login.module";

/* Pipes */
import { FirstcharacterPipe } from './pipes/firstcharacter.pipe'; // import our pipe here

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    AppRoutingModule,
    SharedModule,
    LoginModule
  ],
  declarations: [
    AppComponent,
	  ItemsComponent,
    ItemDetailComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
	  FirstcharacterPipe
  ],
  providers: [
  	ItemService,
    LoginService
  ],
  schemas: [
	NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
