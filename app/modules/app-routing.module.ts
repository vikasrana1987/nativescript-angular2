import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from "./item/item-detail.component";
import { FavoritesComponent } from './favorite/favorites.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: HomeComponent },
	    { path: 'items', component: ItemsComponent },
      { path: 'login', component: LoginComponent },
      { path: "item/:id", component: ItemDetailComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
