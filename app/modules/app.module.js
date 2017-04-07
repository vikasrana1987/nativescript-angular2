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
            pipes_1.FirstcharacterPipe
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdGQUE4RTtBQUM5RSxzQ0FBMkQ7QUFDM0Qsa0RBQW1FO0FBRW5FLDBEQUFvRTtBQUVwRSwyREFBd0Q7QUFFeEQsZ0JBQWdCO0FBQ2hCLGlEQUErQztBQUMvQywyREFBeUQ7QUFDekQsd0RBQXNEO0FBQ3RELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsc0VBQW9FO0FBQ3BFLDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsbUNBQXdDO0FBRXhDLGNBQWM7QUFDZCx1Q0FBdUQ7QUFFdkQsV0FBVztBQUNYLGlDQUE2QyxDQUFDLHVCQUF1QjtBQThCckUsSUFBYSxTQUFTO0lBQXRCO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxTQUFTO0lBNUJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsNkJBQXNCO1lBQ3RCLHFDQUFnQjtZQUNoQixxQkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWiw0QkFBa0I7WUFDbEIsZ0NBQWM7WUFDZCwyQ0FBbUI7WUFDbkIsd0NBQWtCO1lBQ2xCLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCxnQ0FBYztZQUNkLG9DQUFnQjtZQUNoQiwwQkFBa0I7U0FDbkI7UUFDRCxTQUFTLEVBQUU7WUFDVCxzQkFBVztZQUNYLHVCQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7U0FDakI7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBRXJCO0FBRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFjY29yZGlvbi9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZhdm9yaXRlc0NvbXBvbmVudCB9IGZyb20gXCIuL2Zhdm9yaXRlL2Zhdm9yaXRlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBJdGVtU2VydmljZSwgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcblxuLyogUGlwZXMgKi9cbmltcG9ydCB7IEZpcnN0Y2hhcmFjdGVyUGlwZSB9IGZyb20gXCIuL3BpcGVzXCI7IC8vIGltcG9ydCBvdXIgcGlwZSBoZXJlXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxuICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgRmF2b3JpdGVzQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgQ29udGFjdENvbXBvbmVudCxcbiAgICBGaXJzdGNoYXJhY3RlclBpcGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSXRlbVNlcnZpY2UsXG4gICAgTG9naW5TZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuIl19