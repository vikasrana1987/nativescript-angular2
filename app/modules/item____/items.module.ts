import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

/* Import Routes */
import { itemsRouting } from "./items.routing";

/* Import Components */
import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";

/* Import Pipes */
import { FirstcharacterPipe } from "./items-firstcharacter.pipe";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    itemsRouting
  ],
  declarations: [
    ItemsComponent,
    ItemDetailComponent,
    FirstcharacterPipe
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemsModule {}
