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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdGQUE4RTtBQUM5RSxzQ0FBMkQ7QUFDM0Qsa0RBQW1FO0FBR25FLDJEQUF3RDtBQUV4RCxnQkFBZ0I7QUFDaEIsaURBQStDO0FBQy9DLDJEQUF5RDtBQUN6RCx3REFBc0Q7QUFDdEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxzRUFBb0U7QUFDcEUsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCxtQ0FBd0M7QUFFeEMsY0FBYztBQUNkLHVDQUF1RDtBQUV2RCxXQUFXO0FBQ1gsaUNBQTZDLENBQUMsdUJBQXVCO0FBNkJyRSxJQUFhLFNBQVM7SUFBdEI7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFNBQVM7SUEzQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIscUNBQWdCO1lBQ2hCLHFCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNaLGdDQUFjO1lBQ2QsMkNBQW1CO1lBQ25CLHdDQUFrQjtZQUNsQiw4QkFBYTtZQUNiLGdDQUFjO1lBQ2QsZ0NBQWM7WUFDZCxvQ0FBZ0I7WUFDaEIsMEJBQWtCO1NBQ25CO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsc0JBQVc7WUFDWCx1QkFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUVyQjtBQUZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGYXZvcml0ZXNDb21wb25lbnQgfSBmcm9tIFwiLi9mYXZvcml0ZS9mYXZvcml0ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XG5cbi8qIFBpcGVzICovXG5pbXBvcnQgeyBGaXJzdGNoYXJhY3RlclBpcGUgfSBmcm9tIFwiLi9waXBlc1wiOyAvLyBpbXBvcnQgb3VyIHBpcGUgaGVyZVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgRmF2b3JpdGVzQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgQ29udGFjdENvbXBvbmVudCxcbiAgICBGaXJzdGNoYXJhY3RlclBpcGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSXRlbVNlcnZpY2UsXG4gICAgTG9naW5TZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuIl19