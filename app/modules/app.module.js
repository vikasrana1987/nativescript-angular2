"use strict";
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var item_service_1 = require("./services/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var shared_1 = require("./shared");
var login_service_1 = require("./services/login.service");
var login_module_1 = require("./login/login.module");
/* Pipes */
var firstcharacter_pipe_1 = require("./pipes/firstcharacter.pipe"); // import our pipe here
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
            shared_1.SharedModule,
            login_module_1.LoginModule
        ],
        declarations: [
            app_component_1.AppComponent,
            items_component_1.ItemsComponent,
            item_detail_component_1.ItemDetailComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            firstcharacter_pipe_1.FirstcharacterPipe
        ],
        providers: [
            item_service_1.ItemService,
            login_service_1.LoginService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdGQUE4RTtBQUM5RSxzQ0FBMkQ7QUFDM0Qsa0RBQW1FO0FBR25FLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0Msd0RBQXNEO0FBQ3RELHdEQUFzRDtBQUN0RCwwREFBd0Q7QUFDeEQsc0VBQW1FO0FBQ25FLDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsbUNBQXdDO0FBRXhDLDBEQUF3RDtBQUN4RCxxREFBbUQ7QUFFbkQsV0FBVztBQUNYLG1FQUFpRSxDQUFDLHVCQUF1QjtBQTRCekYsSUFBYSxTQUFTO0lBQXRCO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxTQUFTO0lBMUJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsNkJBQXNCO1lBQ3RCLHFDQUFnQjtZQUNoQixxQkFBWTtZQUNaLDBCQUFXO1NBQ1o7UUFDRCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNiLGdDQUFjO1lBQ2IsMkNBQW1CO1lBQ25CLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCxvQ0FBZ0I7WUFDakIsd0NBQWtCO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsMEJBQVc7WUFDViw0QkFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1YsdUJBQWdCO1NBQ2Q7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBRXJCO0FBRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZCc7XG5cbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4vbG9naW4ubW9kdWxlXCI7XG5cbi8qIFBpcGVzICovXG5pbXBvcnQgeyBGaXJzdGNoYXJhY3RlclBpcGUgfSBmcm9tICcuL3BpcGVzL2ZpcnN0Y2hhcmFjdGVyLnBpcGUnOyAvLyBpbXBvcnQgb3VyIHBpcGUgaGVyZVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgTG9naW5Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuXHQgIEl0ZW1zQ29tcG9uZW50LFxuICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBBYm91dENvbXBvbmVudCxcbiAgICBDb250YWN0Q29tcG9uZW50LFxuXHQgIEZpcnN0Y2hhcmFjdGVyUGlwZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgXHRJdGVtU2VydmljZSxcbiAgICBMb2dpblNlcnZpY2VcbiAgXSxcbiAgc2NoZW1hczogW1xuXHROT19FUlJPUlNfU0NIRU1BXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuIl19