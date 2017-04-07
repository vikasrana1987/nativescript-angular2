import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AccordionComponent } from "nativescript-accordion/angular";

import { AppRoutingModule } from "./app-routing.module";

/* Components */
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { FavoritesComponent } from "./favorite/favorites.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { SharedModule } from "./shared";

/* Services */
import { ItemService, LoginService } from "./services";

/* Pipes */
import { FirstcharacterPipe, TruncatePipe } from "./pipes"; // import our pipe here

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    AccordionComponent,
    ItemsComponent,
    ItemDetailComponent,
    FavoritesComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    FirstcharacterPipe,
    TruncatePipe
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
