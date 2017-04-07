"use strict";
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var angular_1 = require("nativescript-accordion/angular");
var app_routing_module_1 = require("./app-routing.module");
/* Components */
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var favorites_component_1 = require("./favorite/favorites.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var shared_1 = require("./shared");
/* Services */
var services_1 = require("./services");
/* Pipes */
var pipes_1 = require("./pipes"); // import our pipe here
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            app_routing_module_1.AppRoutingModule,
            shared_1.SharedModule
        ],
        declarations: [
            app_component_1.AppComponent,
            angular_1.AccordionComponent,
            items_component_1.ItemsComponent,
            item_detail_component_1.ItemDetailComponent,
            favorites_component_1.FavoritesComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            pipes_1.FirstcharacterPipe,
            pipes_1.TruncatePipe
        ],
        providers: [
            services_1.ItemService,
            services_1.LoginService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdGQUE4RTtBQUM5RSxzQ0FBMkQ7QUFDM0Qsa0RBQW1FO0FBRW5FLDBEQUFvRTtBQUVwRSwyREFBd0Q7QUFFeEQsZ0JBQWdCO0FBQ2hCLGlEQUErQztBQUMvQywyREFBeUQ7QUFDekQsd0RBQXNEO0FBQ3RELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsc0VBQW9FO0FBQ3BFLDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsbUNBQXdDO0FBRXhDLGNBQWM7QUFDZCx1Q0FBdUQ7QUFFdkQsV0FBVztBQUNYLGlDQUEyRCxDQUFDLHVCQUF1QjtBQStCbkYsSUFBYSxTQUFTO0lBQXRCO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxTQUFTO0lBN0JyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsNkJBQXNCO1lBQ3RCLHFDQUFnQjtZQUNoQixxQkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWiw0QkFBa0I7WUFDbEIsZ0NBQWM7WUFDZCwyQ0FBbUI7WUFDbkIsd0NBQWtCO1lBQ2xCLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCxnQ0FBYztZQUNkLG9DQUFnQjtZQUNoQiwwQkFBa0I7WUFDbEIsb0JBQVk7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULHNCQUFXO1lBQ1gsdUJBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLFNBQVMsQ0FFckI7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYWNjb3JkaW9uL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmF2b3JpdGVzQ29tcG9uZW50IH0gZnJvbSBcIi4vZmF2b3JpdGUvZmF2b3JpdGVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi9zaGFyZWRcIjtcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlLCBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xuXG4vKiBQaXBlcyAqL1xuaW1wb3J0IHsgRmlyc3RjaGFyYWN0ZXJQaXBlLCBUcnVuY2F0ZVBpcGUgfSBmcm9tIFwiLi9waXBlc1wiOyAvLyBpbXBvcnQgb3VyIHBpcGUgaGVyZVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcbiAgICBJdGVtc0NvbXBvbmVudCxcbiAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIEZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEFib3V0Q29tcG9uZW50LFxuICAgIENvbnRhY3RDb21wb25lbnQsXG4gICAgRmlyc3RjaGFyYWN0ZXJQaXBlLFxuICAgIFRydW5jYXRlUGlwZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBJdGVtU2VydmljZSxcbiAgICBMb2dpblNlcnZpY2VcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG4iXX0=