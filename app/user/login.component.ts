import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl:'app/user/login.component.html',
    styles:[`
    em{float:right; color:#E05C65; padding-left:10px;}
    `]
})

export class LoginComponent{
    userName;
    password;
    mouseOverLogin;
    constructor(private authService:AuthService, private route:Router){
        
    }
    login(loginValues){
        this.authService.loginUser(loginValues.userName, loginValues.password);
        this.route.navigate(["/events"]);
    }
    cancel(){
        this.route.navigate(["/events"]);
    }
    
}