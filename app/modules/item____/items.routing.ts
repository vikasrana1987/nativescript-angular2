import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";
//import { AuthGuard } from "../auth-guard.service";

const itemsRoutes: Routes = [
  { path: "items", component: ItemsComponent/* , canActivate: [AuthGuard] */ },
  { path: "item/:id", component: ItemDetailComponent },
];
export const itemsRouting: ModuleWithProviders = RouterModule.forChild(itemsRoutes);