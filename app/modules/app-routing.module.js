"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var favorites_component_1 = require("./favorite/favorites.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'items', component: items_component_1.ItemsComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
                { path: 'favorites', component: favorites_component_1.FavoritesComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'contact', component: contact_component_1.ContactComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLDJEQUF5RDtBQUN6RCx3REFBc0Q7QUFDdEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxzRUFBb0U7QUFDcEUsMkRBQXlEO0FBQ3pELGlFQUErRDtBQWdCL0QsSUFBYSxnQkFBZ0I7SUFBN0I7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGdCQUFnQjtJQWQ1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUM7Z0JBQy9CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtnQkFDdkMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO2dCQUMzQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7Z0JBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7Z0JBQ3BELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7Z0JBQ3BELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtnQkFDNUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTthQUNqRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2l0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZhdm9yaXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZmF2b3JpdGUvZmF2b3JpdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG5cdCAgICB7IHBhdGg6ICdpdGVtcycsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnZmF2b3JpdGVzJywgY29tcG9uZW50OiBGYXZvcml0ZXNDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnY29udGFjdCcsIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudCB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG5cbn1cbiJdfQ==