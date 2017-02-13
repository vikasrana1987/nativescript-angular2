"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var color_1 = require("color");
var connectivity_1 = require("connectivity");
var animation_1 = require("ui/animation");
var dialogs_1 = require("ui/dialogs");
var page_1 = require("ui/page");
var user_model_1 = require("./../models/user.model");
var login_service_1 = require("./../services/login.service");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            alert("Groceries requires an internet connection to log in.");
            return;
        }
        this.userService.login(this.user)
            .subscribe(function () {
            _this.isAuthenticating = false;
            _this.router.navigate(["/"]);
        }, function (error) {
            alert("Unfortunately we could not find your account.");
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            alert("Groceries requires an internet connection to register.");
            return;
        }
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.isAuthenticating = false;
            _this.toggleDisplay();
        }, function (message) {
            // TODO: Verify this works
            if (message.match(/same user/)) {
                alert("This email address is already in use.");
            }
            else {
                alert("Unfortunately we were unable to create your account.");
            }
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Groceries to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.userService.resetPassword(data.text.trim())
                    .subscribe(function () {
                    alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                }, function () {
                    alert("Unfortunately, an error occurred resetting your password.");
                });
            }
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var mainContainer = this.mainContainer.nativeElement;
        mainContainer.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    LoginComponent.prototype.showMainContent = function () {
        var initialContainer = this.initialContainer.nativeElement;
        var mainContainer = this.mainContainer.nativeElement;
        var logoContainer = this.logoContainer.nativeElement;
        var formControls = this.formControls.nativeElement;
        var signUpStack = this.signUpStack.nativeElement;
        var animations = [];
        // Fade out the initial content over one half second
        initialContainer.animate({
            opacity: 0,
            duration: 500
        }).then(function () {
            // After the animation completes, hide the initial container and
            // show the main container and logo. The main container and logo will
            // not immediately appear because their opacity is set to 0 in CSS.
            initialContainer.style.visibility = "collapse";
            mainContainer.style.visibility = "visible";
            logoContainer.style.visibility = "visible";
            // Fade in the main container and logo over one half second.
            animations.push({ target: mainContainer, opacity: 1, duration: 500 });
            animations.push({ target: logoContainer, opacity: 1, duration: 500 });
            // Slide up the form controls and sign up container.
            animations.push({ target: signUpStack, translate: { x: 0, y: 0 }, opacity: 1, delay: 500, duration: 150 });
            animations.push({ target: formControls, translate: { x: 0, y: 0 }, opacity: 1, delay: 650, duration: 150 });
            // Kick off the animation queue
            new animation_1.Animation(animations, false).play();
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("initialContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "initialContainer", void 0);
__decorate([
    core_1.ViewChild("mainContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "mainContainer", void 0);
__decorate([
    core_1.ViewChild("logoContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "logoContainer", void 0);
__decorate([
    core_1.ViewChild("formControls"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "formControls", void 0);
__decorate([
    core_1.ViewChild("signUpStack"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "signUpStack", void 0);
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "gr-login",
        moduleId: module.id,
        templateUrl: "./login.component.html",
        styleUrls: ["./login-common.css", "./login.component.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        login_service_1.LoginService,
        page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBQ3pDLCtCQUE4QjtBQUM5Qiw2Q0FBaUU7QUFDakUsMENBQXlDO0FBRXpDLHNDQUFvQztBQUNwQyxnQ0FBK0I7QUFHL0IscURBQThDO0FBQzlDLDZEQUEyRDtBQVEzRCxJQUFhLGNBQWM7SUFhekIsd0JBQW9CLE1BQWMsRUFDeEIsV0FBeUIsRUFDekIsSUFBVTtRQUZBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQWJwQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFhdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFD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QyxhQUFhLENBQUM7OEJBQWMsaUJBQVU7bURBQUM7QUFDM0I7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQVcsaUJBQVU7Z0RBQUM7QUFYakMsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLENBQUM7S0FDM0QsQ0FBQztxQ0FjNEIsZUFBTTtRQUNYLDRCQUFZO1FBQ25CLFdBQUk7R0FmVCxjQUFjLENBd0oxQjtBQXhKWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWxvZ2luXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlcjogVXNlcjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG5cblxuICBAVmlld0NoaWxkKFwiaW5pdGlhbENvbnRhaW5lclwiKSBpbml0aWFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibWFpbkNvbnRhaW5lclwiKSBtYWluQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibG9nb0NvbnRhaW5lclwiKSBsb2dvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZm9ybUNvbnRyb2xzXCIpIGZvcm1Db250cm9sczogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInNpZ25VcFN0YWNrXCIpIHNpZ25VcFN0YWNrOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAoIXRoaXMudXNlci5pc1ZhbGlkRW1haWwoKSkge1xuICAgICAgYWxlcnQoXCJFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgYWxlcnQoXCJHcm9jZXJpZXMgcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgYWxlcnQoXCJHcm9jZXJpZXMgcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byByZWdpc3Rlci5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAvLyBUT0RPOiBWZXJpZnkgdGhpcyB3b3Jrc1xuICAgICAgICAgIGlmIChtZXNzYWdlLm1hdGNoKC9zYW1lIHVzZXIvKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UuXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgcHJvbXB0KHtcbiAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgR3JvY2VyaWVzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gPFZpZXc+dGhpcy5tYWluQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbWFpbkNvbnRhaW5lci5hbmltYXRlKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpIDogbmV3IENvbG9yKFwiIzMwMTIxN1wiKSxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0QmFja2dyb3VuZEFuaW1hdGlvbihiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZC5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7IHg6IDEuMCwgeTogMS4wIH0sXG4gICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dNYWluQ29udGVudCgpIHtcbiAgICBsZXQgaW5pdGlhbENvbnRhaW5lciA9IDxWaWV3PnRoaXMuaW5pdGlhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gPFZpZXc+dGhpcy5tYWluQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGxvZ29Db250YWluZXIgPSA8Vmlldz50aGlzLmxvZ29Db250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgZm9ybUNvbnRyb2xzID0gPFZpZXc+dGhpcy5mb3JtQ29udHJvbHMubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgc2lnblVwU3RhY2sgPSA8Vmlldz50aGlzLnNpZ25VcFN0YWNrLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGFuaW1hdGlvbnMgPSBbXTtcblxuICAgIC8vIEZhZGUgb3V0IHRoZSBpbml0aWFsIGNvbnRlbnQgb3ZlciBvbmUgaGFsZiBzZWNvbmRcbiAgICBpbml0aWFsQ29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQWZ0ZXIgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMsIGhpZGUgdGhlIGluaXRpYWwgY29udGFpbmVyIGFuZFxuICAgICAgLy8gc2hvdyB0aGUgbWFpbiBjb250YWluZXIgYW5kIGxvZ28uIFRoZSBtYWluIGNvbnRhaW5lciBhbmQgbG9nbyB3aWxsXG4gICAgICAvLyBub3QgaW1tZWRpYXRlbHkgYXBwZWFyIGJlY2F1c2UgdGhlaXIgb3BhY2l0eSBpcyBzZXQgdG8gMCBpbiBDU1MuXG4gICAgICBpbml0aWFsQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICBtYWluQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIGxvZ29Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgICAvLyBGYWRlIGluIHRoZSBtYWluIGNvbnRhaW5lciBhbmQgbG9nbyBvdmVyIG9uZSBoYWxmIHNlY29uZC5cbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogbWFpbkNvbnRhaW5lciwgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9KTtcbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogbG9nb0NvbnRhaW5lciwgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9KTtcblxuICAgICAgLy8gU2xpZGUgdXAgdGhlIGZvcm0gY29udHJvbHMgYW5kIHNpZ24gdXAgY29udGFpbmVyLlxuICAgICAgYW5pbWF0aW9ucy5wdXNoKHsgdGFyZ2V0OiBzaWduVXBTdGFjaywgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSwgb3BhY2l0eTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246IDE1MCB9KTtcbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogZm9ybUNvbnRyb2xzLCB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LCBvcGFjaXR5OiAxLCBkZWxheTogNjUwLCBkdXJhdGlvbjogMTUwIH0pO1xuXG4gICAgICAvLyBLaWNrIG9mZiB0aGUgYW5pbWF0aW9uIHF1ZXVlXG4gICAgICBuZXcgQW5pbWF0aW9uKGFuaW1hdGlvbnMsIGZhbHNlKS5wbGF5KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==