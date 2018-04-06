import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'app/user/profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup;
  constructor(private auth:AuthService, private router:Router){

  }
  
  ngOnInit(){
    let firstName = new FormControl(this.auth.currentUser.firstName);
    let lastName = new FormControl(this.auth.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName:lastName
    });
  }
  
  saveProfile(profileForm){
    this.auth.updateCurrentuser(profileForm.firstName, profileForm.lastName);
    this.router.navigate(['/events'])
  }
  cancel(){
    this.router.navigate(['/events'])
  }   
}