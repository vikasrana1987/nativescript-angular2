"use strict";
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
/* Import Routes */
var items_routing_1 = require("./items.routing");
/* Import Components */
var items_component_1 = require("./items.component");
var item_detail_component_1 = require("./item-detail.component");
/* Import Pipes */
var items_firstcharacter_pipe_1 = require("./items-firstcharacter.pipe");
var ItemsModule = (function () {
    function ItemsModule() {
    }
    return ItemsModule;
}());
ItemsModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            items_routing_1.itemsRouting
        ],
        declarations: [
            items_component_1.ItemsComponent,
            item_detail_component_1.ItemDetailComponent,
            items_firstcharacter_pipe_1.FirstcharacterPipe
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], ItemsModule);
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHNDQUEyRDtBQUUzRCxtQkFBbUI7QUFDbkIsaURBQStDO0FBRS9DLHVCQUF1QjtBQUN2QixxREFBbUQ7QUFDbkQsaUVBQThEO0FBRTlELGtCQUFrQjtBQUNsQix5RUFBaUU7QUFlakUsSUFBYSxXQUFXO0lBQXhCO0lBQTBCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFBM0IsSUFBMkI7QUFBZCxXQUFXO0lBYnZCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNEJBQVk7U0FDYjtRQUNELFlBQVksRUFBRTtZQUNaLGdDQUFjO1lBQ2QsMkNBQW1CO1lBQ25CLDhDQUFrQjtTQUNuQjtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxXQUFXLENBQUc7QUFBZCxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKiBJbXBvcnQgUm91dGVzICovXG5pbXBvcnQgeyBpdGVtc1JvdXRpbmcgfSBmcm9tIFwiLi9pdGVtcy5yb3V0aW5nXCI7XG5cbi8qIEltcG9ydCBDb21wb25lbnRzICovXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG4vKiBJbXBvcnQgUGlwZXMgKi9cbmltcG9ydCB7IEZpcnN0Y2hhcmFjdGVyUGlwZSB9IGZyb20gXCIuL2l0ZW1zLWZpcnN0Y2hhcmFjdGVyLnBpcGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBpdGVtc1JvdXRpbmdcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSXRlbXNDb21wb25lbnQsXG4gICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICBGaXJzdGNoYXJhY3RlclBpcGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zTW9kdWxlIHt9XG4iXX0=