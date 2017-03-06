import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";

import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

import { User } from "./../models/user.model";
import { LoginService } from "./../services/login.service";

@Component({
  selector: "login",
  templateUrl: "./modules/login/login.component.html",
  styleUrls: ["./modules/login/login-common.css", "./modules/login/login.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  user: User;
  isLoggingIn = true;
  isAuthenticating = false;

  constructor(private router: Router,
    private userService: LoginService,
    private page: Page) {
    this.user = new User();
  }
  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  submit() {
    console.dump(this.user);
    if (!this.user.isValidEmail()) {
      alert("Enter a valid email address.");
      return;
    }

    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      this.login();
    }
  }

  login() {
    if (getConnectionType() === connectionType.none) {
      alert("App requires an internet connection to log in.");
      return;
    }

    this.userService.login(this.user)
      .subscribe(
        () => {
          this.isAuthenticating = false;
          this.router.navigate(["/"]);
        },
        (error) => {
          alert("Unfortunately we could not find your account.");
          this.isAuthenticating = false;
        }
      );
  }
}
