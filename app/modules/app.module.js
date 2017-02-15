"use strict";
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdGQUE4RTtBQUM5RSxzQ0FBMkQ7QUFDM0Qsa0RBQW1FO0FBR25FLDJEQUF3RDtBQUV4RCxnQkFBZ0I7QUFDaEIsaURBQStDO0FBQy9DLDJEQUF5RDtBQUN6RCx3REFBc0Q7QUFDdEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxzRUFBb0U7QUFDcEUsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCxtQ0FBd0M7QUFFeEMsY0FBYztBQUNkLHVDQUF1RDtBQUV2RCxXQUFXO0FBQ1gsaUNBQTZDLENBQUMsdUJBQXVCO0FBNkJyRSxJQUFhLFNBQVM7SUFBdEI7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFNBQVM7SUEzQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIscUNBQWdCO1lBQ2hCLHFCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNiLGdDQUFjO1lBQ2IsMkNBQW1CO1lBQ25CLHdDQUFrQjtZQUNsQiw4QkFBYTtZQUNiLGdDQUFjO1lBQ2QsZ0NBQWM7WUFDZCxvQ0FBZ0I7WUFDakIsMEJBQWtCO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Ysc0JBQVc7WUFDVix1QkFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1YsdUJBQWdCO1NBQ2Q7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBRXJCO0FBRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGYXZvcml0ZXNDb21wb25lbnQgfSBmcm9tIFwiLi9mYXZvcml0ZS9mYXZvcml0ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XG5cbi8qIFBpcGVzICovXG5pbXBvcnQgeyBGaXJzdGNoYXJhY3RlclBpcGUgfSBmcm9tICcuL3BpcGVzJzsgLy8gaW1wb3J0IG91ciBwaXBlIGhlcmVcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcblx0ICBJdGVtc0NvbXBvbmVudCxcbiAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIEZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEFib3V0Q29tcG9uZW50LFxuICAgIENvbnRhY3RDb21wb25lbnQsXG5cdCAgRmlyc3RjaGFyYWN0ZXJQaXBlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICBcdEl0ZW1TZXJ2aWNlLFxuICAgIExvZ2luU2VydmljZVxuICBdLFxuICBzY2hlbWFzOiBbXG5cdE5PX0VSUk9SU19TQ0hFTUFcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG4iXX0=